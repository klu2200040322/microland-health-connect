import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, User, Bell, Plus, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockAppointments, mockPatient } from "@/data/mockData";

const SchedulingHub = () => {
  const [showReminders, setShowReminders] = useState(true);
  const upcoming = mockAppointments.filter((a) => a.status === "upcoming");
  const past = mockAppointments.filter((a) => a.status === "completed");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container py-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-heading font-bold text-foreground">Scheduling Hub</h2>
          <p className="text-muted-foreground">Appointments and medication reminders</p>
        </div>
        <Button className="gradient-primary text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" /> New Appointment
        </Button>
      </div>

      {showReminders && (
        <Card className="shadow-card border-warning/30 bg-warning/5">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-warning/20 flex items-center justify-center shrink-0">
                  <Bell className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Medication Reminders</p>
                  <div className="mt-2 space-y-1.5">
                    {mockPatient.medications.map((med) => (
                      <div key={med.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-3 w-3 text-success" />
                        <span><strong className="text-foreground">{med.name}</strong> — {med.dosage}, {med.frequency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0" onClick={() => setShowReminders(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" /> Upcoming Appointments
          </h3>
          {upcoming.map((apt) => (
            <Card key={apt.id} className="shadow-card">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-heading font-semibold text-foreground">{apt.doctor}</p>
                    <Badge variant="secondary" className="text-xs">{apt.specialty}</Badge>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {new Date(apt.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {apt.time}</span>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-0">Upcoming</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" /> Past Appointments
          </h3>
          {past.map((apt) => (
            <Card key={apt.id} className="shadow-card opacity-70">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-heading font-semibold text-foreground">{apt.doctor}</p>
                    <Badge variant="secondary" className="text-xs">{apt.specialty}</Badge>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> {new Date(apt.date).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {apt.time}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">Completed</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SchedulingHub;
