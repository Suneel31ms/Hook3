import React, { useMemo, useState } from 'react';

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(()=>{
        let i = 0
        while(i<20000) i++
          return (counterOne %2===0)
      },[counterOne])
    
  return (
    <div>
        <div className="One">
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven() ? 'Even':'Odd'}</span>
        </div>
        <div className="Two">
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    </div>
  );
}

export default Counter;