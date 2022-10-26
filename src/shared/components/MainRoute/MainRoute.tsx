import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//components
import { Header } from 'shared/components/Header';
import { Loader } from 'shared/components/Loader';
import { Footer } from '../Footer';

const MainRoute: FC = () => {
    return (
        <>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default MainRoute;
