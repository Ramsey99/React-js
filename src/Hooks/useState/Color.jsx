import React, {useState} from 'react'

export default function Color() {
    const [color, setColor] = useState();
    const colors = [
        {colors1: "red"},
        {colors1: "green"},
    ]
     const changeColor = (e) => {
        setColor(e.target.value);
     }
     return (
        <>
          <select onChange={changeColor}>
          {colors.map((item) => {
                         return (
                            <>
                                <option value={item.colors1}>{item.colors1}</option>
    
                            </>
                        )
                    })}
    
            
          </select>
    
          <div style={{backgroundColor:color , height:"100px" ,width:"100px"}}></div>
          </>
     )
}
