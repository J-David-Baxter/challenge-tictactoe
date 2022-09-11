import React from "react";

const Cell = ({onClick, value}) => {
    return (
        <button onClick={onClick}>{value}</button>
    )
}

export default Cell;