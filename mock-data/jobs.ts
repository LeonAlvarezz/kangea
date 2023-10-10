type Job = {
    id: number,
    job_type: string,
    position: string, 
    company: string,
    location: string,
    datePosted: Date,
    salary: number
}



const jobs:Job[] = [
    {
        id: 1,
        job_type: "Intern",
        position: "Junior IT Support",
        company: "Smart Axiata",
        location: "Phnom Penh",
        datePosted: new Date(2023, 10, 20),
        salary: 3000
    },


    {
        id: 2,
        job_type: "Intern",
        position: "Junior IT Support",
        company: "Smart Axiata",
        location: "Phnom Penh",
        datePosted: new Date(2023, 10, 20),
        salary: 3000
    },


    {
        id: 3,
        job_type: "Intern",
        position: "Junior IT Support",
        company: "Smart Axiata",
        location: "Phnom Penh",
        datePosted: new Date(2023, 5, 20),
        salary: 3000
    },
]

export default jobs;