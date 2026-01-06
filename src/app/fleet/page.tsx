"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  AlertTriangle,
  Bell,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  Filter,
  Fuel,
  Gauge,
  MapPin,
  Phone,
  RefreshCw,
  Route,
  Search,
  Star,
  Truck,
  User,
  Wrench,
  XCircle,
  Accessibility,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { ScrollArea } from "@/components/ui/scroll-area"

// Chart colors - Recharts needs actual color values, not CSS variables
const CHART_COLORS = {
  primary: "#f59e0b",      // Sunshine orange
  secondary: "#3b82f6",    // Blue
  success: "#22c55e",      // Green
  warning: "#eab308",      // Yellow
  danger: "#ef4444",       // Red
  muted: "#6b7280",        // Gray
  border: "#374151",       // Border gray
  // Tooltip colors
  tooltipBg: "#1f2937",    // Dark background
  tooltipBorder: "#374151", // Border
  tooltipText: "#f9fafb",  // Light text
}

// TypeScript Interfaces
interface Driver {
  id: string
  name: string
  phone: string
  license: string
  status: "available" | "on-trip" | "off-duty"
  rating: number
  avatar?: string
  totalTrips: number
  safetyScore: number
}

interface Vehicle {
  id: string
  name: string
  type: "van" | "sedan" | "accessible"
  licensePlate: string
  status: "active" | "idle" | "maintenance" | "offline"
  driver?: Driver
  location: { lat: number; lng: number; address: string }
  fuelLevel: number
  odometer: number
  lastUpdate: number
  speed: number
  color: string
}

interface Trip {
  id: string
  vehicleId: string
  vehicleName: string
  driverId: string
  driverName: string
  startLocation: string
  endLocation: string
  startTime: number
  endTime?: number
  distance: number
  fuelUsed: number
  status: "in-progress" | "completed" | "cancelled"
}

interface MaintenanceRecord {
  id: string
  vehicleId: string
  vehicleName: string
  type: "oil-change" | "tire-rotation" | "inspection" | "repair" | "brake-service"
  scheduledDate: number
  status: "scheduled" | "completed" | "overdue"
  cost?: number
  notes?: string
}

interface Alert {
  id: string
  vehicleId: string
  vehicleName: string
  type: "speeding" | "idle" | "maintenance" | "geofence" | "fuel-low" | "harsh-braking"
  message: string
  timestamp: number
  severity: "low" | "medium" | "high"
  acknowledged: boolean
}

interface FuelRecord {
  date: string
  gallons: number
  cost: number
  mpg: number
}

export default function FleetDashboard() {
  // Drivers - Diverse names for Sunshine Rides Colorado
  const [drivers] = useState<Driver[]>([
    {
      id: "driver-1",
      name: "Maria Garcia",
      phone: "(970) 555-1234",
      license: "CDL-B",
      status: "on-trip",
      rating: 4.9,
      totalTrips: 456,
      safetyScore: 98,
    },
    {
      id: "driver-2",
      name: "James Wilson",
      phone: "(970) 555-2345",
      license: "CDL-B",
      status: "on-trip",
      rating: 4.8,
      totalTrips: 342,
      safetyScore: 96,
    },
    {
      id: "driver-3",
      name: "Sarah Chen",
      phone: "(970) 555-3456",
      license: "CDL-B",
      status: "on-trip",
      rating: 4.9,
      totalTrips: 521,
      safetyScore: 99,
    },
    {
      id: "driver-4",
      name: "Michael Brown",
      phone: "(970) 555-4567",
      license: "CDL-B",
      status: "on-trip",
      rating: 4.7,
      totalTrips: 289,
      safetyScore: 94,
    },
    {
      id: "driver-5",
      name: "Emily Rodriguez",
      phone: "(970) 555-5678",
      license: "CDL-B",
      status: "on-trip",
      rating: 4.8,
      totalTrips: 378,
      safetyScore: 97,
    },
    {
      id: "driver-6",
      name: "David Nguyen",
      phone: "(970) 555-6789",
      license: "Class C",
      status: "available",
      rating: 4.6,
      totalTrips: 178,
      safetyScore: 92,
    },
    {
      id: "driver-7",
      name: "Lisa Thompson",
      phone: "(970) 555-7890",
      license: "CDL-B",
      status: "available",
      rating: 4.5,
      totalTrips: 234,
      safetyScore: 91,
    },
    {
      id: "driver-8",
      name: "Carlos Martinez",
      phone: "(970) 555-8901",
      license: "CDL-B",
      status: "off-duty",
      rating: 4.7,
      totalTrips: 412,
      safetyScore: 95,
    },
  ])

  // Vehicles - Sunshine Rides fleet
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "vehicle-1",
      name: "Sunshine Van 01",
      type: "van",
      licensePlate: "CO-SUN-001",
      status: "active",
      driver: drivers[0],
      location: { lat: 39.0639, lng: -108.5506, address: "Grand Junction, CO" },
      fuelLevel: 78,
      odometer: 45230,
      lastUpdate: Date.now(),
      speed: 55,
      color: "hsl(var(--primary))",
    },
    {
      id: "vehicle-2",
      name: "Sunshine Van 02",
      type: "van",
      licensePlate: "CO-SUN-002",
      status: "active",
      driver: drivers[1],
      location: { lat: 38.4783, lng: -107.8762, address: "Montrose, CO" },
      fuelLevel: 62,
      odometer: 32100,
      lastUpdate: Date.now(),
      speed: 45,
      color: "hsl(var(--secondary))",
    },
    {
      id: "vehicle-3",
      name: "Sunshine Van 03",
      type: "van",
      licensePlate: "CO-SUN-003",
      status: "active",
      driver: drivers[2],
      location: { lat: 37.9375, lng: -107.8123, address: "Telluride, CO" },
      fuelLevel: 85,
      odometer: 28750,
      lastUpdate: Date.now(),
      speed: 35,
      color: "hsl(199 89% 48%)",
    },
    {
      id: "vehicle-4",
      name: "Sunshine Van 04",
      type: "van",
      licensePlate: "CO-SUN-004",
      status: "active",
      driver: drivers[3],
      location: { lat: 39.6403, lng: -106.3742, address: "Vail, CO" },
      fuelLevel: 45,
      odometer: 52300,
      lastUpdate: Date.now(),
      speed: 60,
      color: "hsl(212 90% 52%)",
    },
    {
      id: "vehicle-5",
      name: "Sunshine Sedan 01",
      type: "sedan",
      licensePlate: "CO-SUN-005",
      status: "maintenance",
      location: { lat: 39.7392, lng: -104.9903, address: "Denver Service Center" },
      fuelLevel: 35,
      odometer: 67200,
      lastUpdate: Date.now() - 86400000,
      speed: 0,
      color: "hsl(var(--warning))",
    },
    {
      id: "vehicle-6",
      name: "Sunshine Sedan 02",
      type: "sedan",
      licensePlate: "CO-SUN-006",
      status: "idle",
      driver: drivers[5],
      location: { lat: 39.1911, lng: -106.8175, address: "Aspen Depot" },
      fuelLevel: 92,
      odometer: 18500,
      lastUpdate: Date.now(),
      speed: 0,
      color: "hsl(225 73% 57%)",
    },
    {
      id: "vehicle-7",
      name: "Sunshine Accessible 01",
      type: "accessible",
      licensePlate: "CO-SUN-007",
      status: "active",
      driver: drivers[4],
      location: { lat: 39.0639, lng: -108.5506, address: "Grand Junction, CO" },
      fuelLevel: 68,
      odometer: 38900,
      lastUpdate: Date.now(),
      speed: 42,
      color: "hsl(var(--info))",
    },
    {
      id: "vehicle-8",
      name: "Sunshine Accessible 02",
      type: "accessible",
      licensePlate: "CO-SUN-008",
      status: "idle",
      driver: drivers[6],
      location: { lat: 39.7392, lng: -104.9903, address: "Denver Hub" },
      fuelLevel: 55,
      odometer: 24600,
      lastUpdate: Date.now(),
      speed: 0,
      color: "hsl(251 91% 67%)",
    },
  ])

  // Trips - Colorado routes
  const [trips] = useState<Trip[]>([
    {
      id: "trip-1",
      vehicleId: "vehicle-1",
      vehicleName: "Sunshine Van 01",
      driverId: "driver-1",
      driverName: "Maria Garcia",
      startLocation: "Grand Junction Airport",
      endLocation: "Telluride Mountain Village",
      startTime: Date.now() - 3600000,
      distance: 124.5,
      fuelUsed: 8.2,
      status: "in-progress",
    },
    {
      id: "trip-2",
      vehicleId: "vehicle-2",
      vehicleName: "Sunshine Van 02",
      driverId: "driver-2",
      driverName: "James Wilson",
      startLocation: "Montrose Regional Airport",
      endLocation: "Black Canyon Resort",
      startTime: Date.now() - 7200000,
      distance: 45.3,
      fuelUsed: 3.8,
      status: "in-progress",
    },
    {
      id: "trip-3",
      vehicleId: "vehicle-3",
      vehicleName: "Sunshine Van 03",
      driverId: "driver-3",
      driverName: "Sarah Chen",
      startLocation: "Telluride Ski Resort",
      endLocation: "Mountain Village Plaza",
      startTime: Date.now() - 1800000,
      distance: 8.1,
      fuelUsed: 0.6,
      status: "in-progress",
    },
    {
      id: "trip-4",
      vehicleId: "vehicle-4",
      vehicleName: "Sunshine Van 04",
      driverId: "driver-4",
      driverName: "Michael Brown",
      startLocation: "Vail Village",
      endLocation: "Denver International Airport",
      startTime: Date.now() - 14400000,
      endTime: Date.now() - 10800000,
      distance: 115.8,
      fuelUsed: 7.2,
      status: "completed",
    },
    {
      id: "trip-5",
      vehicleId: "vehicle-7",
      vehicleName: "Sunshine Accessible 01",
      driverId: "driver-5",
      driverName: "Emily Rodriguez",
      startLocation: "Grand Junction Medical Center",
      endLocation: "Mesa County Senior Center",
      startTime: Date.now() - 5400000,
      distance: 12.7,
      fuelUsed: 1.3,
      status: "in-progress",
    },
  ])

  // Maintenance Records
  const [maintenance] = useState<MaintenanceRecord[]>([
    {
      id: "maint-1",
      vehicleId: "vehicle-5",
      vehicleName: "Sunshine Sedan 01",
      type: "repair",
      scheduledDate: Date.now() - 86400000,
      status: "overdue",
      cost: 1250,
      notes: "Transmission service needed",
    },
    {
      id: "maint-2",
      vehicleId: "vehicle-1",
      vehicleName: "Sunshine Van 01",
      type: "oil-change",
      scheduledDate: Date.now() + 172800000,
      status: "scheduled",
      cost: 85,
      notes: "Regular 5000 mile service",
    },
    {
      id: "maint-3",
      vehicleId: "vehicle-2",
      vehicleName: "Sunshine Van 02",
      type: "tire-rotation",
      scheduledDate: Date.now() + 432000000,
      status: "scheduled",
      cost: 60,
      notes: "Mountain driving wear check",
    },
    {
      id: "maint-4",
      vehicleId: "vehicle-8",
      vehicleName: "Sunshine Accessible 02",
      type: "inspection",
      scheduledDate: Date.now() - 259200000,
      status: "overdue",
      cost: 150,
      notes: "Wheelchair lift inspection",
    },
    {
      id: "maint-5",
      vehicleId: "vehicle-3",
      vehicleName: "Sunshine Van 03",
      type: "brake-service",
      scheduledDate: Date.now() + 604800000,
      status: "scheduled",
      cost: 320,
      notes: "Mountain brake check",
    },
    {
      id: "maint-6",
      vehicleId: "vehicle-4",
      vehicleName: "Sunshine Van 04",
      type: "oil-change",
      scheduledDate: Date.now() - 604800000,
      status: "completed",
      cost: 65,
      notes: "Completed on schedule",
    },
  ])

  // Alerts
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: "alert-1",
      vehicleId: "vehicle-4",
      vehicleName: "Sunshine Van 04",
      type: "speeding",
      message: "Vehicle exceeded 65 mph on I-70 mountain corridor",
      timestamp: Date.now() - 1800000,
      severity: "medium",
      acknowledged: false,
    },
    {
      id: "alert-2",
      vehicleId: "vehicle-5",
      vehicleName: "Sunshine Sedan 01",
      type: "maintenance",
      message: "Overdue for transmission service",
      timestamp: Date.now() - 86400000,
      severity: "high",
      acknowledged: false,
    },
    {
      id: "alert-3",
      vehicleId: "vehicle-2",
      vehicleName: "Sunshine Van 02",
      type: "fuel-low",
      message: "Fuel level at 45% - recommend refuel in Montrose",
      timestamp: Date.now() - 3600000,
      severity: "medium",
      acknowledged: false,
    },
    {
      id: "alert-4",
      vehicleId: "vehicle-3",
      vehicleName: "Sunshine Van 03",
      type: "geofence",
      message: "Entering Telluride mountain zone",
      timestamp: Date.now() - 7200000,
      severity: "low",
      acknowledged: true,
    },
    {
      id: "alert-5",
      vehicleId: "vehicle-1",
      vehicleName: "Sunshine Van 01",
      type: "harsh-braking",
      message: "Harsh braking event on Highway 145",
      timestamp: Date.now() - 900000,
      severity: "low",
      acknowledged: false,
    },
    {
      id: "alert-6",
      vehicleId: "vehicle-8",
      vehicleName: "Sunshine Accessible 02",
      type: "maintenance",
      message: "Wheelchair lift inspection overdue",
      timestamp: Date.now() - 259200000,
      severity: "high",
      acknowledged: false,
    },
  ])

  // Fuel History
  const [fuelHistory] = useState<FuelRecord[]>([
    { date: "Mon", gallons: 145, cost: 478.5, mpg: 18.2 },
    { date: "Tue", gallons: 132, cost: 435.6, mpg: 18.5 },
    { date: "Wed", gallons: 158, cost: 521.4, mpg: 17.9 },
    { date: "Thu", gallons: 141, cost: 465.3, mpg: 18.3 },
    { date: "Fri", gallons: 167, cost: 551.1, mpg: 18.0 },
    { date: "Sat", gallons: 98, cost: 323.4, mpg: 19.7 },
    { date: "Sun", gallons: 72, cost: 237.6, mpg: 20.1 },
  ])

  // Utilization Data
  const [utilizationData] = useState([
    { name: "Sunshine Van 01", utilization: 87, trips: 42, miles: 1250 },
    { name: "Sunshine Van 02", utilization: 72, trips: 38, miles: 890 },
    { name: "Sunshine Van 03", utilization: 81, trips: 45, miles: 1120 },
    { name: "Sunshine Van 04", utilization: 78, trips: 36, miles: 1080 },
    { name: "Sunshine Sedan 01", utilization: 12, trips: 5, miles: 180 },
    { name: "Sunshine Sedan 02", utilization: 65, trips: 28, miles: 420 },
    { name: "Accessible 01", utilization: 68, trips: 32, miles: 680 },
    { name: "Accessible 02", utilization: 45, trips: 22, miles: 310 },
  ])

  // Search
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)

  // Real-time simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles((prev) =>
        prev.map((vehicle) => {
          if (vehicle.status === "active") {
            return {
              ...vehicle,
              speed: Math.max(0, vehicle.speed + (Math.random() - 0.5) * 10),
              fuelLevel: Math.max(0, vehicle.fuelLevel - Math.random() * 0.1),
              lastUpdate: Date.now(),
            }
          }
          return vehicle
        })
      )

      // Random new alert
      if (Math.random() < 0.1) {
        const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)]
        const alertTypes: Alert["type"][] = ["speeding", "idle", "geofence", "harsh-braking"]
        const messages: Record<Alert["type"], string> = {
          speeding: "Speed limit exceeded on mountain road",
          idle: "Vehicle idle for extended period",
          geofence: "Entering ski resort zone",
          "harsh-braking": "Harsh braking detected",
          maintenance: "Maintenance required",
          "fuel-low": "Low fuel warning",
        }
        const type = alertTypes[Math.floor(Math.random() * alertTypes.length)]

        const newAlert: Alert = {
          id: `alert-${Date.now()}`,
          vehicleId: randomVehicle.id,
          vehicleName: randomVehicle.name,
          type,
          message: messages[type],
          timestamp: Date.now(),
          severity: Math.random() < 0.3 ? "high" : Math.random() < 0.6 ? "medium" : "low",
          acknowledged: false,
        }

        setAlerts((prev) => [newAlert, ...prev.slice(0, 19)])
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [vehicles])

  // Status helpers
  const getVehicleStatusColor = (status: Vehicle["status"]) => {
    switch (status) {
      case "active":
        return "text-primary bg-primary/20 border-primary/30"
      case "idle":
        return "text-secondary bg-secondary/20 border-secondary/30"
      case "maintenance":
        return "text-amber-400 bg-amber-500/20 border-amber-500/30"
      case "offline":
        return "text-red-400 bg-red-500/20 border-red-500/30"
    }
  }

  const getDriverStatusColor = (status: Driver["status"]) => {
    switch (status) {
      case "available":
        return "text-primary bg-primary/20 border-primary/30"
      case "on-trip":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "off-duty":
        return "text-slate-400 bg-slate-500/20 border-slate-500/30"
    }
  }

  const getAlertSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "text-red-400 bg-red-500/20 border-red-500/30"
      case "medium":
        return "text-amber-400 bg-amber-500/20 border-amber-500/30"
      case "low":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
    }
  }

  const getMaintenanceStatusColor = (status: MaintenanceRecord["status"]) => {
    switch (status) {
      case "scheduled":
        return "text-blue-400 bg-blue-500/20 border-blue-500/30"
      case "completed":
        return "text-primary bg-primary/20 border-primary/30"
      case "overdue":
        return "text-red-400 bg-red-500/20 border-red-500/30"
    }
  }

  const getVehicleIcon = (type: Vehicle["type"]) => {
    switch (type) {
      case "van":
        return Truck
      case "sedan":
        return Car
      case "accessible":
        return Accessibility
    }
  }

  // Fleet metrics
  const activeVehicles = vehicles.filter((v) => v.status === "active").length
  const idleVehicles = vehicles.filter((v) => v.status === "idle").length
  const maintenanceVehicles = vehicles.filter((v) => v.status === "maintenance").length
  const offlineVehicles = vehicles.filter((v) => v.status === "offline").length
  const utilizationRate = ((activeVehicles + idleVehicles) / vehicles.length) * 100
  const unacknowledgedAlerts = alerts.filter((a) => !a.acknowledged).length

  // Filtered vehicles
  const filteredVehicles = vehicles.filter(
    (v) =>
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.licensePlate.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.location.address.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-[1800px] mx-auto space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sunshine Rides Fleet
            </h1>
            <p className="text-muted-foreground mt-2">
              Real-time vehicle tracking across Colorado&apos;s Western Slope
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-3 py-1">
              {activeVehicles} / {vehicles.length} Active
            </Badge>
            {unacknowledgedAlerts > 0 && (
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-sm px-3 py-1">
                <Bell className="h-3 w-3 mr-1" />
                {unacknowledgedAlerts} Alerts
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              className="border-secondary/30 text-secondary hover:bg-secondary/10"
            >
              <Download className="h-4 w-4 sm:mr-2" />
              <span className="hidden sm:inline">Export Report</span>
            </Button>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <Card className="glass border-primary/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Total Fleet</p>
              <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-primary/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary font-mono">{vehicles.length}</p>
            <p className="text-muted-foreground text-xs mt-1">vehicles</p>
          </Card>

          <Card className="glass border-primary/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Active</p>
              <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-primary/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-primary font-mono">{activeVehicles}</p>
            <p className="text-muted-foreground text-xs mt-1">on the road</p>
          </Card>

          <Card className="glass border-secondary/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Idle</p>
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-secondary/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-secondary font-mono">{idleVehicles}</p>
            <p className="text-muted-foreground text-xs mt-1">standing by</p>
          </Card>

          <Card className="glass border-amber-500/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Maintenance</p>
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono">{maintenanceVehicles}</p>
            <p className="text-muted-foreground text-xs mt-1">in service</p>
          </Card>

          <Card className="glass border-blue-500/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Utilization</p>
              <Gauge className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-blue-400 font-mono">
              {utilizationRate.toFixed(0)}%
            </p>
            <Progress value={utilizationRate} className="h-1.5 mt-2" />
          </Card>

          <Card className="glass border-red-500/30 p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground text-xs sm:text-sm">Offline</p>
              <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-400/50" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-red-400 font-mono">{offlineVehicles}</p>
            <p className="text-muted-foreground text-xs mt-1">disconnected</p>
          </Card>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Tabs defaultValue="fleet" className="space-y-6">
            <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="glass border-primary/30 w-max md:w-auto">
                <TabsTrigger value="fleet" className="text-xs sm:text-sm whitespace-nowrap">
                  Fleet Overview
                </TabsTrigger>
                <TabsTrigger value="map" className="text-xs sm:text-sm whitespace-nowrap">
                  Live Map
                </TabsTrigger>
                <TabsTrigger value="trips" className="text-xs sm:text-sm whitespace-nowrap">
                  Trip History
                </TabsTrigger>
                <TabsTrigger value="maintenance" className="text-xs sm:text-sm whitespace-nowrap">
                  Maintenance
                </TabsTrigger>
                <TabsTrigger value="drivers" className="text-xs sm:text-sm whitespace-nowrap">
                  Drivers
                </TabsTrigger>
                <TabsTrigger value="fuel" className="text-xs sm:text-sm whitespace-nowrap">
                  Fuel & Costs
                </TabsTrigger>
                <TabsTrigger value="alerts" className="text-xs sm:text-sm whitespace-nowrap">
                  Alerts
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Fleet Overview Tab */}
            <TabsContent value="fleet" className="space-y-6">
              {/* Search */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vehicles by name, plate, or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 glass border-primary/30"
                  />
                </div>
                <Button variant="outline" className="border-primary/30">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Vehicle Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredVehicles.map((vehicle, idx) => {
                  const VehicleIcon = getVehicleIcon(vehicle.type)
                  return (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Card
                        className="glass p-5 border-l-4 cursor-pointer hover:bg-primary/5 transition-colors"
                        style={{ borderLeftColor: vehicle.color }}
                        onClick={() => setSelectedVehicle(vehicle)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">{vehicle.name}</h3>
                            <p className="text-muted-foreground text-xs">{vehicle.licensePlate}</p>
                          </div>
                          <VehicleIcon className="h-6 w-6" style={{ color: vehicle.color }} />
                        </div>

                        <Badge className={`${getVehicleStatusColor(vehicle.status)} mb-4`}>
                          {vehicle.status.toUpperCase()}
                        </Badge>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4" />
                            <span className="truncate">{vehicle.location.address}</span>
                          </div>

                          {vehicle.driver && (
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                              <User className="h-4 w-4" />
                              <span>{vehicle.driver.name}</span>
                            </div>
                          )}

                          <Separator className="bg-border/20" />

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-muted-foreground text-xs">Fuel</p>
                              <div className="flex items-center gap-2">
                                <Progress value={vehicle.fuelLevel} className="h-1.5 flex-1" />
                                <span className="text-foreground font-mono text-xs">
                                  {vehicle.fuelLevel.toFixed(0)}%
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-muted-foreground text-xs">Speed</p>
                              <p className="text-secondary font-mono text-sm">
                                {vehicle.speed.toFixed(0)} mph
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-muted-foreground text-xs">Odometer</p>
                              <p className="text-foreground font-mono text-sm">
                                {vehicle.odometer.toLocaleString()} mi
                              </p>
                            </div>
                            <div>
                              <p className="text-muted-foreground text-xs">Last Update</p>
                              <p className="text-muted-foreground font-mono text-xs">
                                {new Date(vehicle.lastUpdate).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </TabsContent>

            {/* Live Map Tab */}
            <TabsContent value="map" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Map Placeholder */}
                <Card className="glass border-primary/30 p-6 lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Live Vehicle Locations</h3>
                    <Button variant="outline" size="sm" className="border-primary/30">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                  </div>

                  {/* Simulated Map */}
                  <div className="relative h-[400px] lg:h-[500px] glass-dark rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                      {/* Grid lines */}
                      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className="border border-border/10" />
                        ))}
                      </div>

                      {/* Vehicle markers */}
                      {vehicles.map((vehicle, idx) => {
                        const VehicleIcon = getVehicleIcon(vehicle.type)
                        const x = 10 + (idx % 4) * 22 + Math.random() * 5
                        const y = 10 + Math.floor(idx / 4) * 35 + Math.random() * 10
                        return (
                          <motion.div
                            key={vehicle.id}
                            className="absolute"
                            style={{ left: `${x}%`, top: `${y}%` }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                          >
                            <motion.div
                              animate={
                                vehicle.status === "active"
                                  ? { scale: [1, 1.2, 1] }
                                  : {}
                              }
                              transition={{ duration: 2, repeat: Infinity }}
                              className={`relative cursor-pointer ${
                                vehicle.status === "active" ? "z-10" : ""
                              }`}
                              onClick={() => setSelectedVehicle(vehicle)}
                            >
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center"
                                style={{
                                  backgroundColor: `${vehicle.color}20`,
                                  border: `2px solid ${vehicle.color}`,
                                }}
                              >
                                <VehicleIcon className="h-5 w-5" style={{ color: vehicle.color }} />
                              </div>
                              {vehicle.status === "active" && (
                                <motion.div
                                  className="absolute -inset-2 rounded-full border-2"
                                  style={{ borderColor: vehicle.color }}
                                  animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                />
                              )}
                              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                <span className="text-xs text-muted-foreground bg-background/80 px-1 rounded">
                                  {vehicle.name}
                                </span>
                              </div>
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground text-sm">Active</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">Idle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <span className="text-muted-foreground text-sm">Maintenance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="text-muted-foreground text-sm">Offline</span>
                    </div>
                  </div>
                </Card>

                {/* Vehicle List */}
                <Card className="glass border-secondary/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Active Vehicles</h3>
                  <ScrollArea className="h-[500px] pr-4">
                    <div className="space-y-3">
                      {vehicles
                        .filter((v) => v.status === "active")
                        .map((vehicle) => {
                          const VehicleIcon = getVehicleIcon(vehicle.type)
                          return (
                            <motion.div
                              key={vehicle.id}
                              className="glass-dark rounded-lg p-4 cursor-pointer hover:bg-primary/5 transition-colors"
                              onClick={() => setSelectedVehicle(vehicle)}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-10 h-10 rounded-full flex items-center justify-center"
                                  style={{ backgroundColor: `${vehicle.color}20` }}
                                >
                                  <VehicleIcon className="h-5 w-5" style={{ color: vehicle.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-foreground font-medium text-sm truncate">
                                    {vehicle.name}
                                  </p>
                                  <p className="text-muted-foreground text-xs truncate">
                                    {vehicle.location.address}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="text-secondary font-mono text-sm">
                                    {vehicle.speed.toFixed(0)} mph
                                  </p>
                                  <p className="text-muted-foreground text-xs">
                                    {vehicle.driver?.name || "Unassigned"}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )
                        })}
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </TabsContent>

            {/* Trip History Tab */}
            <TabsContent value="trips" className="space-y-6">
              <Card className="glass border-primary/30 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Recent Trips</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {trips.filter((t) => t.status === "in-progress").length} In Progress
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {trips.filter((t) => t.status === "completed").length} Completed
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  {trips.map((trip, idx) => (
                    <motion.div
                      key={trip.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="glass-dark rounded-lg p-5"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                            <Route className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-foreground font-medium">{trip.vehicleName}</p>
                            <p className="text-muted-foreground text-sm">Driver: {trip.driverName}</p>
                          </div>
                        </div>
                        <Badge
                          className={
                            trip.status === "in-progress"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : trip.status === "completed"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {trip.status === "in-progress" && (
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2 h-2 bg-blue-400 rounded-full mr-2"
                            />
                          )}
                          {trip.status.replace("-", " ").toUpperCase()}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <p className="text-foreground text-sm">{trip.startLocation}</p>
                          </div>
                          <div className="ml-1.5 w-px h-4 bg-border/30" />
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-3 h-3 rounded-full bg-secondary" />
                            <p className="text-foreground text-sm">{trip.endLocation}</p>
                          </div>
                        </div>
                      </div>

                      <Separator className="bg-border/20 mb-4" />

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-muted-foreground text-xs">Start Time</p>
                          <p className="text-foreground font-mono text-sm">
                            {new Date(trip.startTime).toLocaleTimeString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Duration</p>
                          <p className="text-foreground font-mono text-sm">
                            {trip.endTime
                              ? `${Math.round((trip.endTime - trip.startTime) / 60000)} min`
                              : `${Math.round((Date.now() - trip.startTime) / 60000)} min`}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Distance</p>
                          <p className="text-secondary font-mono text-sm">{trip.distance} mi</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Fuel Used</p>
                          <p className="text-amber-400 font-mono text-sm">{trip.fuelUsed} gal</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            {/* Maintenance Tab */}
            <TabsContent value="maintenance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Overdue */}
                <Card className="glass border-red-500/30 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-red-400">Overdue</h3>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      {maintenance.filter((m) => m.status === "overdue").length}
                    </Badge>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3 pr-4">
                      {maintenance
                        .filter((m) => m.status === "overdue")
                        .map((record) => (
                          <div
                            key={record.id}
                            className="glass-dark border-red-500/30 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="text-foreground font-medium text-sm">
                                  {record.vehicleName}
                                </p>
                                <p className="text-muted-foreground text-xs capitalize">
                                  {record.type.replace("-", " ")}
                                </p>
                              </div>
                              <AlertTriangle className="h-5 w-5 text-red-400" />
                            </div>
                            <p className="text-muted-foreground text-xs mb-2">{record.notes}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-red-400 text-xs">
                                Due: {new Date(record.scheduledDate).toLocaleDateString()}
                              </span>
                              {record.cost && (
                                <span className="text-amber-400 font-mono text-xs">
                                  ${record.cost}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </Card>

                {/* Scheduled */}
                <Card className="glass border-blue-500/30 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-blue-400">Scheduled</h3>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {maintenance.filter((m) => m.status === "scheduled").length}
                    </Badge>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3 pr-4">
                      {maintenance
                        .filter((m) => m.status === "scheduled")
                        .map((record) => (
                          <div
                            key={record.id}
                            className="glass-dark border-blue-500/30 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="text-foreground font-medium text-sm">
                                  {record.vehicleName}
                                </p>
                                <p className="text-muted-foreground text-xs capitalize">
                                  {record.type.replace("-", " ")}
                                </p>
                              </div>
                              <Calendar className="h-5 w-5 text-blue-400" />
                            </div>
                            <p className="text-muted-foreground text-xs mb-2">{record.notes}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-blue-400 text-xs">
                                Due: {new Date(record.scheduledDate).toLocaleDateString()}
                              </span>
                              {record.cost && (
                                <span className="text-amber-400 font-mono text-xs">
                                  ${record.cost}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </Card>

                {/* Completed */}
                <Card className="glass border-primary/30 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-primary">Completed</h3>
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      {maintenance.filter((m) => m.status === "completed").length}
                    </Badge>
                  </div>
                  <ScrollArea className="h-[300px]">
                    <div className="space-y-3 pr-4">
                      {maintenance
                        .filter((m) => m.status === "completed")
                        .map((record) => (
                          <div
                            key={record.id}
                            className="glass-dark border-primary/30 rounded-lg p-4"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="text-foreground font-medium text-sm">
                                  {record.vehicleName}
                                </p>
                                <p className="text-muted-foreground text-xs capitalize">
                                  {record.type.replace("-", " ")}
                                </p>
                              </div>
                              <CheckCircle2 className="h-5 w-5 text-primary" />
                            </div>
                            <p className="text-muted-foreground text-xs mb-2">{record.notes}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-primary text-xs">
                                {new Date(record.scheduledDate).toLocaleDateString()}
                              </span>
                              {record.cost && (
                                <span className="text-amber-400 font-mono text-xs">
                                  ${record.cost}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </TabsContent>

            {/* Drivers Tab */}
            <TabsContent value="drivers" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {drivers.map((driver, idx) => (
                  <motion.div
                    key={driver.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Card className="glass border-primary/30 p-5">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                          <User className="h-7 w-7 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground">{driver.name}</h3>
                          <p className="text-muted-foreground text-sm">{driver.license}</p>
                        </div>
                      </div>

                      <Badge className={`${getDriverStatusColor(driver.status)} mb-4`}>
                        {driver.status.replace("-", " ").toUpperCase()}
                      </Badge>

                      <div className="flex items-center gap-2 mb-4">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-sm">{driver.phone}</span>
                      </div>

                      <Separator className="bg-border/20 mb-4" />

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Star className="h-4 w-4 text-amber-400" />
                            <span className="text-foreground font-mono">{driver.rating}</span>
                          </div>
                          <p className="text-muted-foreground text-xs">Rating</p>
                        </div>
                        <div className="text-center">
                          <p className="text-foreground font-mono">{driver.totalTrips}</p>
                          <p className="text-muted-foreground text-xs">Trips</p>
                        </div>
                        <div className="text-center">
                          <p className="text-primary font-mono">{driver.safetyScore}%</p>
                          <p className="text-muted-foreground text-xs">Safety</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-muted-foreground text-xs">Safety Score</span>
                          <span className="text-primary text-xs">{driver.safetyScore}%</span>
                        </div>
                        <Progress value={driver.safetyScore} className="h-1.5" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Fuel & Costs Tab */}
            <TabsContent value="fuel" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Fuel Consumption Chart */}
                <Card className="glass border-primary/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">
                    Weekly Fuel Consumption
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={fuelHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke={`${CHART_COLORS.border}33`} />
                      <XAxis
                        dataKey="date"
                        stroke={CHART_COLORS.muted}
                        tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                      />
                      <YAxis
                        stroke={CHART_COLORS.muted}
                        tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: CHART_COLORS.tooltipBg,
                          border: `1px solid ${CHART_COLORS.tooltipBorder}`,
                          borderRadius: "8px",
                          color: CHART_COLORS.tooltipText,
                        }}
                        labelStyle={{ color: CHART_COLORS.tooltipText }}
                        itemStyle={{ color: CHART_COLORS.tooltipText }}
                        cursor={{ fill: `${CHART_COLORS.muted}4d` }}
                      />
                      <Bar
                        dataKey="gallons"
                        fill={CHART_COLORS.primary}
                        radius={[4, 4, 0, 0]}
                        name="Gallons"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                {/* Fuel Cost Trend */}
                <Card className="glass border-secondary/30 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Fuel Costs</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={fuelHistory}>
                      <CartesianGrid strokeDasharray="3 3" stroke={`${CHART_COLORS.border}33`} />
                      <XAxis
                        dataKey="date"
                        stroke={CHART_COLORS.muted}
                        tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                      />
                      <YAxis
                        stroke={CHART_COLORS.muted}
                        tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                        tickFormatter={(value) => `$${value}`}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: CHART_COLORS.tooltipBg,
                          border: `1px solid ${CHART_COLORS.tooltipBorder}`,
                          borderRadius: "8px",
                          color: CHART_COLORS.tooltipText,
                        }}
                        labelStyle={{ color: CHART_COLORS.tooltipText }}
                        itemStyle={{ color: CHART_COLORS.tooltipText }}
                        formatter={(value) => [`$${Number(value).toFixed(2)}`, "Cost"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="cost"
                        stroke={CHART_COLORS.secondary}
                        fill={`${CHART_COLORS.secondary}33`}
                        strokeWidth={2}
                        name="Cost"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* Utilization Chart */}
              <Card className="glass border-primary/30 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Fleet Utilization</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={utilizationData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke={`${CHART_COLORS.border}33`} />
                    <XAxis
                      type="number"
                      stroke={CHART_COLORS.muted}
                      tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                      domain={[0, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      stroke={CHART_COLORS.muted}
                      tick={{ fill: CHART_COLORS.muted, fontSize: 12 }}
                      width={130}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: CHART_COLORS.tooltipBg,
                        border: `1px solid ${CHART_COLORS.tooltipBorder}`,
                        borderRadius: "8px",
                        color: CHART_COLORS.tooltipText,
                      }}
                      labelStyle={{ color: CHART_COLORS.tooltipText }}
                      itemStyle={{ color: CHART_COLORS.tooltipText }}
                      formatter={(value) => [`${value}%`, "Utilization"]}
                      cursor={{ fill: `${CHART_COLORS.muted}4d` }}
                    />
                    <Bar dataKey="utilization" radius={[0, 4, 4, 0]}>
                      {utilizationData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.utilization >= 70
                              ? CHART_COLORS.primary
                              : entry.utilization >= 40
                              ? CHART_COLORS.secondary
                              : CHART_COLORS.danger
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Cost Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="glass border-primary/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-muted-foreground text-sm">Total Fuel</p>
                    <Fuel className="h-5 w-5 text-primary/50" />
                  </div>
                  <p className="text-2xl font-bold text-primary font-mono">
                    {fuelHistory.reduce((sum, r) => sum + r.gallons, 0)} gal
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">this week</p>
                </Card>

                <Card className="glass border-amber-500/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-muted-foreground text-sm">Total Cost</p>
                    <DollarSign className="h-5 w-5 text-amber-400/50" />
                  </div>
                  <p className="text-2xl font-bold text-amber-400 font-mono">
                    ${fuelHistory.reduce((sum, r) => sum + r.cost, 0).toFixed(0)}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">this week</p>
                </Card>

                <Card className="glass border-secondary/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-muted-foreground text-sm">Avg MPG</p>
                    <Gauge className="h-5 w-5 text-secondary/50" />
                  </div>
                  <p className="text-2xl font-bold text-secondary font-mono">
                    {(fuelHistory.reduce((sum, r) => sum + r.mpg, 0) / fuelHistory.length).toFixed(1)}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">fleet average</p>
                </Card>

                <Card className="glass border-blue-500/30 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-muted-foreground text-sm">Cost/Mile</p>
                    <Route className="h-5 w-5 text-blue-400/50" />
                  </div>
                  <p className="text-2xl font-bold text-blue-400 font-mono">$0.18</p>
                  <p className="text-muted-foreground text-xs mt-1">fleet average</p>
                </Card>
              </div>
            </TabsContent>

            {/* Alerts Tab */}
            <TabsContent value="alerts" className="space-y-6">
              <Card className="glass border-primary/30 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-foreground">Alert Center</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                      {alerts.filter((a) => a.severity === "high" && !a.acknowledged).length} High
                    </Badge>
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                      {alerts.filter((a) => a.severity === "medium" && !a.acknowledged).length} Medium
                    </Badge>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30"
                      onClick={() =>
                        setAlerts((prev) => prev.map((a) => ({ ...a, acknowledged: true })))
                      }
                    >
                      Acknowledge All
                    </Button>
                  </div>
                </div>

                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-3">
                    <AnimatePresence mode="popLayout">
                      {alerts.map((alert) => (
                        <motion.div
                          key={alert.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className={`glass-dark rounded-lg p-4 ${
                            alert.acknowledged ? "opacity-50" : ""
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  alert.severity === "high"
                                    ? "bg-red-500/20"
                                    : alert.severity === "medium"
                                    ? "bg-amber-500/20"
                                    : "bg-blue-500/20"
                                }`}
                              >
                                {alert.type === "speeding" && (
                                  <Gauge
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                                {alert.type === "maintenance" && (
                                  <Wrench
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                                {alert.type === "fuel-low" && (
                                  <Fuel
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                                {alert.type === "geofence" && (
                                  <MapPin
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                                {alert.type === "idle" && (
                                  <Clock
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                                {alert.type === "harsh-braking" && (
                                  <AlertTriangle
                                    className={`h-5 w-5 ${
                                      alert.severity === "high"
                                        ? "text-red-400"
                                        : alert.severity === "medium"
                                        ? "text-amber-400"
                                        : "text-blue-400"
                                    }`}
                                  />
                                )}
                              </div>
                              <div>
                                <p className="text-foreground font-medium text-sm">
                                  {alert.vehicleName}
                                </p>
                                <p className="text-muted-foreground text-xs capitalize">
                                  {alert.type.replace("-", " ")}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getAlertSeverityColor(alert.severity)}>
                                {alert.severity.toUpperCase()}
                              </Badge>
                              {!alert.acknowledged && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-8 w-8 p-0"
                                  onClick={() =>
                                    setAlerts((prev) =>
                                      prev.map((a) =>
                                        a.id === alert.id ? { ...a, acknowledged: true } : a
                                      )
                                    )
                                  }
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                </Button>
                              )}
                            </div>
                          </div>

                          <p className="text-foreground text-sm mb-2">{alert.message}</p>
                          <p className="text-muted-foreground text-xs">
                            {new Date(alert.timestamp).toLocaleString()}
                          </p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </ScrollArea>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Vehicle Detail Modal */}
        <AnimatePresence>
          {selectedVehicle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVehicle(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="glass border-primary/30 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">{selectedVehicle.name}</h2>
                    <p className="text-muted-foreground">{selectedVehicle.licensePlate}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedVehicle(null)}
                  >
                    <XCircle className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-1">Status</p>
                    <Badge className={getVehicleStatusColor(selectedVehicle.status)}>
                      {selectedVehicle.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-1">Type</p>
                    <p className="text-foreground capitalize">{selectedVehicle.type}</p>
                  </div>
                </div>

                {selectedVehicle.driver && (
                  <div className="glass-dark rounded-lg p-4 mb-6">
                    <p className="text-muted-foreground text-xs mb-2">Assigned Driver</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-foreground font-medium">{selectedVehicle.driver.name}</p>
                        <p className="text-muted-foreground text-sm">{selectedVehicle.driver.phone}</p>
                      </div>
                      <Badge className={getDriverStatusColor(selectedVehicle.driver.status)}>
                        {selectedVehicle.driver.status.replace("-", " ").toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-1">Location</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-foreground text-sm">{selectedVehicle.location.address}</p>
                    </div>
                  </div>
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-1">Speed</p>
                    <p className="text-secondary font-mono text-xl">
                      {selectedVehicle.speed.toFixed(0)} mph
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-2">Fuel Level</p>
                    <div className="flex items-center gap-2">
                      <Progress value={selectedVehicle.fuelLevel} className="h-2 flex-1" />
                      <span className="text-foreground font-mono">
                        {selectedVehicle.fuelLevel.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="glass-dark rounded-lg p-4">
                    <p className="text-muted-foreground text-xs mb-1">Odometer</p>
                    <p className="text-foreground font-mono text-xl">
                      {selectedVehicle.odometer.toLocaleString()} mi
                    </p>
                  </div>
                </div>

                <div className="glass-dark rounded-lg p-4">
                  <p className="text-muted-foreground text-xs mb-1">Last Update</p>
                  <p className="text-foreground">{new Date(selectedVehicle.lastUpdate).toLocaleString()}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8 glass border-primary/30 rounded-full px-4 py-2 flex items-center gap-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-primary rounded-full"
          />
          <span className="text-primary text-sm font-mono">Live Tracking</span>
        </motion.div>
      </div>
    </div>
  )
}
