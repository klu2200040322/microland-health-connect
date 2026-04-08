import { motion } from "framer-motion";
import { Activity, Heart, Droplets, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { mockHealthMetrics } from "@/data/mockData";

const statCards = [
  { label: "Avg Heart Rate", value: "70 bpm", icon: Heart, color: "text-destructive", trend: "-3%" },
  { label: "Blood Pressure", value: "118/75", icon: Activity, color: "text-primary", trend: "-8%" },
  { label: "Blood Sugar", value: "112 mg/dL", icon: Droplets, color: "text-warning", trend: "-20%" },
  { label: "O₂ Saturation", value: "98%", icon: Wind, color: "text-success", trend: "+1%" },
];

const DataInsights = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container py-8 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">Data Insights</h2>
        <p className="text-muted-foreground">Health trends and vital sign analytics</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <span className="text-xs font-medium text-success">{stat.trend}</span>
              </div>
              <p className="text-2xl font-heading font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive" /> Heart Rate Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={mockHealthMetrics}>
                <defs>
                  <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(0, 72%, 51%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 20%, 90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <YAxis domain={[60, 80]} tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <Tooltip />
                <Area type="monotone" dataKey="heartRate" stroke="hsl(0, 72%, 51%)" fill="url(#heartGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" /> Blood Pressure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockHealthMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 20%, 90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <YAxis domain={[60, 140]} tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <Tooltip />
                <Line type="monotone" dataKey="bloodPressureSys" stroke="hsl(173, 58%, 39%)" strokeWidth={2} dot={{ r: 3 }} name="Systolic" />
                <Line type="monotone" dataKey="bloodPressureDia" stroke="hsl(199, 89%, 48%)" strokeWidth={2} dot={{ r: 3 }} name="Diastolic" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Droplets className="h-5 w-5 text-warning" /> Blood Sugar Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={mockHealthMetrics}>
                <defs>
                  <linearGradient id="sugarGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(38, 92%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(200, 20%, 90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <YAxis domain={[100, 150]} tick={{ fontSize: 12 }} stroke="hsl(210, 12%, 50%)" />
                <Tooltip />
                <Area type="monotone" dataKey="bloodSugar" stroke="hsl(38, 92%, 50%)" fill="url(#sugarGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default DataInsights;
