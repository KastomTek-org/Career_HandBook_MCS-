import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
export default function SplashScreen(){ return <div className="splash"><motion.div className="splash-card" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}><GraduationCap size={70}/><h1>MCS Handbook</h1><p>Mathematics & Computing Science mobile guide</p></motion.div></div> }
