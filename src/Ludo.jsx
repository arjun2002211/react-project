import { useState } from "react";

export default function Ludo() {
    let [color, setColor] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let [name, setNames] = useState(["arjun"]);
    function updateblue() {
        setColor((previousVal) => {
            return { ...previousVal, blue: previousVal.blue += 1 }
        });
        console.log(color.blue);
        setNames((previousName) => {
            return [...previousName, 'new name'];
        });
        console.log(name);
    }
    function updateyellow() {
        setColor((previousVal) => {
            return { ...previousVal, yellow: previousVal.yellow += 1 }
        });
        console.log(color.blue);
    }
    return (
        <>
            <p>Blue Move = {color.blue}</p>
            <button style={{ background: "blue", color: "white" }} onClick={updateblue}>+1</button>
            <p>yellow Move = {color.yellow} </p>
            <button style={{ background: "yellow" }} onClick={updateyellow}>+1</button>
            <p>Green Move = {color.green}</p>
            <button style={{ background: "green", color: "white" }}>+1</button>
            <p>Red Move = {color.red}</p>
            <button style={{ background: "red", color: "white" }}>+1</button>
        </>
    )
}