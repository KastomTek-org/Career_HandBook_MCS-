import { useEffect, useState } from 'react'
import useAppController from './controllers/useAppController'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import SplashScreen from './views/SplashScreen'
import Home from './views/Home'
import Program from './views/Program'
import Curriculum from './views/Curriculum'
import UnitDetails from './views/UnitDetails'
import Careers from './views/Careers'
import Announcements from './views/Announcements'
import Admin from './views/Admin'

export default function App() {
  const controller = useAppController()
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => { const t = setTimeout(() => setShowSplash(false), 1200); return () => clearTimeout(t) }, [])
  if (showSplash) return <SplashScreen />

  const screens = {
    home: <Home controller={controller} />,
    program: <Program controller={controller} />,
    curriculum: <Curriculum controller={controller} />,
    unitDetails: <UnitDetails controller={controller} />,
    careers: <Careers controller={controller} />,
    announcements: <Announcements controller={controller} />,
    admin: <Admin controller={controller} />
  }
  return <div className="app-shell"><Header controller={controller} />{screens[controller.screen] || screens.home}<BottomNav controller={controller} /></div>
}
