export default function Home({ controller }) {
  const menu = [
    ["Program Overview", "program"],
    ["Entry Requirements", "program"],
    ["Curriculum Structure", "curriculum"],
    ["Career Pathways", "careers"],
    ["Announcements", "announcements"],
    ["Admin Panel", "admin"],
  ];
  return <main className="screen"><section className="hero"><h2>Welcome to the MCS Handbook App</h2><p>View program details, units, career pathways, search, bookmarks, and department announcements.</p></section><div className="grid">{menu.map(([label, view]) => <button className="card" key={label} onClick={() => controller.setView(view)}><h3>{label}</h3><p>Open {label.toLowerCase()}</p></button>)}</div></main>;
}
