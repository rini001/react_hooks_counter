import React from "react";


function Counter() {
  // useState is a function the returns array with two items
  //[stateObject, function ] or can say[current data, upsated data]
  //let say initial value of counter is useState(0) which means 0, if we do like setCounter(50) , now 50 is the updated value means counter =50.
  let [counter, setCounter]=React.useState(0)
  //
  //destructuring
  // React.userState =>[value, setValue]
  const handleIncrement=(value)=>{
    setCounter(counter+value);
    // counter=counter+value
    console.log(counter)
  }
  return (
    <>
    <h1>Counter</h1>
    <h1>{counter}</h1>
  <div className="btn">
    <button onClick={()=>handleIncrement(1)}>ADD</button>
    <button onClick={()=>handleIncrement(-1)}>REDUCE</button>
    </div>
    </>
  );
}

export default Counter;

//state-->something thet component remember
//prop-->
//hooks
