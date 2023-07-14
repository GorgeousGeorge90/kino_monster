import InfoBlock from "../../modules/InfoBlock/InfoBlock";
import FilmCard from "../../modules/FilmCard/FilmCard";


const InfoPage = () => {

    return (<div className={'grid grid-cols-2'}>
        <FilmCard/>
        <InfoBlock/>
    </div>)
}

export default InfoPage