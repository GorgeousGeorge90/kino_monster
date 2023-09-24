import styles from './InfoBlock.module.scss';
import { fetchPhrase } from './store/infoSlice';
import Rules from "./components/Rules/Rules";
import Phrase from "./components/Phrase/Phrase";
import { useEffect } from 'react';
import { getLoading, getPhrase } from './selectors/selectors';
import { ReactComponent as Spinner } from '../../assets/img/spinner.svg';
import { useAppDispatch, useAppSelector}  from '../../store/hooks';


const InfoBlock = () => {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchPhrase())
    },[dispatch])

    const status = useAppSelector(getLoading)

    return (<div className={styles.info_container}>
        <img className={styles.info_pic}
            src="https://media.istockphoto.com/id/489833698/photo/two-lounge-chairs-under-tent-on-beach.jpg?s=612x612&w=0&k=20&c=df_6Jkb5YreyaAcGVbdcRrTP4dZ-opUrYWtgRC3eKKI=" alt='img'/>
        <Rules/>
        {
            status === 'pending' ? <Spinner/>:<Phrase/>
        }
    </div>)
}

export default InfoBlock