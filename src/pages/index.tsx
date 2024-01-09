import Image from 'next/image'
import { Inter } from 'next/font/google'
import VideoCard from '@/components/VideoCard'
import { VideoGrid } from '@/components/VideoGrid'
import { Appbar } from '@/components/Appbar'
import { LeftbarCard } from '@/components/Leftbarcard'
import { LeftbarGrid } from '@/components/LeftbarGrid'
import { PageLayout } from '@/components/PageLayout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <LeftbarGrid></LeftbarGrid> */}
      {/* <LeftbarCard></LeftbarCard> */}
      {/* <Appbar></Appbar>
      <VideoGrid></VideoGrid> */}
      <PageLayout></PageLayout>
    </div>
  )
}
