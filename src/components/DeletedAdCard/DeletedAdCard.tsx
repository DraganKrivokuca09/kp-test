import { FC } from 'react';
import styles from './DeletedAdCard.module.scss';
import Image from 'next/image';

const DeletedAdCard: FC<any> = () => {

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.deletedAdImg}>
                    <Image
                        alt='KupujemProdajem'
                        src="https://kupujemprodajem.com/images/no_photo100.png"
                        width={100}
                        height={85}
                    />
                </div>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <div className={styles.name}>Oglas je obrisan</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DeletedAdCard;