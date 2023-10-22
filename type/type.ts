type Job = {
  PostingID: number;
  DatePosted: Date;
  Location: string;
  ImageLink: string | null;
  Title: string;
  CompanyName: string;
  ResourceType: string;
  WorkingSchedule: string;
  Experience: string;
  Salary: string;
};

type Category = {
  id: number;
  name: string;
};
export type { Job };
