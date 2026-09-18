export type JobStatus =
  | "Pending"
  | "In Progress"
  | "Delayed"
  | "Completed";

export type Job = {
  id: string;
  product: string;
  customer: string;
  quantity: number;
  dueDate: string;
  status: JobStatus;
  machine: string;
  notes: string;
};