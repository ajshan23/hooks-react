import { useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    }
})
const UseMemo = () => {
    const [first, setfirst] = useState(nums);
    const [count, setCount] = useState(0);
    console.log("rendered");


    // const magical = first.find(i => i.isMagical === true);
    //one time store, until or uless dependency
    const magical = useMemo(() => first.find(i => i.isMagical === true), [])
    return (
        <div>
            <h1>UseMemo</h1>
            <div>Magical number is :{magical.index}</div>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>Aj</button>
        </div>
    )
}

export default UseMemo