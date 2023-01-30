import { createAction } from '@reduxjs/toolkit';
import { IAds } from '@/interfaces/ads';
import { ALL_AD, FAVORITE_AD, SINGLE_AD, UNFAVORITE_AD } from '../types';

export const setAllAds = createAction<IAds[]>(ALL_AD);
export const setSingleAd = createAction<IAds>(SINGLE_AD);
export const favoriteAd = createAction<IAds>(FAVORITE_AD);
export const unfavoriteAd = createAction<IAds>(UNFAVORITE_AD);