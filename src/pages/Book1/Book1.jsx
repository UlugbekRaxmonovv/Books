import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Books1.css'
import { VscAdd } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { useGetMyselfQuery } from '../../components/context/api/productApi';
import Modul from '../../components/Modul/Modul'
import Edit from '../../pages/Book1/Edit/Edit';
import Pagination from '@mui/material/Pagination';
import { Box, Skeleton } from '@mui/material';
import { toast } from 'react-toastify';
import CreateABook from '../../components/CreateABook/CreateABook';
import { useDeleteProductMutation } from '../../components/context/api/productApi';

const Book1 = () => {
    const { data: myselfData,isFetching } = useGetMyselfQuery();
    const [deletUser] = useDeleteProductMutation();
    const [islogin, setIsLogin] = useState(false);
    document.body.style.overflow =  islogin ? "hidden" : "auto"
    const [page, setPage] = useState(1);
    const [modul, setModul] = useState(false);
    const [itemsPerPage, setItemsPerPage] = useState(Number(localStorage.getItem("pages")) || 3);

    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const paginatedData = myselfData?.slice((page - 1) * itemsPerPage, page * itemsPerPage);


    const handelDeletUser = (id) => {
        deletUser(id)
        toast.success("Product deleted successfully");
        
      }
    let links =paginatedData?.map((links) =>(
        <div className="wrapeer" key={links.id}>
        <div className="card">
         <div className="card_item">
            <h1>{links.title}</h1>
            <p>Cover:  <Link to={links.cover}> {links.cover}</Link></p>
                    <p>Isbn: {links.isbn}</p>
                    <p>Pages: {links.pages}</p>
          <p>Published: {links.published}</p>

          <div className="new">
         <div className="new_all">
            <h3>{links.author}/ 2012</h3>
         </div>
         <button style={{background:`${links.new === "new" ? "red" : links.new === "Reading" ? "#FFEC43"  :  links.new === "Finished" ? "#00FF29" : "#FFEC43" }`}}>
          {links.new}
         </button>
          </div>
         </div>
        </div>
        <div className="delet">
        <div className="delet_al">
    <RiDeleteBinLine onClick={()=> handelDeletUser(links.id)}/>
       </div>
       <div className="delet_als">
       <FiEdit3 onClick={() => setIsLogin(links)} />
       </div>
        </div>
    </div>
    )) 
  
    return (
        <div className="books1">
        <Navbar />
        <div className="book container">
            <div className="book_all">
            <div className="book_row">
                <h1>You’ve got <span> 7 book </span> </h1>
            </div>
             <div className="book_btn" onClick={() =>setModul(true)}>
             <div className="book_btn1">
                <VscAdd />
                </div>
                <div className="book_btn1">
                <p>Create a book</p>
                </div>
             </div>
            </div>
          
             <h1>Your books today</h1>
            
                   {    
                    isFetching ? 
                        <Box sx={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr',gap:'40px',padding:'32px 0'}}>
                        <Skeleton sx={{backgroundColor:'white',borderRadius:'12px'}} variant="rectangular"  width={397} height={214} />
                        <Skeleton sx={{backgroundColor:'white',borderRadius:'12px'}} variant="rectangular"  width={397} height={214} />
                        <Skeleton sx={{backgroundColor:'white',borderRadius:'12px'}} variant="rectangular"  width={397} height={214} />
            
                        </Box>
                        :
                        <div className="wrapeer_all">
                        {links}
                        </div>
                    }
           
          
             <Box sx={{display:'flex',justifyContent:'center', p:'25px',marginLeft:'20%'}}>
              <div className='paj'>
              <Pagination  count={Math.ceil(myselfData?.length / itemsPerPage)}  variant="outlined" page={page}  onChange={handlePageChange}  />
              </div>
             </Box>

    {
        islogin ?    <Modul  btn1={setIsLogin}  >
    <Edit islogin={islogin}  setIsLogin={setIsLogin}  />
         </Modul>
         :
         <></>
      }


      {
        modul ?    <Modul  btn1={setModul}   width='430px' height='237px'>
      <CreateABook  btn1={setModul}/>
         </Modul>
         :
         <></>
      }
          
        </div>

    </div>
    );
}

export default Book1;
