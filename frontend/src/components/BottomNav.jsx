import { BookOpen, Briefcase, GraduationCap, Home, Megaphone, UserCog } from 'lucide-react'
const items = [ ['home','Home',Home], ['program','Program',GraduationCap], ['curriculum','Units',BookOpen], ['careers','Careers',Briefcase], ['announcements','News',Megaphone], ['admin','Admin',UserCog] ]
export default function BottomNav({ controller }) { return <nav className="bottom-nav">{items.map(([id,label,Icon]) => <button key={id} className={`nav-btn ${controller.screen===id?'active':''}`} onClick={()=>controller.setScreen(id)}><Icon size={18}/><span>{label}</span></button>)}</nav> }
