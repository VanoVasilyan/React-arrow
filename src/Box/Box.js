import React from "react";
import BoxItem from "./BoxItem";

export default function Box({box,changePosition}) {
    return(
        <div style={{border:"1px solid black",width:200}}>
            {box.items.map(e => (
                <BoxItem key={e.id} item={e} changePosition={changePosition} position = {box.id}/>
            ))}
        </div>
    )
}
