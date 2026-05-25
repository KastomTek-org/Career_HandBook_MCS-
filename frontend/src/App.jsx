import { useAppController } from "./controllers/useAppController";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Program from "./views/Program";
import Curriculum from "./views/Curriculum";
import UnitDetails from "./views/UnitDetails";
import Careers from "./views/Careers";
import Announcements from "./views/Announcements";
import Admin from "./views/Admin";

export default function App() {
  const controller = useAppController();
  const { currentView, loading, error } = controller.state;

  const screens = {
    home: <Home controller={controller} />,
    program: <Program controller={controller} />,
    curriculum: <Curriculum controller={controller} />,
    unitDetails: <UnitDetails controller={controller} />,
    careers: <Careers controller={controller} />,
    announcements: <Announcements controller={controller} />,
    admin: <Admin controller={controller} />,
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <small>MCS Career Handbook</small>
          <h1>MCS Mobile App</h1>
        </div>
      </header>

      {loading && <p className="notice">Loading app data...</p>}
      {error && <p className="error">{error}</p>}
      {screens[currentView] || screens.home}

      <NavBar currentView={currentView} setView={controller.setView} />
    </div>
  );
}
