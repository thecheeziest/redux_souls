import DramaInfoPic from '../components/DramaInfo/DramaInfoPic';
import { DramaInfo } from '../components/styled/dramaStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { onTab } from '../store/modules/dramaSlice';

const Info = () => {
    const { tabMenu } = useSelector(state => state.drama);
    const { infoNo } = useParams();
    const dispatch = useDispatch();

    return (
        <DramaInfo>
            <DramaInfoPic />
            <div className="right">
            <ul>
                {
                    tabMenu.map(item => <Link to={`/${infoNo}/${item.id}`}><li className={item.on ? "on" : ""} onClick={() => dispatch(onTab(item.id))}>
                        {item.tab}</li></Link>)
                }
            </ul>
            <Outlet />
            </div>
        </DramaInfo>
    );
};

export default Info;