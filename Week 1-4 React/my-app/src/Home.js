import { useState } from "react"


export default function Home(){
    const oldCount = 2;
    const [count,setCount] = useState(oldCount);
    const [superLikeCount,setSuperLikeCount] = useState(0)

    function Increment(){
        if(count !=  oldCount + 1){
            setCount(oldCount + 1)
            setSuperLikeCount(0)
        }
    }

    function Decrement(){
        if(count !=  oldCount -1){
            setCount(oldCount - 1)
            setSuperLikeCount(0)
        }
    }

    function SuperLike(){
        if(superLikeCount < 2){
            setCount(count + 10)
            setSuperLikeCount(superLikeCount + 1)
        }
        else{
            
        }
    }
    return(
    <div className="App">
        <h1>Counter</h1>
        <p>Like Count: { count }</p>
        <button onClick = { Increment } disabled = {(count == oldCount + 1)}>Like</button>
        <button onClick = { Decrement } disabled = {(count == oldCount - 1)}>Dislike</button>
        <button onClick = { SuperLike } disabled = {(superLikeCount >= 2)}>Super Like</button>
    </div>
    )
}

