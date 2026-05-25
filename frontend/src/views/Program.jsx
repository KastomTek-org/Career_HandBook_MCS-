export default function Program({ controller }) {
  const { program, entryRequirements } = controller.state;
  if (!program) return null;
  return <main className="screen"><h2>Program Overview</h2><section className="card"><h3>{program.title}</h3><p><strong>Faculty:</strong> {program.faculty}</p><p>{program.summary}</p><h3>Graduate Attributes</h3><ul>{program.graduateAttributes.map((item) => <li key={item}>{item}</li>)}</ul><h3>Entry Requirements</h3><ul>{entryRequirements.map((item) => <li key={item}>{item}</li>)}</ul></section></main>;
}
