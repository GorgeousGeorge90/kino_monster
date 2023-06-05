import FilmsRating from "../../modules/FilmsRating/FilmsRating";
import Comments from "../../modules/Comments/Comments";
import styles from './RatingPage.module.scss';
import InfoBlock from "../../modules/InfoBlock/InfoBlock";


const RatingPage = () => {

    return (<div className={styles.container}>
        <FilmsRating/>
        <InfoBlock/>
        <Comments/>
    </div>)
}

export default RatingPage