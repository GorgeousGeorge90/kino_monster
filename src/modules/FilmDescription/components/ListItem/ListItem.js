import styles from './ListItem.module.scss';

const ListItem = ({title,array}) => {

    return (<div className={styles.title_item}>
                <p><b>{title}:</b></p>
                <ul className={styles.film_item_list}>
                    {
                        array.map(item => <li key={item.name}>{item.name}</li>)
                    }
                </ul>
            </div>)
}

export default ListItem