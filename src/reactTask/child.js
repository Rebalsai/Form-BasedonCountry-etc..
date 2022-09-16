import React, { useState } from "react"

const Parent = () => {
    const [Name, setName] = useState('sai')
    const handleclick = (p1) => {
        let a = p1
        setName(a)
    }
    return (
        <>
            <Child Data={handleclick} />{Name}
        </>
    )
}

const Child = (props) => {
    return (
        <>
            {/* {props.Data} */}
            <button onClick={() => props.Data(100)}>submit</button>
        </>
    )
}

export default Parent;