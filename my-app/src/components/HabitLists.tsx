import React from "react";

const HabitLists = () => {
  const habits = [{id:1,name:"anu"},{id:2,name:"manu"}];

  if (habits.length === 0) {
    return<div>no data</div>;
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((items) => (
        
      
          <HabitItem key={items.id} habit={habits} className="text-xl text-white font-bold"> </HabitItem> 

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
function HabitItem({habit}: HabitItemProps) {
  return (<div>{habit.name}</div>);
}