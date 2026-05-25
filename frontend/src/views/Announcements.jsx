export default function Announcements({ controller }) {
  return <main className="screen"><h2>Announcements</h2><div className="list">{controller.state.announcements.map((item) => <article className="card" key={item.id}><small>{item.date}</small><h3>{item.title}</h3><p>{item.message}</p></article>)}</div></main>;
}
