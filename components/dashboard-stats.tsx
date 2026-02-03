import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckCircle, Clock } from "lucide-react";

interface DashboardStatsProps {
  totalRegistrations: number;
  completedPayments: number;
  pendingPayments: number;
}

export function DashboardStats({
  totalRegistrations,
  completedPayments,
  pendingPayments,
}: DashboardStatsProps) {
  const stats = [
    {
      title: "Total Registrations",
      value: totalRegistrations,
      icon: Users,
      description: "Total number of registered participants",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Completed Payments",
      value: completedPayments,
      icon: CheckCircle,
      description: "Registrations with confirmed payment",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Pending Payments",
      value: pendingPayments,
      icon: Clock,
      description: "Awaiting payment confirmation",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`rounded-lg p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
