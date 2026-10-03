import React from "react";
import { Button } from "./Button";
import { startOfWeek, eachDayOfInterval, formatDate } from "date-fns";
import { endOfWeek } from "date-fns/fp";

const HabitLists = () => {
  const habits = [
    { id: 1, name: "anu" },
    { id: 2, name: "manu" },
  ];

  if (habits.length === 0) {
    return <div>no data</div>;
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((items) => (
        <HabitItem
          key={items.id}
          habit={items}
          className="text-xl text-white font-bold"
        >
          {" "}
        </HabitItem>
      ))}
    </div>
  );
};

export default HabitLists;

type HabitItemProps = {
  habits: {
    id: number;
    name: string;
  };
};
function HabitItem({ habit }: HabitItemProps) {
  const visibleDate = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(),{ weekStartsOn: 1 }),
  })
  return (
    <div className="flex justify-between bg-zinc-700 p-4 rounded-lg">
      <div className="text-white font-bold flex justify-between item-center gap-3">
        <span>{habit.name}</span>
        <span>3</span>
      </div>
      <button className="bg-violet-500 text-white px-4 py-2 rounded-lg">
        Done
      </button>

      <div className="flex  gap-1 items-end">
        {visibleDate.map((date) => (
          <Button key={date.toDateString()}>
            <span>{formatDate(date, "EEE")}</span>
            <span>{formatDate(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
