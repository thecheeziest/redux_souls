import React from 'react';
import { useSelector } from 'react-redux';

const DramaDetail1 = () => {
    const {charInfoData} = useSelector(state => state.drama)
    const {name, eng, theme1, theme2, title1, title2, title3, title4} = charInfoData
    
    return (
        <>
            <h3>{name}</h3>
            <em>{eng}</em>
            <strong>활동 이력</strong>
            <ul>
                <li>
                    <strong>{theme1}</strong>
                    <p>{title1}</p>
                    <p>{title2}</p>
                </li>
                <li>
                    <strong>{theme2}</strong>
                    <p>{title3}</p>
                    <p>{title4}</p>
                </li>
            </ul>
        </>
    );
};

export default DramaDetail1;