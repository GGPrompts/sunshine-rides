import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data for support tickets
const tickets = [
  {
    id: "TKT-001",
    customer: "Maria Garcia",
    subject: "Wheelchair ramp not deployed",
    priority: "high",
    status: "open",
    created: "2 hours ago",
  },
  {
    id: "TKT-002",
    customer: "James Wilson",
    subject: "Driver arrived late",
    priority: "medium",
    status: "in_progress",
    created: "4 hours ago",
  },
  {
    id: "TKT-003",
    customer: "Sarah Chen",
    subject: "Billing question about Medicaid",
    priority: "low",
    status: "pending",
    created: "1 day ago",
  },
  {
    id: "TKT-004",
    customer: "Robert Johnson",
    subject: "Request for regular pickup schedule",
    priority: "low",
    status: "resolved",
    created: "2 days ago",
  },
  {
    id: "TKT-005",
    customer: "Emily Davis",
    subject: "Vehicle cleanliness concern",
    priority: "medium",
    status: "open",
    created: "3 hours ago",
  },
  {
    id: "TKT-006",
    customer: "Michael Brown",
    subject: "Lost item in vehicle",
    priority: "high",
    status: "in_progress",
    created: "5 hours ago",
  },
]

// Mock metrics data
const metrics = {
  ticketStats: {
    open: 12,
    inProgress: 8,
    pending: 5,
    resolved: 147,
  },
  satisfaction: 4.7,
  avgResponseTime: "12 min",
  avgResolutionTime: "2.4 hrs",
  todayResolved: 23,
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "high":
      return <Badge className="bg-destructive text-destructive-foreground">High</Badge>
    case "medium":
      return <Badge className="bg-warning text-warning-foreground">Medium</Badge>
    case "low":
      return <Badge className="bg-info text-info-foreground">Low</Badge>
    default:
      return <Badge variant="secondary">{priority}</Badge>
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "open":
      return <Badge variant="outline" className="border-destructive text-destructive">Open</Badge>
    case "in_progress":
      return <Badge variant="outline" className="border-warning text-warning">In Progress</Badge>
    case "pending":
      return <Badge variant="outline" className="border-muted-foreground text-muted-foreground">Pending</Badge>
    case "resolved":
      return <Badge variant="outline" className="border-success text-success">Resolved</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function SupportDashboard() {
  return (
    <div className="min-h-screen bg-background p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Support Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Monitor customer service metrics and manage support tickets
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Open Tickets</CardDescription>
              <CardTitle className="text-3xl text-destructive">{metrics.ticketStats.open}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                +3 from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>In Progress</CardDescription>
              <CardTitle className="text-3xl text-warning">{metrics.ticketStats.inProgress}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Being handled by agents
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending Response</CardDescription>
              <CardTitle className="text-3xl text-muted-foreground">{metrics.ticketStats.pending}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Awaiting customer reply
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Resolved Today</CardDescription>
              <CardTitle className="text-3xl text-success">{metrics.todayResolved}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                {metrics.ticketStats.resolved} total this month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Metrics Row */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardDescription>Customer Satisfaction</CardDescription>
              <CardTitle className="flex items-baseline gap-2">
                <span className="text-4xl text-primary">{metrics.satisfaction}</span>
                <span className="text-lg text-muted-foreground">/ 5.0</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-5 w-5 ${star <= Math.round(metrics.satisfaction) ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Based on 234 reviews this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Avg. Response Time</CardDescription>
              <CardTitle className="text-4xl text-success">{metrics.avgResponseTime}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Target: under 15 minutes
              </p>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-4/5 rounded-full bg-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Avg. Resolution Time</CardDescription>
              <CardTitle className="text-4xl">{metrics.avgResolutionTime}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Target: under 4 hours
              </p>
              <div className="mt-2 h-2 w-full rounded-full bg-muted">
                <div className="h-2 w-3/5 rounded-full bg-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Tickets Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Tickets</CardTitle>
            <CardDescription>Latest customer support requests</CardDescription>
          </CardHeader>
          <CardContent className="px-0 sm:px-6">
            {/* Mobile Card View */}
            <div className="space-y-3 px-4 sm:hidden">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="rounded-lg border p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">{ticket.id}</p>
                      <p className="font-medium">{ticket.customer}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {getPriorityBadge(ticket.priority)}
                      {getStatusBadge(ticket.status)}
                    </div>
                  </div>
                  <p className="text-sm">{ticket.subject}</p>
                  <p className="text-xs text-muted-foreground">{ticket.created}</p>
                </div>
              ))}
            </div>
            {/* Desktop Table View */}
            <div className="hidden sm:block overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Ticket ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                      <TableCell className="font-medium">{ticket.customer}</TableCell>
                      <TableCell className="max-w-[300px] truncate">{ticket.subject}</TableCell>
                      <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{ticket.created}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
