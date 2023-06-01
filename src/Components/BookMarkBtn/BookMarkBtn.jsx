import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookMarkBtn = ({ bookmark }) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = () => {
        successAlert();
        setIsDisabled(true);
    };

    const successAlert = () => toast.success('Added to Bookmark!', {
        position: "top-center",
        autoClose: 1500,
        limit: 1,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div>
            <div className="add-to-favorite">
                <button onClick={handleClick} disabled={isDisabled} className='border-0 bg-white' >
                    {
                        isDisabled ? <FaHeart style={{ color: 'var(--primary-color)' }} /> : <FaHeart />
                    }

                </button>
            </div>
            <ToastContainer />
        </div>

    );
};

export default BookMarkBtn;