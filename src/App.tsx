import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import { MainRoute } from 'shared/components/MainRoute';
import { Posts } from 'shared/components/Posts';
import { PostAbout } from 'shared/components/Posts/components/PostsAbout';
import { PageNotFound } from 'shared/components/PageNotFound';
//enums
import { RoutesEnum } from 'shared/enums/RoutesEnum';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainRoute />}>
                    <Route path={RoutesEnum.HOME} element={<Posts />} />
                    <Route
                        path={RoutesEnum.SINGLE_POST}
                        element={<PostAbout />}
                    />
                </Route>
                <Route path={RoutesEnum.NOT_FOUND} element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
