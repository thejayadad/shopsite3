import Featured from '@/components/Featured/Featured'
import Gallery from '@/components/Gallery/Gallery'
import Hero from '@/components/Hero/Hero'
import NewsLetter from '@/components/Newsletter/NewsLetter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='text-sm leading-loose'>
      <Hero />
      <Featured />
      <Gallery />
      <NewsLetter />
    </main>
  )
}
