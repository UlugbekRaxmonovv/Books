import React,{useState} from 'react';
import './CreateABook.css'
import { RiLinkM } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";


const CreateABook = ({btn1}) => {
    const [isbn, setIsbn] = useState('');
    return (
        <div className='CreateABook'>
            <div className="CreateABook_book">
                <div className="CreateABook_row">
                    <h1>Create a book</h1>
                </div>
                <IoIosCloseCircleOutline onClick={() =>btn1(false)}/>
            </div>
            <div className="isbn">
                <h1>ISBN</h1>
                <div className="isbn_input">
<div className="isbn_input_all">
<div className="isbn_input_all_row">
<RiLinkM />
</div>
<div className="isbn_input_all_row">
<input  
value={isbn}
 onChange={(e) => setIsbn(e.target.value)}
type="text" />
</div>
</div>
                </div>
            </div>
            <div className="CreateABook_allButton">
<div className="CreateABook_bnt">
        <button onClick={() =>btn1(false)}>Close</button>
    </div>
    <div className="CreateABook_bnt1">
        <button>Submit</button>
    </div>
</div>
            
        </div>
    );
}

export default CreateABook;
