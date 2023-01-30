import { AnyAction } from '@reduxjs/toolkit';
import { IAds, IAd } from '../interfaces/ads';
import { HYDRATE } from 'next-redux-wrapper';
import { ALL_AD, FAVORITE_AD, SINGLE_AD, UNFAVORITE_AD } from '../types';

const initialState: IAds = {
  allAds: [],
  singleAd: {},
};

export const adsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        allAds: action.payload
      };
    case ALL_AD:
      return {
        ...state,
        allAds: action.payload
      }
    case SINGLE_AD:
      return {
        ...state,
        singleAd: action.payload
      }
    case FAVORITE_AD:
      const tempFavoritedAd: IAd[] = state.allAds.map((ad: any) => {
        if (ad.id === action.payload.id) {
          return { ...ad, saved: true }
        }
        return ad;
      });
      return {
        ...state,
        allAds: tempFavoritedAd
      }
    case UNFAVORITE_AD:
      const tempUnfavoritedAd: IAd[] = state.allAds.map((ad: any) => {
        if (ad.id === action.payload.id) {
          return { ...ad, saved: false }
        }
        return ad;
      });
      return {
        ...state,
        allAds: tempUnfavoritedAd
      }
    default:
      return state;
  }
}
