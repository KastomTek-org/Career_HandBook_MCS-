import { useState } from "react";

export default function Admin({ controller }) {
  const [loginForm, setLoginForm] = useState({ email: "admin@mcs.edu.pg", password: "admin123" });
  const [notice, setNotice] = useState({ title: "", message: "" });
  const admin = controller.state.admin;

  if (!admin) {
    return <main className="screen"><section className="card"><h2>Admin Login</h2><input placeholder="Email" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} /><input placeholder="Password" type="password" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} /><button onClick={() => controller.login(loginForm.email, loginForm.password)}>Login</button></section></main>;
  }

  return <main className="screen"><section className="card"><h2>Admin Content Management</h2><p>Logged in as {admin.name}</p><h3>Create Announcement</h3><input placeholder="Title" value={notice.title} onChange={(e) => setNotice({ ...notice, title: e.target.value })} /><textarea placeholder="Message" value={notice.message} onChange={(e) => setNotice({ ...notice, message: e.target.value })} /><button onClick={() => controller.addAnnouncement(notice)}>Publish Announcement</button></section></main>;
}
