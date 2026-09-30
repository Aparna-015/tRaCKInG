import Button from "./components/Button";

export default function App() {
  return (
    <div className="App bg-zinc-800 w-[700px] mx-auto h-screen">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between  p-4 text-blue-600">
      <div className="">
        <h1 className="font-bold text-2xl"> Habit Tracker</h1>
        <span> 1/1 done today</span>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold"> April 6 - April 12</h1>
        <div className="flex items-center gap-3">
          
          {/* <button>prev</button>
        <button>next</button> */}
    
        <Button text="prev"> </Button>
         <Button text="next"> </Button>
        </div>
        
      </div>
    </header>
  );
}
