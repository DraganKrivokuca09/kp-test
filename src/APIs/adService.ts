import instance from "@/axios/axiosBase";

const getKPAds = async () => {
    try {
        const res = await instance.get('/ads');
        return res.data;
    } catch (e) {
        console.error(e);
        return [];
    }
}

const getSingleKPAd = async (id: any) => {
    try {
        const res = await instance.get(`/ads/${id}`);
        return res.data;
    } catch (err) {
        if (err.response.status === 404) {
            return null;
        }
        console.error(err)
    }
}

const favoritedAd = async (data: any) => {
    const updatedData = { ...data, saved: true };
    try {
        const res = await instance.put(`/ads/${data.id}`, updatedData);
        return res.data;
    } catch (err) {
        if (err.response.status === 404) {
            return null;
        }
        console.error(err)
    }
}

const unfavoritedAd = async (data: any) => {
    const updatedData = { ...data, saved: false };
    try {
        const res = await instance.put(`/ads/${data.id}`, updatedData);
        return res.data;
    } catch (err) {
        if (err.response.status === 404) {
            return null;
        }
        console.error(err)
    }
}

export { getKPAds, getSingleKPAd, favoritedAd, unfavoritedAd };