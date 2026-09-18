"use client";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type JobFiltersProps = {
    search: string;
    setSearch: (value: string) => void;
    status: string;
    setStatus: (value: string) => void;
    sortBy: string;
    setSortBy: (value: string) => void;
};

export default function JobFilters({
    search,
    setSearch,
    status,
    setStatus,
    sortBy,
    setSortBy,
}: JobFiltersProps) {
    return (
        <div className="flex flex-col gap-3 rounded-lg border bg-background p-4 md:flex-row">
            <Input
                placeholder="Search by job ID, product or customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="md:flex-1"
            />

            <Select
                value={status}
                onValueChange={(value) => {
                    if (value !== null) {
                        setStatus(value);
                    }
                }}

            >
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="All">All Statuses</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Delayed">Delayed</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
            </Select>

            <Select
                value={sortBy}
                onValueChange={(value) => {
                    if (value !== null) {
                        setSortBy(value);
                    }
                }}
            >
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="dueDate">Due Date</SelectItem>
                    <SelectItem value="quantity">Quantity</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}