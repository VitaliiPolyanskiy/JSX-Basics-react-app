import "./App.css";
import { Sqrt } from "./components/Sqrt";
import { StudentInfo } from "./components/StudentInfo";

export default function App() {
  return (
    <main className="app-container">
      <h1 className="main-title">React Практикум</h1>
      <div className="components-wrapper">
        <Sqrt />
        <StudentInfo />
      </div>
    </main>
  );
}