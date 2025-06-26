import React, { useState, useEffect } from "react";

const LifeCycleComp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Cleanup on unmount");
        };
    }, []);

    useEffect(() => {
        console.log("Component updated");
        return () => {
            console.log("Component unmounted");
    }}, [count]);

    const onClicFunc = () => {
        setCount(count + 1);
    }

    return (
        <div>
            
            <p>Life Cycle Component</p>
            <button onClick={onClicFunc}>Click Me: {count}</button>
        </div>
)}

export default LifeCycleComp;