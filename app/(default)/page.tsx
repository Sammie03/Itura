export const metadata = {
  title: 'Itura',
  description: 'A health care service platform',
}

import Whatweoffer from '@/components/whatweoffer'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Whatweoffer />
      <Features />
      <Services />
      <Testimonials />
      <Newsletter />
    </>
  )
}
