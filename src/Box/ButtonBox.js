import React from 'react';

export default function ButtonBox({item,changePosition,position}){
    let right = <i> &#8594; </i>
    let left = <i> &#8592; </i>
    return (
    <button onClick={() => changePosition(item)}>{position === 1 ? right : left} </button>
    ) 
}