import { motion } from "framer-motion";
import { User, Heart, Pill, CalendarDays, Droplets, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockPatient } from "@/data/mockData";

const PatientDashboard = () => {
  const p = mockPatient;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container py-8 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">Patient Dashboard</h2>
        <p className="text-muted-foreground">Patient records and medical history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg font-heading">
              <User className="h-5 w-5 text-primary" /> Patient Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shrink-0">
                {p.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
                {[
                  { label: "Name", value: p.name },
                  { label: "Age", value: `${p.age} years` },
                  { label: "Gender", value: p.gender },
                  { label: "Blood Type", value: p.bloodType },
                  { label: "Patient ID", value: p.id },
                  { label: "Last Visit", value: new Date(p.lastVisit).toLocaleDateString() },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-sm text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg font-heading">
              <AlertCircle className="h-5 w-5 text-warning" /> Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {p.conditions.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-destructive" />
                <span className="text-sm font-medium text-foreground">{c}</span>
              </div>
            ))}
            <div className="pt-2 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>Next Appointment: <strong className="text-foreground">{new Date(p.nextAppointment).toLocaleDateString()}</strong></span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-heading">
            <Pill className="h-5 w-5 text-primary" /> Current Medications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {p.medications.map((med) => (
              <div key={med.name} className="rounded-xl border border-border p-4 bg-secondary/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">{med.name}</span>
                  <Badge variant="secondary" className="text-xs">{med.dosage}</Badge>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Droplets className="h-3 w-3" /> {med.frequency}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PatientDashboard;
