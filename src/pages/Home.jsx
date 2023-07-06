import React from 'react';
import { Link } from 'react-router-dom';
import DramaCharList from '../components/DramaCharList/DramaCharList';
import { DramaHome } from '../components/styled/dramaStyle';
import Info from './Info';
import { useSelector } from 'react-redux';

const Home = () => {
    const {charDisplay} = useSelector(state => state.charList);

    return (
        <DramaHome>
            <div className="inner">
                <Link to="/"><h1>환혼: 빛과 그림자</h1></Link>
                <DramaCharList />
                <div className={`click ${charDisplay}`}>
                    <p>인물 클릭 시 정보를 확인할 수 있습니다.</p>
                </div>
            </div>
        </DramaHome>
    );
};

export default Home;