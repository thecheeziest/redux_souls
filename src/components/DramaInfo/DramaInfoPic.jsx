import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeImage } from '../../store/modules/dramaSlice';

const DramaInfoPic = () => {
    const { charImg, charInfoData } = useSelector(state => state.drama);
    const {name, imgurl, pic, pic2} = charInfoData;
    const dispatch = useDispatch();

    return (
        <div className="left">
            <div className="pic-box">
                <div className="big-img">
                    <img src={charImg} alt={name} />
                </div>
                <div className="thum">
                        <img src={imgurl} alt={name} onClick={() => dispatch(changeImage(imgurl))} />
                        <img src={pic} alt={name} onClick={() => dispatch(changeImage(pic))} />
                        <img src={pic2} alt={name} onClick={() => dispatch(changeImage(pic2))} />
                </div>
            </div>
        </div>
    );
};

export default DramaInfoPic;