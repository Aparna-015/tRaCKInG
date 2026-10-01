import React from "react";

const HabitLists = () => {
  const habits = [{id:1,name:"anu"},{id:2,name:"manu"}];

  if (habits.length === 0) {
    return<div>no data</div>;
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((items) => (
        
      
          <h1 key={items.id} className="text-xl text-white font-bold">{items.name}</h1> 
           
        
    

      ))}
    </div>
  );
};

export default HabitLists;
