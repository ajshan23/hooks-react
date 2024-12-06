import React, { useState, useCallback } from 'react';

function UseCallback() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    const increment = useCallback(() => {
        console.log(Math.ceil((Math.random() * 10)));
        setCount((prev) => prev + 1);

    }, []); // No dependencies: `increment` is memoized once.

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setOtherState(!otherState)}>
                Toggle Other State
            </button>
        </div>
    );
}

export default UseCallback;
