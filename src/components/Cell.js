import React from "react";

const style = {
    background: 'lightblue',
    border: '2px solid black',
    fontsize: '25px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

const Cell = ({onClick, value}) => {
    return (
        <button style={style} onClick={onClick}>{value}</button>
    )
}

export default Cell;