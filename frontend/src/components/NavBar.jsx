import { BookOpen, Briefcase, GraduationCap, Home, Megaphone, UserCog } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "program", label: "Program", icon: GraduationCap },
  { id: "curriculum", label: "Units", icon: BookOpen },
  { id: "careers", label: "Careers", icon: Briefcase },
  { id: "announcements", label: "Updates", icon: Megaphone },
  { id: "admin", label: "Admin", icon: UserCog },
];

export default function NavBar({ currentView, setView }) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button key={item.id} onClick={() => setView(item.id)} className={currentView === item.id ? "active" : ""}>
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
