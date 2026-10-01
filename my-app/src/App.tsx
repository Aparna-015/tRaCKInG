import { HabitForm } from "./components/HabitForm";
import HabitLists from "./components/HabitLists";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App bg-zinc-800 w-[700px] mx-auto h-screen">
      <Header />
      <HabitForm/>
      <HabitLists/>
    </div>
  );
}


