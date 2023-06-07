import {Outlet} from 'react-router-dom';
import Header from "../components/Header/Header";



const LayoutElement = () => {

    return (<>
        <Header/>

        <main className={'max-w-screen-xl mx-auto dark:bg-neutral-800'}>
            <div className={'mx-16'}>
                <Outlet/>
            </div>
        </main>
    </>)

}

export default LayoutElement