export default function DashboardHeader() {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
                Production Control
            </h1>

            <p className="text-sm text-muted-foreground">
                Monitor production jobs, machine assignments, and issues.
            </p>
        </div>
    );
}