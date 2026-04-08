import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PatientDashboard from "@/components/PatientDashboard";
import SymptomAnalyzer from "@/components/SymptomAnalyzer";
import SchedulingHub from "@/components/SchedulingHub";
import DataInsights from "@/components/DataInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection onNavigate={setActiveTab} />;
      case "dashboard":
        return <PatientDashboard />;
      case "symptom-analyzer":
        return <SymptomAnalyzer />;
      case "scheduling":
        return <SchedulingHub />;
      case "insights":
        return <DataInsights />;
      default:
        return <HeroSection onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} onNavigate={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default Index;
