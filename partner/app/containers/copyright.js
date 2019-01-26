import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import LegalNav from '../components/legal-nav' // eslint-disable-line no-unused-vars

export default class Copyright extends Component {
  render() {
    return (
      <section className="info-page">
        <LegalNav isActive={'copyright'} />

        <div className="info-wrapper terms">
          <h2 className="center">Copyright & Trademark Policy</h2>
          <p><strong>Repeat Infringer Policy</strong></p>
          <p>In accordance with the Digital Millennium Copyright Act
            { ' ' }(<strong>"DMCA"</strong>) and other applicable law,
            { ' ' }Dendrite Corp. has adopted a policy of terminating,
            { ' ' }in appropriate circumstances as determined by Dendrite,
            { ' ' }users or account holders who are deemed to be repeat
            { ' ' }infringers of the copyrights, trademark rights or other
            { ' ' }intellectual property rights of others.  Dendrite may also
            { ' ' }at its sole discretion limit access to the Haystack website
            { ' ' }and other online products and services
            { ' ' }(<strong>“Services”</strong>) and/or update, transfer,
            { ' ' }suspend or terminate the accounts of any users who infringe
            { ' ' }the intellectual property rights of others, whether or
            { ' ' }not there is any repeat infringement.</p>
          <p><strong>Copyright Complaints</strong></p>
          <p>If you believe that anything in the Services infringes any copyright
          { ' ' }that you own or control, you may file a notification of such
          { ' ' }infringement with our Designated Agent as follows:</p>
          <table className="dendrite">
            <tbody>
              <tr>
                <td className="title">Name &amp; Address <br></br>of Designated Agent</td>
                <td><strong>The Dendrite Corporation<br>
                </br>544 Park Ave., Suite 331<br></br>Brooklyn, NY 11205</strong></td>
              </tr>
              <tr>
                <td className="title">Telephone</td>
                <td><strong>+1 (718) 576-1770</strong></td>
              </tr>
              <tr>
                <td className="title">Facsimile</td>
                <td><strong>N/A</strong></td>
              </tr>
              <tr>
                <td className="title">Email</td>
                <td><strong>andrew@haystack.im</strong></td>
              </tr>
            </tbody>
          </table>

          <p>Please see 17 U.S.C. §512(c)(3) for the requirements of a proper notification.
          { ' ' }You should note that under 17 U.S.C. §512(f), if you knowingly
          { ' ' }misrepresent that material or activity is infringing, you may be liable
          { ' ' }for any damages, including costs and attorneys' fees, incurred
          { ' ' }by us or our users.  If you are unsure whether the material or
          { ' ' }activity you are reporting is infringing, you may wish to contact
          { ' ' }an attorney before filing a notification with us.</p>
          <p><strong>Trademark Complaints</strong></p>

          <p>If you believe that anything in the Services infringes any trademark
          { ' ' }rights that you own or control, you may let us know by sending
          { ' ' }a notification of such infringement to our Designated Agent using
          { ' ' }the contact information stated above.  In order to investigate
          { ' ' }any allegations of trademark infringement, please include in your
          { ' ' }notification the following information:</p>
          <ul className="doc-list">
            <li>Your first and last name</li>
            <li>Title (if applicable)</li>
            <li>Company name (if applicable)</li>
            <li>Address</li>
            <li>Telephone</li>
            <li>Facsimile</li>
            <li>Email (must be from your company’s domain)</li>
            <li>Description and location in the Services of the alleged trademark infringement</li>
            <li>Requested action to address the alleged trademark infringement</li>
          </ul>
        </div>
      </section>
    )
  }
}
