import { useReducer } from "react"

function reducerFcn(state, action) {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1 };
        case 'minus':
            return { count: state.count - 1 };
        default:
            throw new Error("Unknown option")

    }
}
const UseReducer = () => {
    const initialState = {
        count: 0
    };

    const [state, dispatch] = useReducer(reducerFcn, initialState)
    console.log("hi");


    const handleAdd = (e) => {
        dispatch({ type: 'add' });
    }
    const handleMinus = (e) => {
        dispatch({ type: 'minus' });

    }

    return (
        <div>
            <h1>counter:{state.count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    )
}

export default UseReducer