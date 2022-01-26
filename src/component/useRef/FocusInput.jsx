import React, { createRef, useEffect } from 'react';

function FocusInput() {
    const inputRef = createRef()

    useEffect(() =>{
        inputRef.current.focus()
    })
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  );
}

export default FocusInput;
