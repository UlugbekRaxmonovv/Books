import React from 'react';
import './NotFound.css'
import rasm from '../../assets/img/undraw_page_not_found_re_e9o6 1@2x.png'
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate  = useNavigate()
    return (
        <div className="books1">
                <div className='contai ner'>
            <div className="notfound">
            <div className="notfound_row">
            <img src={rasm} alt="" />

<div className="notfound_btn">
<Link to={'/home'}>
<div className="notfound_btn1">
    <p>Go Home Page</p>
    </div>
</Link>
  <button className="notfound_btn2" onClick={() => navigate(1)}>
  <div >
    <p>Reload Page</p>
    </div>
  </button>
</div>


            </div>
          </div>
            
            </div>
        
        </div>
    );
}

export default NotFound;
