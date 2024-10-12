import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from "./themeContext";

export function ClickCounter() {
    
 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);

 return (
   <div>
     <p>Clicks: {count}</p>
     <button onClick={handleClick}>Click me!</button>
   </div>
 );
 
}

function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);
   
    const toggleTheme = () => {
      setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };
   
    return (
      <ThemeContext.Provider value={currentTheme}>
        <button onClick={toggleTheme}> Toggle Theme </button>
        <ClickCounter />
      </ThemeContext.Provider>
    );
   }
   
export default ToggleTheme;
