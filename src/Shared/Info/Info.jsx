import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({info}) => {
    const {_id,title,thumbnail_url,image_url,details}=info;
    return (
        <div className='p-10'>
            <div>
                <p className='text-2xl font-bold'>{title}</p>
                <img src={image_url} alt="" />
                {
                    details.length>200 ? <div>{ details.slice(0,200)}<Link to={`/info/${_id}`}><p className='text-blue-500'>Read More </p></Link> </div>:<p></p>
                }
            </div>
        </div>
    );
};

export default Info;