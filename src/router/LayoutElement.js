import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



const LayoutElement = () => {

    return (<div className={'h-screen flex flex-col'}>
        <Header/>

        <main className={'dark:bg-neutral-800 flex-grow'}>
            <div className={'mx-16'}>
                <Outlet/>
            </div>
        </main>

        <Footer/>
    </div>)

}

export default LayoutElement