import { useState } from "react";
import Modal from "./modal";
import "./modal.css";




export default function ModalTest(){

    const [showModalPopup, setshowModalPopup]= useState(false);


    function handleToggleModalPopup(){
        setshowModalPopup(!showModalPopup)
    };

    function onClose() {
        setshowModalPopup(false);
      };

    return (
            <div className="container">
                <button onClick={handleToggleModalPopup}>Open Modal Pop-up</button>
                {
                    showModalPopup && <Modal

                    id={"custom-id"}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    onClose={onClose}
                    body={<div>Customized body</div>}
                    
                    />
                }

            </div>
    )
}