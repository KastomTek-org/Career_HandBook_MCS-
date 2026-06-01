import { motion } from 'framer-motion'
export default function DashboardCard({ icon: Icon, title, text, color, onClick }) { return <motion.div whileHover={{scale:1.03}} whileTap={{scale:.98}} className="card" onClick={onClick} style={{cursor:'pointer'}}><div className="icon-box" style={{background:color}}><Icon size={26}/></div><h3>{title}</h3><p className="muted">{text}</p></motion.div> }
