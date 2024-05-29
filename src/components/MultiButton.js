import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Button 1</button>
//       <button onClick={handleClick}>Button 2</button>
//       <button onClick={handleClick}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;

// //function invoked by default so the console message appears everytime when you refresh/you render the component multibutton
// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={handleClick(1)}>Button 1</button>
//       <button onClick={handleClick(2)}>Button 2</button>
//       <button onClick={handleClick(3)}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;

//this handles and logs each button click separately, unless you click it twice
function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;