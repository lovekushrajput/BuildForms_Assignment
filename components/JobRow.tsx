import type { Job } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";

type JobRowProps = {
  job: Job;
  onClick: (job: Job) => void;
};

export default function JobRow({ job, onClick }: JobRowProps) {
  return (
    <TableRow
      className="cursor-pointer hover:bg-muted/50"
      onClick={() => onClick(job)}
    >
      <TableCell className="font-medium">
        {job.id}
      </TableCell>

      <TableCell>
        {job.product}
      </TableCell>

      <TableCell>
        {job.customer}
      </TableCell>

      <TableCell>
        {job.quantity}
      </TableCell>

      <TableCell>
        {job.dueDate}
      </TableCell>

      <TableCell>
        <Badge variant="outline">
          {job.status}
        </Badge>
      </TableCell>

      <TableCell>
        {job.machine}
      </TableCell>
    </TableRow>
  );
}