import { useState } from "react"
export default function Like() {
    let [isliked, LikedVariable] = useState(false);
    function checkliked() {
        if (isliked) {
            LikedVariable(isliked = false);
            console.log(isliked);
        }
        else {
            LikedVariable(isliked = true)
            console.log(isliked);
        }
    }
    return (
        <>
            <div onClick={checkliked}>
                {isliked ? <i className='fa-solid fa-heart'></i> : <i className="fa-regular fa-heart"></i>}

            </div>
        </>
    )
}