import { FC } from 'react';
import styles from './Description.module.scss';
import { IDescription } from '@/interfaces/description';

const Description: FC<IDescription> = ({ ad }) => {

    return (
        <div className={styles.container}>
            <div className={styles.category}>
                <div className={styles.info}>
                    <span>
                        <p>Kategorija: </p>
                        <p>Lokacija: </p>
                    </span>
                    <span>
                        <a href="">{ad.category_name} &gt; {ad.group_name}</a>
                        {ad.location_name}
                    </span>

                </div>
            </div>
            <div className={styles.desc}>
                Opis: {ad.description}
            </div>
        </div>
    )
};

export default Description;