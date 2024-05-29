import React from "react";

// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button onClick={tickle}>Tickle me!</button>;
// }

// export default Tickler;


function Tickler() {
  function tickle(event) {
    console.log(event);
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;