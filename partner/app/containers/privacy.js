import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router' // eslint-disable-line no-unused-vars
import LegalNav from '../components/legal-nav' // eslint-disable-line no-unused-vars

export default class Privacy extends Component {
  render() {
    const space = ' '
    return (
      <section className="info-page">
        <LegalNav isActive={'privacy'} />

        <div className="info-wrapper terms">
          <h2 className="center">Privacy Policy for Haystack.im Users</h2>
          <p><strong>Last Updated: January 25, 2016</strong></p>
          <p>This Privacy Policy explains how information about you is collected,
            { space }used and disclosed by Dendrite Corp.
            { space }("<strong>Dendrite</strong>," "<strong>we</strong>" or "<strong>us</strong>").
            { space }This Privacy Policy applies to information we collect when you use Haystack
            { space }and our other online products and services (collectively,
            { space }the "<strong>Services</strong>").</p>
          <p>We may change this Privacy Policy from time to time. If we make changes,
            { space }we will notify you by revising the date at the top of the policy and,
            { space }in some cases, we may provide you with additional notice
            { space }(such as adding a statement to our homepage or
            { space }sending you an email notification).
            { space }We encourage you to review the Privacy Policy whenever you access
            { space }the Services to stay informed about our information practices and
            { space }the ways you can help protect your privacy.</p>
          <p><strong>Collection of Information</strong></p>
          <p><strong>Information You Provide to Us</strong></p>
          <p>We collect information you provide directly to us. For example,
            { space }we collect information when you create an account, fill out a form,
            { space }make a purchase, communicate with us via third party social media sites,
            { space }request customer support or otherwise communicate with us.
            { space }The types of information we may collect include basic user information
            { space }(such as your name, email address, postal address and phone number),
            { space }financial information for purchases you make through the Services
            { space }(such as your credit card number, expiration date and security code),
            { space }and other contact or identifying information you choose to provide.</p>
          <p><strong>Information We Collect Automatically When You Use the Services</strong></p>
          <p>When you access or use our Services,
            { space }we automatically collect information about you, including:</p>
          <ul className="info-text">
            <li>
              <strong>Log Information: </strong>
              We log information about your use of the Services,
              { space }including the type of browser you use, access times,
              { space }pages viewed, your IP address and the page you visited
              { space }before navigating to our Services.
            </li>
            <li>
              <strong>Device Information: </strong>
              We collect information about the computer or
              { space }mobile device you use to access our Services,
              { space }including the hardware model, operating system and version,
              { space }unique device identifiers and mobile network information.
            </li>
            <li>
              <strong>Information Collected by Cookies and Other Tracking Technologies: </strong>
              We use various technologies to collect information, and this may include
              { space }sending cookies to your computer or mobile device. Cookies
              { space }are small data files stored on your hard drive or in device
              { space }memory that helps us to improve our Services and your experience,
              { space }see which areas and features of our Services are popular and count visits.
              { space }We may also collect information using web beacons
              { space }(also known as "tracking pixels"). Web beacons are electronic images
              { space }that may be used in our Services or emails and help deliver cookies,
              { space }count visits, understand usage and campaign effectiveness and
              { space }determine whether an email has been opened and acted upon.
              { space }For more information about cookies, and how to disable them,
              { space }please see "Your Choices" below.
            </li>
            <li>
              <strong>Location Information: </strong>
              We may collect information about the location of your device each
              { space }time you access or use our mobile application or otherwise
              { space }consent to the collection of this information.
            </li>
          </ul>
          <p><strong>Information We Collect From Other Sources</strong></p>
          <p>
            We may also obtain information from other sources and combine that
            { space }with information we collect through our Services. For example,
            { space }we may collect information about you from third parties,
            { space }including but not limited to Source Partners (as defined in our
            { space }<Link to="/legal/tos">Terms of Service</Link>),
            { space }identity verification services, mailing list providers and
            { space }publicly available sources.
          </p>
          <p><strong>Use of Information</strong></p>
          <p>We may use information about you for various purposes, including to:</p>
          <ul className="info-text">
            <li>Provide, maintain and improve our Services;</li>
            <li>
              Provide and deliver the images and other products and services you request,
              { space }process transactions and send you related information,
              { space }including confirmations and receipts;
            </li>
            <li>
              Send you technical notices, updates, security alerts and
              { space }support and administrative messages;
            </li>
            <li>Respond to your comments, questions and requests and provide customer service;</li>
            <li>
              Communicate with you about products, services, offers, promotions,
              { space }rewards, and events offered by Dendrite, Source Partners and others,
              { space }and provide news and information we think will be of interest to you;
            </li>
            <li>
              Monitor and analyze trends, usage and activities in
              { space }connection with our Services;
            </li>
            <li>
              Personalize and improve the Services and provide advertisements,
              { space }content or features that match user profiles or interests;
            </li>
            <li>Process and deliver contest and sweepstakes entries and rewards;</li>
            <li>
              Link or combine with information we get from others to help understand
              { space }your needs and provide you with better service; and
            </li>
            <li>Carry out any other purpose for which the information was collected.</li>
          </ul>
          <p>
            Dendrite is based in the United States and the information we collect is
            { space }governed by U.S. law. By accessing or using the Services or
            { space }otherwise providing information to us, you consent to the processing and
            { space }transfer of information in and to the U.S. and other countries.
          </p>
          <p><strong>Sharing of Information</strong></p>
          <p>
            We may share your name, contact information, and other information about you
            { space }with Source Partners in connection with purchases or
            { space }other transactions you conduct that are related to
            { space }the Source Partner&rsquo;s content. Such information may be
            { space }shared not only to facilitate the transaction, but also for
            { space }the Source Partner&rsquo;s own promotional or other purposes.
            { space }If you do not wish to have your information shared with
            { space }a Source Partner for the Source Partner&rsquo;s own use,
            { space }do not conduct transactions through the Services.
            { space }Please review the applicable Source Partners&rsquo; privacy policies
            { space }before conducting transactions through the Services.
          </p>
          <p>
            In addition, we may share information about you as follows or as otherwise
            { space }described in this Privacy Policy:
          </p>
          <ul className="info-text">
            <li>
              With vendors, consultants and other service providers who need access to
              { space }such information to carry out work on our behalf;</li>
              { space }
             <li>
              In response to a request for information if we believe disclosure is
              { space }in accordance with any applicable law, regulation or legal process,
              { space }or as otherwise required by any applicable law, rule or regulation;
            </li>
            <li>
              If we believe your actions are inconsistent with the spirit or language
              { space }of your agreements with us or our policies, or to protect
              { space }the rights, property and safety of Dendrite, Source Partners or others;
            </li>
            <li>
              In connection with, or during negotiations of, any merger,
              { space }sale of company assets, financing or acquisition of all or a
              { space }portion of our business to another company; and
            </li>
            <li>
              With other users and the general public, where the information is
              { space }posted to a forum, user profile, or other publicly accessible
              { space }area or feature of the Services;
            </li>
            <li>
              With your consent or at your direction, including if we notify
              { space }you through our Services that the information you provide will be shared
              { space }in a particular manner and you provide such information.
            </li>
          </ul>
          <p>
            We may also share aggregated or de-identified information
            { space }that cannot reasonably be used to identify you.
          </p>
          <p><strong>Social Sharing Features</strong></p>
          <p>
            The Services may offer social sharing features and other integrated tools,
            { space }which let you share actions you take on our Services with other media,
            { space }and vice versa. The use of such features enables the sharing of information
            { space }with your friends or the public, depending on the settings you establish
            { space }with the entity that provides the social sharing feature.
            { space }For more information about the purpose and scope of data collection and
            { space }processing in connection with social sharing features, please visit
            { space }the privacy policies of the entities that provide these features.
          </p>
          <p><strong>Advertising and Analytics Services Provided by Others</strong></p>
          <p>
            We may allow others to serve advertisements on our behalf across the Internet
            { space }and to provide analytics services. These entities may use cookies,
            { space }web beacons and other technologies to collect information about your use
            { space }of the Services and other websites, including your IP address, web browser,
            { space }pages viewed, time spent on pages, links clicked and conversion information.
            { space }This information may be used by Dendrite and others to, among other things,
            { space }analyze and track data, determine the popularity of certain content,
            { space }deliver advertising and content targeted to your interests on our Services
            { space }and other websites and better understand your online activity.
          </p>
          <p><strong>Security</strong></p>
          <p>
            Dendrite takes reasonable measures to help protect information about you from loss,
            { space }theft, misuse and unauthorized access, disclosure, alteration and destruction.
            { space }If you have any concerns about the security if your information or account,
            { space }or to report any suspicious activity, please email us at
            { space }<a href="mailto:security@haystack.im">security@haystack.im</a>.
          </p>
          <p><strong>Your Choices</strong></p>
          <p><strong>Account Information</strong></p>
          <p>
            You may update, correct or delete information about you at any time
            { space }by logging into your online account or emailing us at
            { space }<a href="mailto:contact@haystack.im">contact@haystack.im</a>.
            { space }If you wish to delete or deactivate your account, please email us at
            { space }<a href="mailto:contact@haystack.im">contact@haystack.im</a>,
            { space }but note that we may retain certain information as required by law
            { space }or for legitimate business purposes. We may also retain cached or archived
            { space }copies of information about you for a certain period of time.
          </p>
          <p><strong>Cookies</strong></p>
          <p>
            Most web browsers are set to accept cookies by default.
            { space }If you prefer, you can usually choose to set your browser to remove
            { space }or reject browser cookies. Please note that if you choose to remove
            { space }or reject cookies, this could affect the availability and functionality
            { space }of our Services.
          </p>
          <p><strong>Promotional Communications</strong></p>
          <p>
            You may opt out of receiving promotional emails from Dendrite by following
            { space }the instructions in those emails. If you opt out, we may still send
            { space }you non-promotional communications, such as those about your account
            { space }or our ongoing business relations.
          </p>
          <p><strong>Your California Privacy Rights</strong></p>
          <p>
            California law permits residents of California to request certain details
            { space }about how their information is shared with third parties
            { space }for direct marketing purposes. If you are a California resident
            { space }and would like to make such a request, please contact us at
            { space }<a href="mailto:contact@haystack.im">contact@haystack.im</a>.
          </p>
          <p><strong>Contact Us</strong></p>
          <p>
            If you have any questions about this Privacy Policy,
            please contact us at:
            { space }<a href="mailto:contact@haystack.im">contact@haystack.im</a>.
          </p>
        </div>
      </section>
    )
  }
}
