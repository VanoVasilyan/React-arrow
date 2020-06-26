import React from "react";
import ButtonBox from "./ButtonBox";

export default function BoxItem({item,changePosition,position}) {
    return(
        <div >
            {item.name}
           <ButtonBox item = {item} changePosition = {changePosition} position={position}/>
        </div>
    )
}

