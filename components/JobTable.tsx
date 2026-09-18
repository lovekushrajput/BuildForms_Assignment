"use client";

import type { Job } from "@/types/jobs";
import JobRow from "@/components/JobRow";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type JobsTableProps = {
    jobs: Job[];
    onJobClick: (job: Job) => void;
};

export default function JobsTable({
    jobs,
    onJobClick,
}: JobsTableProps) {
    return (
        <div className="overflow-x-auto rounded-lg border bg-background">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Job ID</TableHead>
                        <TableHead>Product</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Machine</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {jobs.length > 0 ? (
                        jobs.map((job) => (
                            <JobRow
                                key={job.id}
                                job={job}
                                onClick={onJobClick}
                            />
                        ))
                    ) : (
                        <TableRow>
                            <td
                                colSpan={7}
                                className="py-10 text-center text-muted-foreground"
                            >
                                No jobs found.
                            </td>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}