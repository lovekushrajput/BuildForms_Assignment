"use client";

import type { Job, JobStatus } from "@/types/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type JobDetailPanelProps = {
    job: Job | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onStatusChange: (jobId: string, status: JobStatus) => void;
};

export default function JobDetailPanel({
    job,
    open,
    onOpenChange,
    onStatusChange,
}: JobDetailPanelProps) {
    if (!job) {
        return null;
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>{job.id}</SheetTitle>
                    <SheetDescription>
                        Production job details and status
                    </SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Product
                        </p>
                        <p className="mt-1 font-medium">
                            {job.product}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Customer
                        </p>
                        <p className="mt-1 font-medium">
                            {job.customer}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Quantity
                            </p>
                            <p className="mt-1 font-medium">
                                {job.quantity}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Due Date
                            </p>
                            <p className="mt-1 font-medium">
                                {job.dueDate}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Assigned Machine
                        </p>
                        <p className="mt-1 font-medium">
                            {job.machine}
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            Current Status
                        </p>

                        <Badge variant="outline">
                            {job.status}
                        </Badge>
                    </div>

                    <div>
                        <p className="mb-2 text-sm text-muted-foreground">
                            Notes / Issues
                        </p>

                        <div className="rounded-md border bg-muted/30 p-3 text-sm">
                            {job.notes || "No notes or issues reported."}
                        </div>
                    </div>

                    <div className="border-t pt-5">
                        <p className="mb-2 text-sm font-medium">
                            Update Status
                        </p>

                        <Select
                            value={job.status}
                            onValueChange={(value) => {
                                if (value) {
                                    onStatusChange(
                                        job.id,
                                        value as JobStatus
                                    );
                                }
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>
                                <SelectItem value="In Progress">
                                    In Progress
                                </SelectItem>
                                <SelectItem value="Delayed">
                                    Delayed
                                </SelectItem>
                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button
                        className="w-full"
                        onClick={() => onOpenChange(false)}
                    >
                        Done
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}