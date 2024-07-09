import './Navbar.css'
import rasm from '../../assets/img/ikon.png'
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import rasm1 from '../../assets/img/user-image.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from '../Search/Search';
import { useGetMyselfQuery } from '../context/api/productApi';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
const Navbar = ({name,setName}) => {
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      localStorage.removeItem('x-auth-token');
      navigate('/login')
    };

    const { data} = useGetMyselfQuery({q:""});
  
    const filteredList = data?.filter(prop => prop.title.toLowerCase().includes(name.toLowerCase()));
    return (
        <div>   
            <header>
               <div className="container">
                <nav>
                <div className="img">
                    <div className="img_all">
                 <Link to={'/'}>   <img src={rasm} alt="" /></Link>
                    </div>
                    <div className="img_all">
                    <p><span>Books </span>List</p>
                    </div>
                    <div className="img_all">
                   <div className="input_rows">
                   <div className="input_s">
                     <FiSearch />
                     </div>
                     <div className="input_s">
                     <input type="search"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     placeholder='Search for any training you want ' />
                     </div>
                    
                   </div>
                {
                    name.trim() ? 
                    <div className="span_lr">
                          <h1>Популярное</h1> <br />
                      {
                        filteredList?.map((filteredList) =>(
                            <Search item={filteredList}/>
                        ))
                      }
                    </div>
                    :
                    <></>
                }
                    </div>
                </div>

                <ul  className='ul_list'>
                    <span className='span_r'></span>
                    <li>
                    <IoNotificationsOutline />
                    </li>
                    <li>
                    <Button
                  
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <img src={rasm1} alt="" />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
      
        anchorEl={anchorEl}
        open={open}
        TransitionComponent={Fade}
      >
        <MenuItem  onClick={handleClose}>Logout</MenuItem>
      </Menu>
                    </li>
                </ul>
                </nav>
               </div>
            </header>
            

        </div>
    );
}

export default Navbar;
