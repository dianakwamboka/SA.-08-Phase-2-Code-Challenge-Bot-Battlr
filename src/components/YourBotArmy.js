import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({army,handleDelete,handleRemove}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {
            army.map((bot,key)=>{
              return <BotCard bot={bot} key={key} handleDelete={handleDelete} handleAdd={handleRemove}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
