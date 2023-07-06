import React from 'react';
import { useParams } from 'react-router-dom';
import DramaDetail1 from '../components/DramaInfoDetail/DramaDetail1';
import DramaDetail2 from '../components/DramaInfoDetail/DramaDetail2';
import DramaDetail3 from '../components/DramaInfoDetail/DramaDetail3';
import DramaDetail4 from '../components/DramaInfoDetail/DramaDetail4';

const InfoDetail = () => {
    const { detailNo } = useParams();
    return (
        <div className='con'>
            {
                detailNo === '1' ? <DramaDetail1 /> :
                detailNo === '2' ? <DramaDetail2 /> :
                detailNo === '3' ? <DramaDetail3 /> :
                detailNo === '4' ? <DramaDetail4 /> :
                ""
            }
        </div>
    );
};

export default InfoDetail;