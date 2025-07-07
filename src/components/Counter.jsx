import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="counter">
            <div className="counter-display">
                <p>{count}</p>
            </div>
            <button className="counter-button" onClick={incrementCount}>increment</ button>
        </div>
    );
}

export default Counter;