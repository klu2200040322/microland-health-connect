import { Activity, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "dashboard", label: "Dashboard" },
  { id: "symptom-analyzer", label: "Symptom Analyzer" },
  { id: "scheduling", label: "Scheduling" },
  { id: "insights", label: "Data Insights" },
];

const Navbar = ({ activeTab, onNavigate }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-foreground leading-none">Microland</span>
            <span className="block text-[10px] text-muted-foreground leading-none mt-0.5">Connect with the best</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              size="sm"
              className={activeTab === item.id ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card p-4 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={`w-full justify-start ${activeTab === item.id ? "gradient-primary text-primary-foreground" : ""}`}
              onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
