import InfoBlock from "../../modules/InfoBlock/InfoBlock";
import FilmCard from "../../modules/FilmCard/FilmCard";


const InfoPage = () => {

    return (<div className={'grid grid-cols-2 max-w-screen-xl my-0 mx-auto'}>
        <FilmCard/>
        <InfoBlock/>
    </div>)
}

export default InfoPage