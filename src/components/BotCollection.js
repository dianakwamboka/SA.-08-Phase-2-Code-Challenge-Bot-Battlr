import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots,handleAdd, handleDelete}) {
  // Your code here
  console.log(bots)
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot,key) => (
          <BotCard key={key} bot={bot} handleAdd={handleAdd} handleDelete={handleDelete}/>
        ))
        }
      </div>
    </div>
  );
}

export default BotCollection;