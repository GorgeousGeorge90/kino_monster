import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import LayoutElement from "./LayoutElement";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LayoutElement/>}>
            <Route index element={<FilmsPage/>}/>
            <Route path='contacts' element={<ContactsPage/>}/>
        </Route>
    )
)

export default router