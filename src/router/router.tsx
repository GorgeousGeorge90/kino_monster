import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import LayoutElement from "./LayoutElement";
import InfoPage from "../pages/InfoPage/InfoPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import CurrentFilmPage from "../pages/CurrentFimPage/CurrentFilmPage";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LayoutElement/>}>
            <Route index element={<FilmsPage/>}/>
            <Route path=':id' element={<CurrentFilmPage/>}/>
            <Route path='news' element={<NewsPage/>}/>
            <Route path='info' element={<InfoPage/>}/>
        </Route>
    )
)

export default router