import styles from './InfoBlock.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchPhrase} from "./store/infoSlice";
import Rules from "./components/Rules/Rules";
import Contacts from "./components/Contacts/Contacts";
import Phrase from "./components/Phrase/Phrase";
import {useEffect} from "react";
import {getPhrase} from "./selectors/selectors";


const InfoBlock = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchPhrase())
    },[dispatch])
    const phrase = useSelector(state=>getPhrase(state))

    return (<div className={styles.container}>
        <Rules/>
        <Contacts/>
        <Phrase {...phrase}/>
    </div>)
}

export default InfoBlock