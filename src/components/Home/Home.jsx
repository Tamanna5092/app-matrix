import React from 'react'
import Banner from '../Banner/Banner'
import BannerCard from '../Banner/BannerCard'
import TrendingApps from '../TrendingApps/TrendingApps'
import { useLoaderData } from 'react-router'

export default function Home() {
    const appData = useLoaderData()
    console.log(appData)
  return (
    <div>
        <Banner></Banner>
        <BannerCard></BannerCard>
        <TrendingApps appData={appData}></TrendingApps>
    </div>
  )
}
