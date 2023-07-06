import { Outlet, useNavigate } from 'react-router-dom';
import { DramaWrap } from '../components/styled/dramaStyle';
import Home from './Home';
import { useEffect } from 'react';

const Layout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <DramaWrap>
            <Home />
            <Outlet />
        </DramaWrap>
    );
};

export default Layout;