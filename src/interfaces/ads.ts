export interface IAds {
    id: number;
    category_name: string;
    currency: string;
    description: string;
    group_name: string;
    location_name: string;
    name: string;
    photo1_tmb_300x300: string;
    photo_path1: string;
    price: number;
    saved: boolean;
    deleted: boolean;
}

export interface IAdCard {
    ad: IAds;
    singleAd: boolean;
}

export interface IAdView {
    ad: IAds;
}