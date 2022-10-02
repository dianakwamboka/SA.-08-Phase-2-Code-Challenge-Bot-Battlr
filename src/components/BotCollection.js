import React from "react";

function BotCollection( {filteredBots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {filteredBots}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
