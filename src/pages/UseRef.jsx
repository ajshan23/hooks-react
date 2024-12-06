import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [data, setData] = useState("");
    const [data1, setData1] = useState("");
    const inputRef = useRef(null);
    const input2Ref = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    const handleFocusChange = (e, ref) => {
        if (e.key === "Enter") {
            e.preventDefault();
            ref.current.focus();
        }
    };

    useEffect(() => {
        handleFocus();
    }, []);

    return (
        <div>
            <h1>useRef example</h1>

            <input
                type="text"
                value={data}
                ref={inputRef}
                onChange={(e) => setData(e.target.value)}
                onKeyDown={(e) => handleFocusChange(e, input2Ref)}
            />
            <input
                type="text"
                value={data1}
                ref={input2Ref}
                onChange={(e) => setData1(e.target.value)}
            />
        </div>
    );
};

export default UseRef;
