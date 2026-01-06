import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// Mock data for current ride
const currentRide = {
  id: "RIDE-2847",
  status: "in_progress" as const,
  pickup: "Grand Junction Medical Center",
  dropoff: "1247 Patterson Road, Grand Junction",
  scheduledTime: "2:30 PM",
  estimatedArrival: "2:45 PM",
  etaMinutes: 12,
  progress: 65,
  driver: {
    name: "Marcus Johnson",
    photo: "/driver.png",
    rating: 4.9,
    vehicleInfo: "2023 Toyota Sienna - Silver",
    licensePlate: "CO-SUN-847",
    phone: "(970) 555-0147",
  },
  fare: "$24.50",
}

// Mock data for recent rides
const recentRides = [
  {
    id: "RIDE-2846",
    date: "Jan 5, 2026",
    pickup: "Montrose Regional Hospital",
    dropoff: "245 S Cascade Ave, Montrose",
    status: "completed" as const,
    fare: "$18.75",
  },
  {
    id: "RIDE-2843",
    date: "Jan 4, 2026",
    pickup: "Telluride Town Park",
    dropoff: "Mountain Village Center",
    status: "completed" as const,
    fare: "$32.00",
  },
  {
    id: "RIDE-2840",
    date: "Jan 3, 2026",
    pickup: "Denver International Airport",
    dropoff: "1600 Broadway, Denver",
    status: "completed" as const,
    fare: "$67.25",
  },
  {
    id: "RIDE-2838",
    date: "Jan 2, 2026",
    pickup: "Vail Medical Center",
    dropoff: "392 E Lionshead Circle, Vail",
    status: "cancelled" as const,
    fare: "$0.00",
  },
]

function StatusBadge({ status }: { status: "in_progress" | "completed" | "cancelled" | "scheduled" }) {
  const variants = {
    in_progress: { label: "In Progress", className: "bg-info text-info-foreground" },
    completed: { label: "Completed", className: "bg-success text-success-foreground" },
    cancelled: { label: "Cancelled", className: "bg-destructive text-destructive-foreground" },
    scheduled: { label: "Scheduled", className: "bg-warning text-warning-foreground" },
  }
  const { label, className } = variants[status]
  return <Badge className={className}>{label}</Badge>
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function LocationPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v5h5" />
      <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}

export default function RideTrackingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Ride Tracking</h1>
          <p className="mt-2 text-muted-foreground">Monitor your current ride and view recent trip history</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Active Ride Card - Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Ride Status */}
            <Card className="border-primary/20">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <CarIcon className="size-5 text-primary" />
                      Active Ride
                    </CardTitle>
                    <CardDescription className="mt-1">Ride #{currentRide.id}</CardDescription>
                  </div>
                  <StatusBadge status={currentRide.status} />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Route Information */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 size-3 rounded-full bg-success shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Pickup</p>
                      <p className="font-medium">{currentRide.pickup}</p>
                    </div>
                  </div>
                  <div className="ml-1.5 h-8 w-px bg-border" />
                  <div className="flex items-start gap-3">
                    <div className="mt-1 size-3 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Dropoff</p>
                      <p className="font-medium">{currentRide.dropoff}</p>
                    </div>
                  </div>
                </div>

                {/* ETA Progress */}
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="size-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Estimated Arrival</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-primary">{currentRide.etaMinutes}</span>
                      <span className="ml-1 text-sm text-muted-foreground">min</span>
                    </div>
                  </div>
                  <Progress value={currentRide.progress} className="h-2" />
                  <p className="mt-2 text-sm text-muted-foreground text-center">
                    Arriving at {currentRide.estimatedArrival}
                  </p>
                </div>

                {/* Fare */}
                <div className="mt-4 flex items-center justify-between rounded-lg border p-4">
                  <span className="text-muted-foreground">Estimated Fare</span>
                  <span className="text-xl font-semibold">{currentRide.fare}</span>
                </div>
              </CardContent>
            </Card>

            {/* Route Visualization Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapIcon className="size-5 text-primary" />
                  Route Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 w-full rounded-lg bg-muted/30 border-2 border-dashed border-muted-foreground/20 flex flex-col items-center justify-center">
                  <LocationPinIcon className="size-12 text-muted-foreground/40" />
                  <p className="mt-2 text-sm text-muted-foreground">Live route visualization</p>
                  <p className="text-xs text-muted-foreground/60">Map integration coming soon</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Driver Info - Side Column */}
          <div className="space-y-6">
            {/* Driver Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Driver</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <Avatar className="size-24 border-4 border-primary/20">
                    <AvatarImage src={currentRide.driver.photo} alt={currentRide.driver.name} />
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">
                      {currentRide.driver.name?.split(" ").map(n => n?.[0] ?? "").join("") || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-semibold">{currentRide.driver.name}</h3>
                  <div className="mt-1 flex items-center gap-1">
                    <StarIcon className="size-4 text-warning" />
                    <span className="font-medium">{currentRide.driver.rating}</span>
                    <span className="text-muted-foreground text-sm">rating</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">Vehicle</p>
                    <p className="font-medium">{currentRide.driver.vehicleInfo}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-3">
                    <p className="text-sm text-muted-foreground">License Plate</p>
                    <p className="font-mono font-semibold text-primary">{currentRide.driver.licensePlate}</p>
                  </div>
                </div>

                <Button className="mt-6 w-full" variant="outline">
                  <PhoneIcon className="size-4" />
                  Contact Driver
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <MapIcon className="size-4" />
                  Share Live Location
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ClockIcon className="size-4" />
                  Edit Pickup Time
                </Button>
                <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
                  Cancel Ride
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Rides History */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HistoryIcon className="size-5" />
              Recent Rides
            </CardTitle>
            <CardDescription>Your ride history from the past week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentRides.map((ride) => (
                <div key={ride.id} className="py-4 first:pt-0 last:pb-0">
                  {/* Mobile Layout */}
                  <div className="flex flex-col gap-3 sm:hidden">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-muted p-2 shrink-0">
                          <CarIcon className="size-5 text-muted-foreground" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground">{ride.date} • {ride.id}</p>
                        </div>
                      </div>
                      <StatusBadge status={ride.status} />
                    </div>
                    <div className="space-y-1 pl-11">
                      <div className="flex items-start gap-2">
                        <div className="size-2 rounded-full bg-success mt-1.5 shrink-0" />
                        <p className="text-sm font-medium truncate">{ride.pickup}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p className="text-sm font-medium truncate">{ride.dropoff}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className="font-semibold">{ride.fare}</span>
                    </div>
                  </div>
                  {/* Desktop Layout */}
                  <div className="hidden sm:flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-muted p-2">
                        <CarIcon className="size-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{ride.pickup}</p>
                          <span className="text-muted-foreground">→</span>
                          <p className="font-medium">{ride.dropoff}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{ride.date} • {ride.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">{ride.fare}</span>
                      <StatusBadge status={ride.status} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
