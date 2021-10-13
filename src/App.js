import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./Main.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
