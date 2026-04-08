import { Activity, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (tab: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-foreground leading-none">Microland</span>
                <span className="block text-[10px] text-muted-foreground leading-none mt-0.5">Connect with the best</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered healthcare assistant for symptom analysis, appointment scheduling, and personalized health insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Dashboard", id: "dashboard" },
                { label: "Symptom Analyzer", id: "symptom-analyzer" },
                { label: "Scheduling", id: "scheduling" },
                { label: "Data Insights", id: "insights" },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => onNavigate(link.id)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Health Articles", "FAQ", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> support@microland.health
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> +1 (800) 555-0199
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> San Francisco, CA
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {["X", "In", "Fb", "Ig"].map((s) => (
                <div key={s} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground hover:gradient-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 Microland Health. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
