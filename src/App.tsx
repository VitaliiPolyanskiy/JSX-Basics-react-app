import "./App.css";

import { Sqrt } from "./components/Sqrt.tsx";
import { StudentInfo } from "./components/StudentInfo.tsx";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <Sqrt number={9} />
      <StudentInfo />
    </div>
  );
}