import { Button } from "./Button";

export function HabitForm() {
  return (
    <form className="flex gap-4">
      <input className="flex-1 bg-zinc-600 text-white placeholder:text-zinc-400 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Add a new habit" />
      <Button> Add habit</Button>
    </form>
  );
}
