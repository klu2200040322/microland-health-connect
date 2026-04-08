export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  conditions: string[];
  lastVisit: string;
  nextAppointment: string;
  medications: { name: string; dosage: string; frequency: string }[];
}

export interface Appointment {
  id: string;
  patientName: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface HealthMetric {
  date: string;
  heartRate: number;
  bloodPressureSys: number;
  bloodPressureDia: number;
  bloodSugar: number;
  oxygenLevel: number;
}

export const mockPatient: Patient = {
  id: "P-2024-001",
  name: "Sarah Johnson",
  age: 34,
  gender: "Female",
  bloodType: "O+",
  conditions: ["Type 2 Diabetes", "Mild Hypertension"],
  lastVisit: "2024-03-15",
  nextAppointment: "2024-04-12",
  medications: [
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily" },
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily" },
    { name: "Vitamin D3", dosage: "2000 IU", frequency: "Once daily" },
  ],
};

export const mockAppointments: Appointment[] = [
  { id: "A001", patientName: "Sarah Johnson", doctor: "Dr. Emily Chen", specialty: "Endocrinology", date: "2024-04-12", time: "10:00 AM", status: "upcoming" },
  { id: "A002", patientName: "Sarah Johnson", doctor: "Dr. James Wilson", specialty: "Cardiology", date: "2024-04-18", time: "2:30 PM", status: "upcoming" },
  { id: "A003", patientName: "Sarah Johnson", doctor: "Dr. Emily Chen", specialty: "Endocrinology", date: "2024-03-15", time: "10:00 AM", status: "completed" },
  { id: "A004", patientName: "Sarah Johnson", doctor: "Dr. Priya Patel", specialty: "General Medicine", date: "2024-02-20", time: "11:00 AM", status: "completed" },
];

export const mockHealthMetrics: HealthMetric[] = [
  { date: "Mar 1", heartRate: 72, bloodPressureSys: 128, bloodPressureDia: 82, bloodSugar: 140, oxygenLevel: 97 },
  { date: "Mar 5", heartRate: 75, bloodPressureSys: 130, bloodPressureDia: 84, bloodSugar: 135, oxygenLevel: 98 },
  { date: "Mar 10", heartRate: 70, bloodPressureSys: 126, bloodPressureDia: 80, bloodSugar: 128, oxygenLevel: 97 },
  { date: "Mar 15", heartRate: 68, bloodPressureSys: 122, bloodPressureDia: 78, bloodSugar: 120, oxygenLevel: 98 },
  { date: "Mar 20", heartRate: 71, bloodPressureSys: 124, bloodPressureDia: 79, bloodSugar: 118, oxygenLevel: 99 },
  { date: "Mar 25", heartRate: 69, bloodPressureSys: 120, bloodPressureDia: 76, bloodSugar: 115, oxygenLevel: 98 },
  { date: "Mar 30", heartRate: 67, bloodPressureSys: 118, bloodPressureDia: 75, bloodSugar: 112, oxygenLevel: 98 },
];

export const symptomAnalysisFlow: ChatMessage[] = [
  { id: "1", role: "assistant", content: "Hello! I'm your **Microland Health Assistant**. I can help analyze your symptoms and guide you to the right care.\n\nPlease describe what you're experiencing, and I'll help assess the situation.", timestamp: new Date() },
];

export const mockBotResponses: Record<string, string> = {
  headache: "Based on your description of **headache symptoms**, here's my preliminary assessment:\n\n🔍 **Possible Conditions:**\n- Tension headache\n- Migraine\n- Dehydration-related headache\n\n📋 **Recommended Actions:**\n1. Stay hydrated — drink at least 8 glasses of water today\n2. Rest in a quiet, dark room\n3. Over-the-counter pain relief (Ibuprofen 400mg)\n\n⚠️ **Seek immediate care if:**\n- Sudden, severe headache\n- Headache with fever and stiff neck\n- Vision changes\n\nWould you like me to **schedule an appointment** with a neurologist?",
  fever: "I understand you're experiencing a **fever**. Let me help assess this:\n\n🌡️ **Key Questions:**\n- How high is your temperature?\n- How long have you had it?\n- Any other symptoms (cough, body aches, sore throat)?\n\n📋 **General Guidance:**\n1. Monitor temperature regularly\n2. Stay hydrated with fluids\n3. Rest and avoid strenuous activity\n4. Acetaminophen (Tylenol) can help reduce fever\n\n⚠️ **Seek immediate care if:**\n- Temperature exceeds 103°F (39.4°C)\n- Fever lasts more than 3 days\n- Difficulty breathing\n\nShall I help you **book a consultation** with Dr. Patel?",
  default: "Thank you for sharing that. Based on your description, I'd recommend:\n\n📋 **Next Steps:**\n1. Monitor your symptoms over the next 24 hours\n2. Keep a log of when symptoms occur and their severity\n3. Stay hydrated and get adequate rest\n\n🏥 I can help you:\n- **Schedule an appointment** with a specialist\n- **Set medication reminders** for any prescriptions\n- **Track your symptoms** over time\n\nWould you like me to help with any of these?",
};
