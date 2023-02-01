import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { IAds } from "@/interfaces/ads";
import AdCard from "@components/AdCard/AdCard";
import { getKPAds } from "@/APIs/adService";
import { useEffect } from "react";
import { setAllAds } from "@/redux/ads";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Home: NextPage<{ ads: IAds[] }> = ({ ads }) => {

  const dispatch = useAppDispatch();
  const allAds = useAppSelector((state) => state?.ads?.allAds);

  useEffect(() => {
    dispatch(setAllAds(ads));
  }, [ads])

  return (
    <>
      <Head>
        <title>Oglasi</title>
      </Head>
      {allAds.map((ad: any, index: any) => {
        return <AdCard key={index} ad={ad} singleAd={false} />
      })}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getKPAds();
  return {
    props: {
      ads: res
    },
  };
};

export default Home;
