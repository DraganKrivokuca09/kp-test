import { GetServerSideProps, NextPage } from "next";
import AdView from "@/components/AdView/AdView";
import { getSingleKPAd } from "@/APIs/adService";
import { setSingleAd } from "@/redux/ads";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import Head from "next/head";

const AdViewID: NextPage<any> = ({ ad }) => {

    const dispatch = useAppDispatch();
    const singleAd = useAppSelector((state) => state?.ads?.singleAd);
    const headTitle = `Oglas ${singleAd?.id}`

    useEffect(() => {
        dispatch(setSingleAd(ad));
    }, [ad])

    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>
            <AdView ad={singleAd} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await getSingleKPAd(context?.params?.id);

    return {
        props: {
            ad: res
        }
    };
};

export default AdViewID;