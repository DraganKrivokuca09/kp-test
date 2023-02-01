import { FC } from 'react';
import styles from './AdCard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IAdCard } from '@/interfaces/ads';
import StarButton from '@/components/StarButton/StarButton';

const AdCard: FC<IAdCard> = ({ ad, singleAd }) => {

    const router = useRouter();
    const imgUrl = ad?.photo1_tmb_300x300 && `https://kupujemprodajem.com${ad?.photo1_tmb_300x300}`;

    const goOnAd = () => {
        if (!singleAd) router.push(`/oglas/${ad.id}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {imgUrl && <Image
                    alt='KupujemProdajem'
                    src={imgUrl}
                    width={96}
                    height={90}
                />}
                <div className={styles.content} onClick={() => goOnAd()}>
                    <div className={styles.description}>
                        <div className={styles.name}>{ad.name}</div>
                        <div className={styles.price}>{ad.price ? ad.price : 0}{ad.currency}</div>
                    </div>
                </div>
                {!ad?.deleted &&
                    <div className={styles.star}>
                        <StarButton ad={ad} />
                    </div>
                }
            </div>
        </div>
    )
};

export default AdCard;