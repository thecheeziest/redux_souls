import React from 'react';
import { useSelector } from 'react-redux';
import DramaCharItem from './DramaCharItem';

const DramaCharList = () => {
    const { charListData } = useSelector(state => state.charList)

    return (
        <ul>
        {
            charListData.map(item => <DramaCharItem key={item.id} item={item} />)
        }
        </ul>
    );
};

export default DramaCharList;