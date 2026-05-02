import {Page} from '@/shared/Page'
import {SxProps} from '@mui/material'

export const sxContent: SxProps = {
  p: {
    textAlign: 'justify',
  },
  counterReset: 'section',

  '& h3': {
    counterIncrement: 'section',
  },

  '& h3::before': {
    content: 'counter(section) ". "',
    fontWeight: 'bold',
    marginRight: '8px',
  },
}

export default function LegalPage() {
  return (
    <Page width="sm" title="Legal Notice" sx={sxContent}>
      <h2>Publisher Information</h2>
      <p>
        This website is operated by <strong>ALEXANDRE ANNIC CONSULTING</strong>, a sole trader (Entreprise individuelle).
      </p>
      <p>
        Registered address: 16 Rue René de Kerallain, 29000 Quimper, France
      </p>
      <p>
        SIRET: 813 521 176 00053
      </p>
      <p>
        Registered on: September 12, 2015
      </p>
      <p>
        Business activity: Computer programming (NAF code 6201Z)
      </p>
      <p>
        Competent registry: Trade and Companies Register of Quimper
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:contact@nexusportal.app">contact@nexusportal.app</a>
      </p>

      <h2>Hosting</h2>
      <p>
        This website (landing page) is hosted by Vercel Inc.<br />
        440 N Barranca Ave #4133, Covina, CA 91723, United States<br />
        Website: https://vercel.com
      </p>
      <p>
        The application and database infrastructure are hosted on servers located in Finland (Hertzner Online GmbH).<br />
        Industriestr. 25, 91710 Gunzenhausen, Germany<br />
        Website: https://www.hetzner.com
      </p>

      <h2>Data Collection</h2>
      <p>
        This website uses analytics services, including Google Analytics and Vercel Analytics, to measure traffic and improve user experience.
      </p>
      <p>
        These services may collect anonymized usage data through cookies or similar technologies.
      </p>

      <h2>Liability</h2>
      <p>
        The publisher strives to ensure that the information provided on this website is accurate and up to date. However, no guarantee is given regarding the completeness or
        accuracy of the information.
      </p>
      <p>
        The publisher cannot be held liable for any direct or indirect damages resulting from access to or use of this website.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website (texts, images, graphics, logo, etc.) is the property of the publisher unless otherwise stated.
      </p>
      <p>
        Any reproduction, distribution, or use without prior written permission is prohibited.
      </p>
    </Page>
  )
}