import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  return (
    <div>

      <NavBar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <Main />
      </div>
    </div>
  );
}

export default App;
