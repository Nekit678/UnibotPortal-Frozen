
function Level(props:{num:number, back:Function}){
    return(
        <div>
            LEVEL{props.num}
            <button onClick={(event)=>props.back()}>Back</button>
        </div>
    )
}

export default Level