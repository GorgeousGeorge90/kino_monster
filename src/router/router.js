import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import LayoutElement from "./LayoutElement";
import RatingPage from "../pages/RatingPage/RatingPage";
import NewsPage from "../pages/NewsPage/NewsPage";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LayoutElement/>}>
            <Route index element={<FilmsPage/>}/>
            <Route path='news' element={<NewsPage/>}/>
            <Route path='rating' element={<RatingPage/>}/>
        </Route>
    )
)

export default router