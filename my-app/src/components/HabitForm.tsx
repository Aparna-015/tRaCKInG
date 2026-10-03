import { useState } from "react";
import { Button } from "./Button";

export function HabitForm() {
  const [name, setName] = useState("");
  console.log(name);

 
  return (
    <form className="flex gap-4">
      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="flex-1 bg-zinc-600 text-white placeholder:text-zinc-400 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
        placeholder="Add a new habit"
      />
      {/* <Button disabled={name.trim()===""}> Add habit</Button> */}
      <Button disabled={name.trim() === ""}>Add habit</Button>
    </form>
  );
}
