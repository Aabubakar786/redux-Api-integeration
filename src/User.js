import React from "react";
const User=(props)=>{
    console.log('props',props.data.name)
    let propVal = props;
    const {data} = props;
    return(
        <div>
            <h1>Class Component User</h1>
            <h2>{data.name},{data.age}</h2>
        </div>
    )
}
export default User;