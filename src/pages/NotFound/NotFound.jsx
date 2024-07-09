import React from 'react';
import './NotFound.css'
import rasm from '../../assets/img/undraw_page_not_found_re_e9o6 1@2x.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="books1">
                <div className='contai ner'>
            <div className="notfound">
            <div className="notfound_row">
            <img src={rasm} alt="" />

<div className="notfound_btn">
<Link to={'/'}>
<div className="notfound_btn1">
    <p>Go Home Page</p>
    </div>
</Link>
  <Link to={'book1'}>
  <div className="notfound_btn2">
    <p>Reload Page</p>
    </div>
  </Link>
</div>


            </div>
          </div>
            
            </div>
        
        </div>
    );
}

export default NotFound;
