"use client";

import { useMemo, useState } from "react";

import DashboardHeader from "@/components/DashboardHeader";
import SummaryCards from "@/components/SummaryCard";
import JobFilters from "@/components/JobFilters";
import JobsTable from "@/components/JobTable";
import JobDetailPanel from "@/components/JobDetail";

import { jobs as initialJobs } from "@/data/jobs";
import type { Job, JobStatus } from "@/types/jobs";

export default function Home() {
    const [jobs, setJobs] = useState<Job[]>(initialJobs);

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [sortBy, setSortBy] = useState("dueDate");

    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [panelOpen, setPanelOpen] = useState(false);

    const filteredJobs = useMemo(() => {
        let result = [...jobs];

        if (search.trim()) {
            const searchText = search.toLowerCase();

            result = result.filter(
                (job) =>
                    job.id.toLowerCase().includes(searchText) ||
                    job.product.toLowerCase().includes(searchText) ||
                    job.customer.toLowerCase().includes(searchText)
            );
        }

        if (status !== "All") {
            result = result.filter((job) => job.status === status);
        }

        if (sortBy === "dueDate") {
            result.sort(
                (a, b) =>
                    new Date(a.dueDate).getTime() -
                    new Date(b.dueDate).getTime()
            );
        }

        if (sortBy === "quantity") {
            result.sort((a, b) => b.quantity - a.quantity);
        }

        return result;
    }, [jobs, search, status, sortBy]);

    const totalJobs = jobs.length;

    const delayedJobs = jobs.filter(
        (job) => job.status === "Delayed"
    ).length;

    const completedJobs = jobs.filter(
        (job) => job.status === "Completed"
    ).length;

    const dueSoon = jobs.filter((job) => {
        const today = new Date();
        const dueDate = new Date(job.dueDate);

        const difference =
            dueDate.getTime() - today.getTime();

        const days = difference / (1000 * 60 * 60 * 24);

        return days >= 0 && days <= 2;
    }).length;

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        setPanelOpen(true);
    };

    const handleStatusChange = (
        jobId: string,
        newStatus: JobStatus
    ) => {
        setJobs((currentJobs) =>
            currentJobs.map((job) =>
                job.id === jobId
                    ? { ...job, status: newStatus }
                    : job
            )
        );

        setSelectedJob((currentJob) =>
            currentJob && currentJob.id === jobId
                ? { ...currentJob, status: newStatus }
                : currentJob
        );
    };

    return (
        <main className="min-h-screen bg-muted/30">
            <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">

                <DashboardHeader />

                <SummaryCards
                    total={totalJobs}
                    delayed={delayedJobs}
                    dueSoon={dueSoon}
                    completed={completedJobs}
                />

                <JobFilters
                    search={search}
                    setSearch={setSearch}
                    status={status}
                    setStatus={setStatus}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <JobsTable
                    jobs={filteredJobs}
                    onJobClick={handleJobClick}
                />

                <JobDetailPanel
                    job={selectedJob}
                    open={panelOpen}
                    onOpenChange={setPanelOpen}
                    onStatusChange={handleStatusChange}
                />

            </div>
        </main>
    );
}