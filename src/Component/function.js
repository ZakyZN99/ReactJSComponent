import { useState } from "react";

// const FunctionalComponent  = () => 
// <div>
//     <h1>Test Function</h1>
//     <h2> Function Succeed</h2>
// </div>

const FunctionalComponent2 = ({nama}) =>
{   
    const [value, setValue] = useState(0);

    const buttonPlus = () =>{
        setValue(value + 1)
    }
    const buttonMin = () =>{
        setValue(value - 1 )
    }

    return(
        <div>
            <h1>Hello World</h1>
            <h5>Nama saya {nama} </h5>
            <button onClick={buttonMin}>-</button>
                <span>{' '} {value}{' '}</span>
            <button onClick={buttonPlus}>+</button>
        </div>
    )
}


// export default FunctionComponent;
export default FunctionalComponent2;