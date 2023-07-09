import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DramaCharItem from './DramaCharItem';
import { getDrama } from '../../store/modules/dramaSlice';

const DramaCharList = () => {
    const { charListData } = useSelector(state => state.drama)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDrama())
    }, [])

    return (
        <ul>
        {
            charListData.map(item => <DramaCharItem key={item.id} item={item} />)
        }
        </ul>
    );
};

export default DramaCharList;