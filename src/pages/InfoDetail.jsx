import { useParams } from 'react-router-dom';
import DramaDetail1 from '../components/DramaInfoDetail/DramaDetail1';
import DramaDetail2 from '../components/DramaInfoDetail/DramaDetail2';
import DramaDetail3 from '../components/DramaInfoDetail/DramaDetail3';
import DramaDetail4 from '../components/DramaInfoDetail/DramaDetail4';
import { useSelector } from 'react-redux';

const InfoDetail = () => {
    const { detailNo } = useParams();
    const { charInfoData } = useSelector(state => state.drama)

    return (
        <div className='con'>
            {
                detailNo === '1' ? <DramaDetail1 key={detailNo} charInfoData={charInfoData} /> :
                detailNo === '2' ? <DramaDetail2 key={detailNo} charInfoData={charInfoData} /> :
                detailNo === '3' ? <DramaDetail3 key={detailNo} charInfoData={charInfoData} /> :
                detailNo === '4' ? <DramaDetail4 key={detailNo} charInfoData={charInfoData} /> :
                ""
            }
        </div>
    );
};

export default InfoDetail;