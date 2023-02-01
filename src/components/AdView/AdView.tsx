import { FC } from 'react';
import styles from './AdView.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AdCard from '../AdCard/AdCard';
import Description from '@common/Description/Description';
import DeletedAdCard from '@common/DeletedAdCard/DeletedAdCard';
import { IAdView } from '@interfaces/ads';


const AdView: FC<IAdView> = ({ ad }) => {

    const router = useRouter();
    const imgUrl = ad?.photo_path1 && `https://kupujemprodajem.com${ad?.photo_path1}`;

    return (
        <div className={styles.container}>
            <div className={styles.back}>
                <span onClick={() => router.back()}>{'< Nazad na listu'}</span>
            </div>
            {!ad?.deleted ? (
                <>
                    <AdCard ad={ad} singleAd={true} />
                    <Description ad={ad} />
                    {imgUrl &&
                        <div className={styles.adViewImg}>
                            <Image
                                alt='KP'
                                src={imgUrl}
                                width={500}
                                height={400}
                            />
                        </div>
                    }
                </>
            ) : (
                <DeletedAdCard />
            )}
        </div>
    )
};

export default AdView;