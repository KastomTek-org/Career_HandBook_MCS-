export default function UnitDetails({ controller }) {
  const unit = controller.state.selectedUnit;
  if (!unit) return <main className="screen"><p>No unit selected.</p></main>;
  return <main className="screen"><section className="card"><small>Year {unit.year} • Semester {unit.semester}</small><h2>{unit.code} - {unit.title}</h2><p>{unit.description}</p><p><strong>Credit Points:</strong> {unit.credits}</p><p><strong>Pathway:</strong> {unit.pathway}</p><button onClick={() => controller.setView("curriculum")}>Back to Curriculum</button></section></main>;
}
