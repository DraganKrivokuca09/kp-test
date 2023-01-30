import { FC, useEffect, useState } from 'react';
import styles from './StarButton.module.scss';
import StarSvg from '../../../../styles/icons/star.svg';
import FiledStarSvg from '../../../../styles/icons/filled_star.svg';
import { IStarButton } from '@/interfaces/buttons';
import { useAppDispatch } from '@/redux/hooks';
import { favoriteAd, unfavoriteAd } from '@/redux/ads';
import { favoritedAd, unfavoritedAd } from '@/APIs/adService';

const StarButton: FC<IStarButton> = ({ ad }) => {

    const dispatch = useAppDispatch();
    const [isClicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(ad?.saved)
    }, [ad]);

    const handleClick = async () => {
        if (ad?.saved) {
            const resUnfav = await unfavoritedAd(ad);
            dispatch(unfavoriteAd(resUnfav));
        } else {
            const resFav = await favoritedAd(ad);
            dispatch(favoriteAd(resFav));
        }
        setClicked((prevState) => !prevState);
    }

    return (
        <button className={styles.container} onClick={() => handleClick()}>
            {isClicked ? <FiledStarSvg /> : <StarSvg />}
        </button>
    )
};

export default StarButton;