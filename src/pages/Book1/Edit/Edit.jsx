import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useUpdateProductMutation } from '../../../components/context/api/productApi';
import './Edit.css'

const Edit = ({islogin,setIsLogin}) => {
    const [updateProduct, { isLoading,isSuccess }] = useUpdateProductMutation();

    useEffect(() => {
        if(isSuccess)
        {
            setIsLogin(null)
          toast.success('A new reference has been created')
        }
        },[isSuccess])
         
         const AddCard = (e) => {
             e.preventDefault()
             let links = {
                title: islogin.title,
                isbn: islogin.isbn,
                pages: islogin.pages,
                published: islogin.published,
                
             }
             updateProduct({body: links, id: islogin.id}) 
         }
    return (
        <div className='edit'>
              <form onSubmit={AddCard} className="from_all">
                    <h2>Update Books</h2>
                    <input type="text"
                        value={islogin.title} 
                        onChange={(e) => setIsLogin(prev =>({...prev, title: e.target.value }))}/>
                         <input type="text"
                        value={islogin.isbn} 
                        onChange={(e) => setIsLogin(prev =>({...prev, isbn: e.target.value }))}/>
                         <input type="text"
                        value={islogin.pages} 
                        onChange={(e) => setIsLogin(prev =>({...prev, pages: e.target.value }))}/>
                         <input type="text"
                        value={islogin.published} 
                        onChange={(e) => setIsLogin(prev =>({...prev, published: e.target.value }))}/>
                    <button className='btn2' disabled={isLoading}>{isLoading ? 'loading' : 'Save'}</button>                   
                   
            </form> 
        </div>
    );
}

export default Edit;
