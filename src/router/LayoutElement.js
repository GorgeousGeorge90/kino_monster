import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



const LayoutElement = () => {

    return (<div className={'h-screen flex flex-col'}>
        <Header/>

        <main className={'bg-secondary_light dark:bg-secondary_dark flex-grow'}>
            <div className={'mx-16'}>
                <Outlet/>
            </div>
        </main>

        <Footer/>
    </div>)

}

export default LayoutElement