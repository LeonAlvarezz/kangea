type Job = {
  id: number;
  job_type: string;
  position: string;
  company: string;
  location: string;
  datePosted: Date;
  salary: string;
  image: string;
  imageAlt: string;
};

type Category = {
  id: number;
  name: string;
};
export type { Job };
