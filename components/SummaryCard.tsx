import { Card, CardContent } from "@/components/ui/card";

type summaryCardsProps = {
    total: number;
    delayed: number;
    dueSoon: number;
    completed: number;
}


export default function SummaryCard({
    total,
    delayed,
    dueSoon,
    completed
}: summaryCardsProps) {
    const cards = [
        { title: "Total Jobs", value: total },
        { title: "Delayed Jobs", value: delayed },
        { title: "Due Soon", value: dueSoon },
        { title: "Completed Jobs", value: completed },
    ];

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
                <Card key={card.title}>
                    <CardContent className="p-5">
                        <p className="text-sm text-muted-foreground">{card.title}</p>
                        <p className="mt-2 text-3xl font-bold">{card.value}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
