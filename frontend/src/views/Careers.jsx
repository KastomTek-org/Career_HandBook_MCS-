export default function Careers({ controller }) {
  return <main className="screen"><h2>Career Pathways</h2><div className="grid">{controller.state.careers.map((career) => <article className="card" key={career.id}><h3>{career.title}</h3><p>{career.description}</p></article>)}</div></main>;
}
