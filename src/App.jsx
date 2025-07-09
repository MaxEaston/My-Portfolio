import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer Portfolio</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>Brief introduction goes here.</p>
        </section>
        <section>
          <h2>Projects</h2>
          <p>Project showcase coming soon.</p>
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;
