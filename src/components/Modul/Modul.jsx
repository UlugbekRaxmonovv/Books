import React from 'react';
import './Modul.css'

const Modul = ({children,btn1,width='437px',height="400px"}) => {
    return (
        <div>
        <div  onClick={() => btn1(false)} className="overlay"></div>
        <div style={{width,height}} className="modul" >
         {children}
        </div>
        </div>
    );
}

export default Modul;