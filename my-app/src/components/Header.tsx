import { Button } from "./Button";






export function Header() {
    return (
        <header className="flex justify-between  p-4 ">
            <div className="text-violet-500 flex flex-col gap-1">
                <h1 className="font-bold text-2xl"> Habit Tracker</h1>
                <span> 1/1 done today</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
                <h1 className="text-xs text-white"> April 6 - April 12</h1>
                <div className="flex items-center gap-3">


                    <Button > prev</Button>
                    <Button > next</Button>
                </div>

            </div>
        </header>
    );
}