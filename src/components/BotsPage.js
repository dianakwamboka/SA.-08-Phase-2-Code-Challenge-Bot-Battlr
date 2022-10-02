import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(resp => resp.json())
      .then(data => setBots(data))
  }, [])
  function handleAdd(bot) {
    if (army.includes(bot)) {
      console.log("Already exist")
    }
    else {
      setArmy([...army, bot])
    }
  }
  function handleDelete(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        setArmy(army.filter(b => b !== bot));
        setBots(bots.filter(b => b !== bot));
      })
  }
  function remove(bot){
    setArmy(army.filter(b => b !== bot));
  }
  console.log(bots)
  return (
    <div>
      <YourBotArmy army={army} handleDelete={handleDelete} handleRemove={remove}/>
      <BotCollection bots={bots} handleAdd={handleAdd} handleDelete={handleDelete}/>
    </div>
  )
}

export default BotsPage;
