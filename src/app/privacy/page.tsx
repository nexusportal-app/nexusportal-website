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

export default function Privacy() {
  return (
    <Page width="sm" title="Privacy Policy" sx={sxContent}>
      <p><strong>Last updated:</strong> March 6, 2026</p>

      <p>
        This Privacy Policy explains how NexusPortal collects, uses, and protects information when you use the service.
      </p>

      <h3>User Accounts and Authentication</h3>

      <p>
        NexusPortal does not provide direct account registration. Users access the platform exclusively through third-party authentication providers.
      </p>

      <p>
        When you sign in using providers such as <strong>Google</strong> or <strong>Microsoft</strong>, we receive basic profile information from the authentication provider in
        order
        to create and manage your account. This typically includes:
      </p>

      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Profile picture</li>
        <li>Job title (if provided)</li>
        <li>Office name (if provided)</li>
      </ul>

      <p>
        This information is used solely to authenticate access to the platform and manage user accounts. NexusPortal does not receive or store your passwords for these external
        services.
      </p>

      <h3>Data Collected Through Forms and External Sources</h3>

      <p>
        NexusPortal allows users to connect external data sources and upload datasets, including form submissions collected through tools such as KoboToolbox.
      </p>

      <p>
        These datasets may contain information about third parties (for example survey respondents or program participants).
      </p>

      <p>
        In this context:
      </p>

      <ul>
        <li>Users of NexusPortal act as the <strong>data controllers</strong> for the data they collect.</li>
        <li>NexusPortal acts as a <strong>data processor</strong>, storing and processing data only to provide the functionality of the platform.</li>
      </ul>

      <p>
        We do not use form submission data for our own purposes except when necessary to:
      </p>

      <ul>
        <li>respond to support requests</li>
      </ul>

      <p>
        Users are responsible for ensuring they have the appropriate legal basis to collect and process any personal data uploaded to the platform.
      </p>

      <h3>Uploaded Files and Attachments</h3>

      <p>
        Users may upload files or datasets to the platform, including:
      </p>

      <ul>
        <li>CSV or spreadsheet data</li>
        <li>Images</li>
        <li>Documents</li>
        <li>Files attached to form submissions</li>
      </ul>

      <p>
        These files are stored securely and are accessible only to authorized users within the workspace.
      </p>

      <h3>Data Hosting and Security</h3>

      <p>
        Data is hosted on secure infrastructure operated by Hetzner in Finland.
      </p>

      <p>
        We implement reasonable technical and organizational measures to protect information from unauthorized access, loss, or alteration. However, no internet-based service can
        guarantee absolute security.
      </p>

      <h3>Data Retention</h3>

      <p>
        We retain personal data only as long as necessary to provide the service or comply with legal obligations.
      </p>

      <p>
        Users may request deletion of their account and associated data at any time.
      </p>

      <h3>Data Sharing</h3>

      <p>
        NexusPortal does not sell or rent personal data.
      </p>

      <p>
        Data may be shared only in the following circumstances:
      </p>

      <ul>
        <li>when required by law</li>
        <li>when necessary to operate the service (for example hosting providers)</li>
        <li>with the consent of the user</li>
      </ul>

      <h3>User Rights</h3>

      <p>
        Users may request:
      </p>

      <ul>
        <li>access to their personal data</li>
        <li>correction of inaccurate data</li>
        <li>deletion of their data</li>
      </ul>

      <p>
        Requests can be sent to: contact@nexusportal.app
      </p>

      <h3>Changes to This Policy</h3>

      <p>
        This Privacy Policy may be updated from time to time. The updated version will always be available on this page with the latest revision date.
      </p>

      <h3>Contact</h3>

      <p>
        For any questions regarding this Privacy Policy, please contact:
      </p>

      <p>
        contact@nexusportal.app
      </p>
    </Page>
  )
}