import { ShieldCheck } from 'lucide-react'
export default function Header({ controller }) {
  return <header className="header"><div className="header-inner"><div className="row"><div className="logo-circle">MCS</div><div><strong>MCS Program Handbook</strong><div style={{fontSize:12,opacity:.85}}>Bachelor of Mathematics & Computing Science</div></div></div><button className="btn secondary" onClick={()=>controller.setScreen('admin')}><ShieldCheck size={16}/> Admin</button></div></header>
}
