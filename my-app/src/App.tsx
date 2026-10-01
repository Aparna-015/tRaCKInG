import { HabitForm } from "./components/HabitForm";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App bg-zinc-800 w-[700px] mx-auto h-screen">
      <Header />
      <HabitForm/>
    </div>
  );
}


