import styles from './ListItem.module.scss';
import { FC } from 'react';
import { GenreType } from '../../../../modules/FilmsList/types/types';

type ListItemType = {
    title:string,
    array:string[] | GenreType[],
}

const ListItem:FC<ListItemType> = ({title,array}) => {

    return (<div className={styles.title_item}>
                <p><b>{title}:</b></p>
                <ul className={styles.film_item_list}>
                    {
                        array.map((item,i) =>
                            typeof item === 'string' ? <li key={i}>{item}</li>:
                                <li key={item.name}>{item.name}</li>
                        )
                    }
                </ul>
            </div>)
}

export default ListItem