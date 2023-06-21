import styles from './RatingPage.module.scss';
import InfoBlock from "../../modules/InfoBlock/InfoBlock";
import FilmsSearch from "../../modules/FilmsRating/FilmsSearch";


const RatingPage = () => {

    return (<div className={styles.container}>
        <FilmsSearch/>
        <InfoBlock/>
    </div>)
}

export default RatingPage