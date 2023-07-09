import React from 'react';
import DramaInfoPic from '../components/DramaInfo/DramaInfoPic';
import { DramaInfo } from '../components/styled/dramaStyle';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { onTab } from '../store/modules/dramaSlice';

const Info = () => {
    const {tabMenu, charInfoData} = useSelector(state => state.drama);
    const { detailNo, infoNo } = useParams();
    const dispatch = useDispatch();

    return (
        <DramaInfo>
            <DramaInfoPic />
            <div className="right">
            <ul>
                {
                    tabMenu.map(item => <li className={item.on ? "on" : ""} onClick={() => dispatch(onTab(item.id))}>
                        <Link to={`/${infoNo}/${item.id}`}>{item.tab}</Link></li>)
                }
            </ul>
            <Outlet />
            </div>
        </DramaInfo>
    );
};

export default Info;