import styles from './InfoBlock.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchPhrase} from "./store/infoSlice";
import Rules from "./components/Rules/Rules";
import Contacts from "./components/Contacts/Contacts";
import Phrase from "./components/Phrase/Phrase";
import {useEffect} from "react";
import {getLoading, getPhrase} from "./selectors/selectors";
import {ReactComponent as Spinner} from '../../assets/img/spinner.svg';


const InfoBlock = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchPhrase())
    },[dispatch])
    const phrase = useSelector(getPhrase)
    const status = useSelector(getLoading)

    return (<div className={styles.info_container}>
        <img className={styles.info_pic}
            src="https://media.istockphoto.com/id/489833698/photo/two-lounge-chairs-under-tent-on-beach.jpg?s=612x612&w=0&k=20&c=df_6Jkb5YreyaAcGVbdcRrTP4dZ-opUrYWtgRC3eKKI=" alt='img'/>
        <Rules/>
        {
            status === 'pending' ? <Spinner/>:<Phrase {...phrase}/>
        }
    </div>)
}

export default InfoBlock