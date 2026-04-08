import { motion } from "framer-motion";
import { MessageSquare, Activity, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Healthcare technology network" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">AI-Powered Healthcare</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-4">
            Your Health,{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Simplified.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 font-body leading-relaxed">
            Microland connects you with intelligent symptom analysis, appointment scheduling, and personalized health insights — all in one place.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground font-semibold shadow-elevated" onClick={() => onNavigate("symptom-analyzer")}>
              <MessageSquare className="mr-2 h-5 w-5" /> Start Symptom Check
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => onNavigate("dashboard")}>
              <Activity className="mr-2 h-5 w-5" /> View Dashboard
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => onNavigate("scheduling")}>
              <Calendar className="mr-2 h-5 w-5" /> Book Appointment
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl"
        >
          {[
            { icon: MessageSquare, label: "Symptom Analysis", desc: "AI-powered health assessment" },
            { icon: Calendar, label: "Smart Scheduling", desc: "Book & manage appointments" },
            { icon: Activity, label: "Health Insights", desc: "Track trends & vitals" },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
