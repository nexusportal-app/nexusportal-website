import {Banner} from '@/sections/Banner/Banner'
import {Faq} from '@/sections/Faq/Faq'
import {Footer} from '@/sections/Banner/Footer/Footer'
import {Problems} from '@/sections/Problems/Problems'
import {Solution} from '@/sections/Solution/Solution'
import {Features} from '@/sections/Features/Features'
import {Design} from '@/sections/Design/Design'

export default function Home() {
  return (
    <main>
      <Banner />
      <Problems />
      <Solution />
      <Features />
      <Design />
      <Faq />
      <Footer />
    </main>
  )
}
