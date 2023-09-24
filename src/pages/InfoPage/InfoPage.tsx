import InfoBlock from '../../modules/InfoBlock/InfoBlock';
import FilmCard from '../../modules/FilmCard/FilmCard';
import styles from './InfoPage.module.scss';


const InfoPage = () => {

    return (<div className={styles.info_page_container}>
        <div className={styles.info_page_content}>
            <FilmCard/>
            <InfoBlock/>
        </div>
    </div>)
}

export default InfoPage