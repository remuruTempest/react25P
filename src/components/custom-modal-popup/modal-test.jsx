import { useState } from "react";
import Modal from "./modal";
import "./modal.css";




export default function ModalTest(){

    const [showModalPopup, setshowModalPopup]= useState(false);


    function handleToggleModalPopup(){
        setshowModalPopup(!showModalPopup)
    };

    return (
            <div className="container">
                <button onClick={handleToggleModalPopup}>Open Modal Pop-up</button>
                {
                    showModalPopup && <Modal
                    body={<div>Customize Body</div>}
                    
                    />
                }

            </div>
    )
}