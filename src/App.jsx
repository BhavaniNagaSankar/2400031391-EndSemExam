import "./App.css";

function App() {
  const gitCommands = [
    "git init",
    "git remote add origin <URL>",
    "git add .",
    "git commit -m \"Initial commit\"",
    "git push -u origin main",
    "git clone <URL>",
  ];

  return (
    <div className="container">

      <header className="header">
        <h1>Git Command Summary</h1>
        <p className="subtitle">
          ATHUMRI BHAVANI NAGA SANKAR • ID: 2400031391 • S-106
        </p>
      </header>

      <section className="card">
        <h2>Commands Used in the Project</h2>
        <ul className="command-list">
          {gitCommands.map((cmd, index) => (
            <li key={index}>{cmd}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        © 2025 • Student Feedback Form Project • All Rights Reserved
      </footer>

    </div>
  );
}

export default App;
