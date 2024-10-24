

import React, {useState} from 'react'

export default function Buttoncolor() {
    const [color, setColor] = useState();
    const colors = [
        {colors1: "red"},
        {colors1: "green"},
    ]

    const changeColor= (color) => {
        setColor(color)
    }
    
    return (
        <>
            <div>
                {colors.map((item) => (
                    <button 
                        key={item.colors1}
                        onClick={() => changeColor(item.colors1)} 
                        style={{ margin: '5px' }}
                    >
                        {item.colors1}
                    </button>
                ))}
            </div>

            <div 
                style={{ 
                    backgroundColor: color || 'transparent', 
                    height: "100px", 
                    width: "100px", 
                    border: "1px solid #000" 
                }} 
            ></div>
        </>
    );
}
