import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { changeInfo } from '../../store/modules/charListSlice';

const DramaCharItem = ({item}) => {
    const {id, imgurl, name, eng} = item;
    const { infoNo } = useParams();
    const dispatch = useDispatch();
    
    return (
        <li data-id={id}>
            <div className="pic" onClick={() => dispatch(changeInfo(id))}>
                <Link to={`/${eng}/1`}><img src={imgurl} alt={name} /></Link>
            </div>
            <p>{name}</p>
        </li>
    );
};

export default DramaCharItem;