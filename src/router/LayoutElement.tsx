import {Outlet} from 'react-router-dom';
import Header from './../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './LayoutElement.module.scss';



const LayoutElement = () => {

    return (<div className={styles.app} id='app'>
        <Header/>

        <main className={styles.app_main}>
                <Outlet/>
        </main>

        <Footer/>
    </div>)

}

export default LayoutElement