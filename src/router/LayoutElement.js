import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";


const LayoutElement = () => {

    return (<>
        <Header/>

        <main>
            <Outlet/>
        </main>
    </>)

}

export default LayoutElement