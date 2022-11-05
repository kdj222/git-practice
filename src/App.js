import logo from "./logo.svg";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div className='App'>
      <input ref={ref} />
    </div>
  );
}

export default App;
