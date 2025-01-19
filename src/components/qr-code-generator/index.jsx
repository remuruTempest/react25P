import QRCode from "react-qr-code";

import { useState } from "react";

export default function QRCodeGenerator() {



        const [qrCode, setQrCode] = useState("");
        const [input, setInput] = useState(""); 
        
        
        function handleGenerateQrCode(){
            setQrCode(input);
            setInput("");
        }
    return (
        <div>
            <h1>QR code Generator</h1>

            <div>
                <input onChange={(e)=>setInput(e.target.value)}
                 type="text"
                  name="qr-code"
                  value={input}
                   placeholder="Enter Name" />

                <button disabled={input && input.trim()!=='' ? false :true} 
                onClick={handleGenerateQrCode} >
                        Generate
                </button>
            </div>

            <div>
                <QRCode
                id="qr-code-value"
                value={qrCode}
                size={400}
                bgColor="#fff"
                />
            </div>

        </div>
    )

}