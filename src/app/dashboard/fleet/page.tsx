import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type VehicleStatus = "active" | "maintenance" | "idle";

interface Vehicle {
  id: string;
  name: string;
  plateNumber: string;
  status: VehicleStatus;
  driver: string | null;
  lastLocation: string;
}

const vehicles: Vehicle[] = [
  {
    id: "v1",
    name: "Express Van 01",
    plateNumber: "CO-MTN-001",
    status: "active",
    driver: "Alex M.",
    lastLocation: "Grand Junction",
  },
  {
    id: "v2",
    name: "Express Van 02",
    plateNumber: "CO-MTN-002",
    status: "active",
    driver: "Jordan W.",
    lastLocation: "Montrose",
  },
  {
    id: "v3",
    name: "Express Sedan 01",
    plateNumber: "CO-MTN-003",
    status: "maintenance",
    driver: null,
    lastLocation: "Service Center",
  },
  {
    id: "v4",
    name: "Express Van 03",
    plateNumber: "CO-MTN-004",
    status: "active",
    driver: "Sam C.",
    lastLocation: "Telluride",
  },
  {
    id: "v5",
    name: "Express Accessible 01",
    plateNumber: "CO-MTN-005",
    status: "idle",
    driver: null,
    lastLocation: "Denver Hub",
  },
  {
    id: "v6",
    name: "Express Van 04",
    plateNumber: "CO-MTN-006",
    status: "active",
    driver: "Mike B.",
    lastLocation: "Vail",
  },
  {
    id: "v7",
    name: "Express Sedan 02",
    plateNumber: "CO-MTN-007",
    status: "idle",
    driver: null,
    lastLocation: "Aspen Depot",
  },
  {
    id: "v8",
    name: "Express Accessible 02",
    plateNumber: "CO-MTN-008",
    status: "active",
    driver: "Emma R.",
    lastLocation: "Grand Junction",
  },
];

const statusConfig: Record<
  VehicleStatus,
  { label: string; className: string }
> = {
  active: {
    label: "Active",
    className: "bg-success text-success-foreground hover:bg-success/90",
  },
  maintenance: {
    label: "Maintenance",
    className: "bg-warning text-warning-foreground hover:bg-warning/90",
  },
  idle: {
    label: "Idle",
    className: "bg-muted text-muted-foreground hover:bg-muted/90",
  },
};

function getStatusCounts(vehicles: Vehicle[]) {
  return vehicles.reduce(
    (acc, vehicle) => {
      acc[vehicle.status]++;
      acc.total++;
      return acc;
    },
    { active: 0, maintenance: 0, idle: 0, total: 0 }
  );
}

export default function FleetDashboardPage() {
  const stats = getStatusCounts(vehicles);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Fleet Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage your vehicle fleet in real-time
          </p>
        </header>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Vehicles</CardDescription>
              <CardTitle className="text-4xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-4xl text-success">
                {stats.active}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>In Maintenance</CardDescription>
              <CardTitle className="text-4xl text-warning">
                {stats.maintenance}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Idle</CardDescription>
              <CardTitle className="text-4xl text-muted-foreground">
                {stats.idle}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              <div className="relative h-40 bg-muted">
                <Image
                  src="/images/fleet.png"
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">
                    {vehicle.name}
                  </CardTitle>
                  <Badge className={statusConfig[vehicle.status].className}>
                    {statusConfig[vehicle.status].label}
                  </Badge>
                </div>
                <CardDescription>{vehicle.plateNumber}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Driver</span>
                    <span className="font-medium">
                      {vehicle.driver ?? "Unassigned"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{vehicle.lastLocation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
