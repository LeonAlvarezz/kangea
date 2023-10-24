const pool = require('../database/connection');

const getPostings = async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Query to select all postings
    const [allResults, fields] = await connection.query(
      'SELECT * FROM jobPosting'
    );

    // Release the connection back to the pool
    connection.release();

    // Create an array to store the results of SELECT queries
    const resultsArray = [];

    // Define a function to fetch additional data for each posting
    async function fetchAdditionalData(posting) {
      const titleId = posting.TitleID;
      const resourceId = posting.ResourceID;
      // Perform a SELECT statement for additional data based on titleId
      const [additionalResult, _] = await pool.query(
        'SELECT * FROM Title WHERE TitleID = ?',
        [titleId]
      );

      // Perform a SELECT statement for additional data based on titleId
      const [additionalResource, ____] = await pool.query(
        'SELECT * FROM AdditionalResource WHERE ResourceID = ?',
        [resourceId]
      );

      // Perform another SELECT query to get CompanyName
      const [companyResult, __] = await pool.query(
        'SELECT CompanyName FROM Company WHERE CompanyID = ?',
        [additionalResult[0].CompanyID]
      );

      return {
        PostingID: posting.PostingID,
        TitleID: posting.TitleID,
        ResourceID: posting.ResourceID,
        DatePosted: posting.DatePosted,
        Location: posting.Location,
        ImageLink: posting.ImageLink,
        CompanyName: companyResult[0].CompanyName, // Add CompanyName
        TitleName: additionalResult[0].TitleName, // Add TitleName
        Salary: additionalResource[0].Salary,
        Type: additionalResource[0].Type,
      };
    }

    // Use Promise.all to execute all SELECT queries concurrently
    const additionalDataPromises = allResults.map(fetchAdditionalData);
    const additionalData = await Promise.all(additionalDataPromises);

    // Send the combined results as a JSON response
    res.json(additionalData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getPostingById = async (req, res) => {
  try {
    // Get id from Param
    const id = req.params.id; // Use req.params.id to get the parameter
    console.log(id);

    // Get connection from the pool
    const con = await pool.getConnection();

    // Select data by joining Title, Resource, and JobPosting tables
    const [rows] = await con.query(
      `
      SELECT
        jp.PostingID,
        jp.DatePosted,
        jp.Location,
        jp.ImageLink,
        t.TitleName AS 'Title',
        c.CompanyName AS 'CompanyName',
        r.Type AS 'ResourceType',
        r.Working_Schedule AS 'WorkingSchedule',
        r.Experience AS 'Experience',
        r.Salary AS 'Salary'
      FROM
        JobPosting jp
      INNER JOIN
        Title t ON jp.TitleID = t.TitleID
      INNER JOIN
        Company c ON t.CompanyID = c.CompanyID
      INNER JOIN
        AdditionalResource r ON jp.ResourceID = r.ResourceID
      WHERE
        jp.PostingID = ?;
    `,
      [id]
    );

    con.release();
    res.json(rows[0]); // Assuming you expect a single result
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
};

const updatePostingById = async (req, res) => {
  const id = req.params.id;

  try {
    const connection = await pool.getConnection();

    // Start a transaction
    await connection.beginTransaction();

    // Execute the SELECT query to retrieve TitleID and ResourceID
    const [postIdResult] = await connection.query(
      'SELECT TitleID, ResourceID FROM JobPosting WHERE PostingID = ?',
      [id]
    );

    if (postIdResult.length === 0) {
      await connection.rollback();
      connection.release();
      return res.status(404).json({ error: 'Posting not found' });
    }

    const [titleResult] = await connection.query(
      'SELECT CompanyID FROM Title WHERE TitleID = ?',
      [postIdResult[0].TitleID]
    );

    const { Title, Resource, DatePosted, Location, ImageLink } = req.body;

    // Update the Title table
    const [titleUpdateResult] = await connection.query(
      'UPDATE Title SET TitleName = ? WHERE TitleID = ?',
      [Title.TitleName, postIdResult[0].TitleID]
    );

    // Update the Company table
    const [companyUpdateResult] = await connection.query(
      'UPDATE Company SET CompanyName = ? WHERE CompanyID = ?',
      [Title.CompanyName, titleResult[0].CompanyID] // Corrected order
    );

    // I am an idiot for not realising the order

    // console.log(companyUpdateResult)
    // console.log(titleUpdateResult)

    // Update the Resource table
    const [resourceUpdateResult] = await connection.query(
      'UPDATE AdditionalResource SET Type = ?, Working_Schedule = ?, Experience = ?, Salary = ? WHERE ResourceID = ?',
      [
        Resource.Type,
        Resource.Working_Schedule,
        Resource.Experience,
        Resource.Salary,
        postIdResult[0].ResourceID,
      ]
    );

    // Update the JobPosting table
    const [postingUpdateResult] = await connection.query(
      'UPDATE JobPosting SET DatePosted = ?, Location = ?, ImageLink = ? WHERE PostingID = ?',
      [DatePosted, Location, ImageLink, id]
    );

    // Commit the transaction
    await connection.commit();
    connection.release();

    if (
      titleUpdateResult.affectedRows === 0 ||
      companyUpdateResult.affectedRows === 0 ||
      resourceUpdateResult.affectedRows === 0 ||
      postingUpdateResult.affectedRows === 0
    ) {
      return res.status(404).json({ error: 'Posting not found' });
    }

    console.log('Post updated');
    res.json({ message: 'Posting updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });

    // Rollback the transaction in case of an error
    if (connection) {
      await connection.rollback();
      connection.release();
    }
  }
};

// const addPosting = async (data) => {
//   try {
//     const connection = await pool.getConnection();

//     console.log(data.body)
//     // Step 1: Insert into Company Table
//     const [companyResult] = await connection.query('INSERT INTO Company (CompanyName) VALUES (?) ON DUPLICATE KEY UPDATE CompanyName=VALUES(CompanyName)', [data.body.Title.CompanyName]);

//     // Step 2: Insert into Title Table
//     const [titleResult] = await connection.query('INSERT INTO Title (CompanyID, TitleName) VALUES (?, ?)', [companyResult.insertId, data.body.Title.TitleName]);

//     // Step 3: Insert into Resource Table
//     const [resourceResult] = await connection.query('INSERT INTO AdditionalResource (Type, Working_Schedule, Experience, Salary) VALUES (?, ?, ?, ?)', [data.body.Resource.Type, data.body.Resource.Working_Schedule, data.body.Resource.Experience, data.body.Resource.Salary]);

//     // Step 4: Insert into JobPosting Table
//     const [jobPostingResult] = await connection.query('INSERT INTO JobPosting (TitleID, ResourceID, DatePosted, Location, ImageLink) VALUES (?, ?, ?, ?, ?)', [titleResult.insertId, resourceResult.insertId, data.body.DatePosted, data.body.Location, data.body.ImageLink]);

//     connection.release();

//     return jobPostingResult.insertId;
//   } catch (error) {
//     throw error;
//   }
// }

const addPosting = async (data, res) => {
  try {
    const connection = await pool.getConnection();

    // Step 1: Insert into Company Table
    const [companyResult] = await connection.query(
      'INSERT INTO Company (CompanyName) VALUES (?) ON DUPLICATE KEY UPDATE CompanyName=VALUES(CompanyName)',
      [data.body.CompanyName]
    );

    // Step 2: Insert into Title Table
    const [titleResult] = await connection.query(
      'INSERT INTO Title (CompanyID, TitleName) VALUES (?, ?)',
      [companyResult.insertId, data.body.Title]
    );

    // Step 3: Insert into Resource Table
    const [resourceResult] = await connection.query(
      'INSERT INTO AdditionalResource (Type, Working_Schedule, Experience, Salary) VALUES (?, ?, ?, ?)',
      [
        data.body.ResourceType,
        data.body.WorkingSchedule,
        data.body.Experience,
        data.body.Salary,
      ]
    );

    // Step 4: Insert into JobPosting Table
    const [jobPostingResult] = await connection.query(
      'INSERT INTO JobPosting (TitleID, ResourceID, DatePosted, Location, ImageLink) VALUES (?, ?, ?, ?, ?)',
      [
        titleResult.insertId,
        resourceResult.insertId,
        data.body.DatePosted,
        data.body.Location,
        data.body.ImageLink,
      ]
    );

    connection.release();
    console.log('Data Body: ', data.body);

    return res
      .status(200)
      .json({ message: 'Successfully added to the database' });
  } catch (error) {
    throw error;
    console.error(error);
    res.status(500).json({ error: 'Internal Server error' });
  }
};

module.exports = {
  getPostings,
  addPosting,
  getPostingById,
  updatePostingById,
};
