import { useState } from "react";

export default function Count() {
    let [count, countvariable] = useState(0);
    function IncCount(  ) {
        countvariable(++count);
        console.log(count)
    }
    return (
        <>
            <p> Count {count}</p>
            <button onClick={IncCount}>click</button>
        </>
    )
}
