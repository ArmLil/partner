import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom' // eslint-disable-line no-unused-vars
import LegalNav from '../components/legal-nav' // eslint-disable-line no-unused-vars

export default class TermsofService extends Component {
  render() {
    const space = ' '
    return (
      <section className="info-page">
        <LegalNav isActive={'tos'} />

        <div className="info-wrapper terms">
            <h2 className="center"> Terms of Service for Haystack.im Users</h2>
            <p><strong>Haystack.im User Terms of Service</strong></p>
            <p><strong>Last Updated: </strong><strong>January 25, 2016</strong></p><br></br>
            <p>
              PLEASE READ THESE TERMS OF SERVICE (&ldquo;<strong>TERMS</strong>&rdquo;) CAREFULLY.
              { space }BY INDICATING YOUR ACCEPTANCE OF THESE TERMS
              { space }(SUCH AS BY CHECKING A BOX OR CLICKING A BUTTON),
              { space }REGISTERING FOR A USER ACCOUNT, OR ACCESSING OR USING THE HAYSTACK WEBSITE
              { space }OR OTHER ONLINE PRODUCTS AND SERVICES
              { space }(THE &ldquo;<strong>SERVICES</strong>&rdquo;),
              { space }YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS,
              { space }DO NOT ACCESS OR USE THE SERVICES.
            </p>
            <p>
              <strong>
                THESE TERMS REQUIRE YOU TO ARBITRATE DISPUTES WITH US,
                { space }AND LIMITS OUR LIABILITY AND THE MANNER IN WHICH YOU CAN
                { space }SEEK RELIEF FROM US.
              </strong>
            </p>
            <p>The Services are owned and operated by Dendrite Corp.,
              { space }a Delaware corporation
              { space }(&ldquo;<strong>Dendrite</strong>,&rdquo; &ldquo;<strong>we</strong>&rdquo;
              { space }or &ldquo;<strong>us</strong>&rdquo;).
              { space }These Terms do not alter the terms of any other agreement
              { space }you may have entered into with Dendrite (such as the Source Partner
              { space }Addendum for users to become Source Partners of Haystack).
              { space }If you are using the Services on behalf of any entity,
              { space }you represent and warrant that you are authorized to accept these
              { space }Terms on such entity's behalf, and that such entity agrees to indemnify
              { space }you and Dendrite for violations of these Terms.</p>
            <p>Dendrite reserves the right to change or modify these Terms,
              { space }or any policy or guideline of the Services, at any time and
              { space }in our sole discretion. If we make changes or modifications to these Terms,
              { space }we will provide you with notice of such changes, such as by sending an email,
              { space }providing notice through the Services or updating the
              { space }&ldquo;Last Updated&rdquo;date at the top of these Terms.
              { space }Your continued use of the Services following the posting of changes or
              { space }modifications will confirm your acceptance of such changes or modifications.
              { space }Therefore, you should frequently review these Terms and applicable policies
              { space }to understand the terms and conditions that apply
              { space }to your use of the Services.If you do not agree to the amended Terms,
              { space }you must stop using the Services.</p>
            <p>If you have any questions regarding the Services, please contact us by emailing
              { space }<a href="mailto:contact@haystack.im">contact@haystack.im</a>.</p>
            <p><strong>Privacy</strong></p>
            <p>Please refer to our <Link to="/legal/privacy">Privacy Policy</Link>
              { space }for information about how we collect,
              { space }use and disclose information about our users.</p>
            <p>Dendrite is based in the United States and the information we collect
              { space }is governed by U.S. law. By accessing or using the Services or
              { space }otherwise providing information to us, you consent to the processing
              { space }and transfer of information in and to the U.S. and other countries.</p>
            <p>The Services include links to websites of third parties who have partnered
              { space }with us to make their inventory of images available for viewing
              { space }through the Services (such third parties,
              { space }&ldquo;<strong>Source Partners</strong>&rdquo;).
              { space }Our Privacy Policy does not apply to information that may be collected
              { space }in connection with your visit to Source Partners&rsquo; websites and
              { space }interactions with Source Partners. Please review the privacy policy of
              { space }such websites for information on the Source Partners&rsquo;
              { space }privacy practices.</p>
            <p><strong>Eligibility</strong></p>
            <p>The Services are not targeted towards, nor intended for use by,
              { space }anyone under the age of 13.If you are under the age of 18,
              { space }or age of legal majority under applicable law, you may only
              { space }use the Services under the supervision of a parent or legal
              { space }guardian who agrees to be bound by these Terms. By using the Services,
              { space }you represent and warrant that (a) you have not been previously suspended
              { space }or removed from the Services and (b) you have full power and authority
              { space }to enter into this agreement and that, in doing so, you will not violate
              { space }any other agreement to which you are a party.</p>
            <p><strong>Registration and Account</strong></p>
            <p>In order to access certain areas and features of the Services,
              { space }you will need to register for an account. You agree to
              { space }(a)&nbsp;provide accurate, truthful, current and complete information when
              { space }creating an account; (b)&nbsp;maintain and promptly update your account
              { space }information; (c)&nbsp;maintain the security of your account by not sharing
              { space }your password with others and restricting access to your account and your
              { space }computer or mobile device; (d)&nbsp;promptly notify us if you discover or
              { space }otherwise suspect any security breaches related to the Services; and
              { space }(e)&nbsp;take responsibility for all activities that occur under your account
              { space }and accept all risks of unauthorized access.</p>
            <p><strong>Stock Images</strong></p>
            <p>The Services make images originating from Source Partners (such as stock photography)
              { space }available for you to view, license, purchase or otherwise access
              { space }(&ldquo;<strong>Stock Images</strong>&rdquo;). In these Terms,
              { space }the word &ldquo;Services&rdquo; does not include the
              { space }&ldquo;Stock Images,&rdquo; but otherwise includes all other images,
              { space }text, content, logos, and other materials included in or made available
              { space }through the Services. A Stock Image may be either (a) a preview image,
              { space }such as a thumbnail, watermarked image, low-resolution version,
              { space }or other sample that is displayed to you through the Services
              (&ldquo;<strong>Preview Images</strong>&rdquo;) or (b) a version of a Preview Image
              { space }that you obtain either from Dendrite through the Services or directly
              { space }from a Source Partner under a separate license presented at the time
              { space }you obtain it (&ldquo;<strong>Licensed Images</strong>&rdquo;).
              { space }In these Terms, this separate license is referred to as
              { space }a &ldquo;<strong>Use License</strong>.&rdquo; Licensed Images are often
              { space }higher resolution, non-preview versions of a Preview Image, and more
              { space }suitable for commercial or professional uses, but in some cases there
              { space }may be no difference between the Licensed Image and the Preview Image.</p>
            <p>Unless otherwise indicated, the Services and Stock Images are
              { space }the proprietary property of Dendrite or our licensors
              { space }or users and are protected by U.S. and international copyright laws.</p>
            <p>Except for the licenses specifically granted in these Terms,
              { space }nothing in these Terms shall be construed as conferring any
              { space }license to intellectual property rights, whether by estoppel,
              { space }implication or otherwise.</p>
            <p><strong>License to Services and Preview Images</strong></p>
            <p>You are granted a nonexclusive, nontransferable, non-sublicensable license
              { space }to access and use the Services, and to view, download and
              { space }use the Preview Images as they are made available for your
              { space }viewing on the Website, solely for your internal noncommercial,
              { space }research, or personal uses. However, such license is subject to
              { space }these Terms and does not include (and you agree not to do) any of
              { space }the following, except to the extent permitted under applicable fair
              { space }use or fair dealing laws: (a) any resale of the Services or Preview Images;
              { space }(b) the collection or use of any Stock Image listings, descriptions, prices,
              { space }or related data; (c) the distribution, public performance or public display
              { space }of any aspect of the Services or Preview Images; (d) modifying or
              { space }otherwise making any derivative uses of the Services or Preview Images;
              { space }(e) use of any data mining, robots or similar data gathering
              { space }or extraction methods; (f) downloading (other than automatic temporary
              { space }page caching in a web browser) of any portion of the Services,
              { space }including any files or information contained therein; or
              { space }(g) any use of the Services or Preview Images other than for
              { space }their intended purposes. Any use of the Services or Preview Images
              { space }other than as specifically authorized herein, without the prior
              { space }written permission of Dendrite, is strictly prohibited and will
              { space }terminate the license granted herein. Such unauthorized use may also
              { space }violate applicable laws, including copyright and trademark laws and
              { space }applicable communications regulations and statutes. This license is
              { space }revocable at any time.</p>
            <p><strong>Licensed Images</strong></p>
            <p>The Services may make Licensed Images available for you to access
              { space }by acquiring a Use License for the Licensed Image through
              { space }the Services or from a Source Partner. Some Use Licenses are
              { space }available for purchase, while other Use Licenses are available
              { space }at no charge. The terms of a Use License are made available to
              { space }you while shopping for the Licensed Image, when purchasing
              { space }the Use License, and/or through other means. By purchasing
              { space }or otherwise acquiring a Use License (whether from Dendrite
              { space }or a Source Partner), you agree to the terms of the Use License.
              { space }Except as specifically set forth in the terms of the Use License
              { space }for a Licensed Image, you may not (a) distribute, modify, perform,
              { space }display, sell, rent, or otherwise use a Licensed Image, or (b) transfer,
              { space }sell or sublicense your Use License to a third party. Dendrite
              { space }is not a party to the Use License unless otherwise stated in the
              { space }terms of the Use License.</p>
            <p><strong>Trademarks</strong></p>
            <p>Haystack, the Haystack logos, and any other Dendrite product or
              { space }service names or slogans are trademarks of Dendrite, and may
              { space }not be copied, imitated or used, in whole or in part, without
              { space }the prior written permission of Dendrite or the applicable trademark holder.
              { space }You may not use any metatags or any other &ldquo;hidden text&rdquo;
              { space }utilizing &ldquo;Haystack&rdquo; or any other name, trademark or
              { space }product or service name of Dendrite without our prior written permission.
              { space }In addition, the look and feel of the Services, including all page headers,
              { space }custom graphics, button icons and scripts, is the service mark,
              { space }trademark and/or trade dress of Dendrite and may not be copied,
              { space }imitated or used, in whole or in part, without our prior written permission.
              { space }All other trademarks, registered trademarks, product names and company names
              { space }or logos mentioned or displayed in the Services are the property of their
              { space }respective owners. Reference to any Source Partner, Stock Images, or other
              { space }products, services, processes or other information, by trade name, trademark,
              { space }supplier or otherwise, does not constitute or imply endorsement, sponsorship
              { space }or recommendation thereof by us.</p>
            <p><strong>Third Party Websites</strong></p>
            <p>You may not use, frame or utilize framing techniques to enclose any
              { space }Dendrite trademark, logo or other proprietary information,
              { space }including the images found on the Services, the content of any
              { space }text or the layout/design of any page or form contained on
              { space }a web page of the Services without Dendrite&rsquo;s written consent.</p>
            <p>Dendrite makes no claim or representation regarding,
              { space }and accepts no responsibility for, the quality, content,
              { space }nature or reliability of Source Partner or other third-party
              { space }websites accessible via hyperlink or websites linking to the Services.
              { space }Such sites are not under the control of Dendrite and Dendrite is not
              { space }responsible for such sites. Dendrite, our Source Partners, and other
              { space }users may provide these links as a convenience to you, but the inclusion
              { space }of any link does not imply affiliation, endorsement or adoption by Dendrite
              { space }of any site or any information contained therein. When you leave
              { space }the Services, you should be aware that our terms and policies no longer
              { space }govern, and the policies of those third party sites will now apply.
              { space }You should review the applicable terms and policies, including privacy
              { space }and data gathering practices, of any site to which you navigate
              { space }from the Services.</p>
            <p><strong>Third Party Content and Businesses</strong></p>
            <p>Third parties (including Source Partners) may provide and offer Stock Images,
              { space }interact with users, and provide other offerings through the Services.
              { space }Many of these third parties enable you to purchase Stock Images from them.
              { space }We are not responsible for, and we do not provide any warranties regarding,
              { space }such third parties or their offerings. Without limiting the foregoing,
              { space }you acknowledge and agree that we are not responsible or liable in any
              { space }manner for the activities, content, products, services or other offerings
              { space }of such third parties. Users purchase and use such third party offerings
              { space }at their own risk, and you should carefully review the terms, conditions
              { space }and privacy policies of such third parties.</p>
            <p><strong>Third-Party Advertisements and Promotions</strong></p>
            <p>Dendrite may run advertisements and promotions from third parties
              { space }(like Source Partners) through the Services or may otherwise
              { space }provide information about or links to third-party products
              { space }or services through the Services. Your business dealings
              { space }or correspondence with, or participation in promotions of,
              { space }such third parties, and any terms, conditions, warranties
              { space }or representations associated with such dealings or promotions
              { space }are solely between you and such third party. Dendrite is not
              { space }responsible or liable for any loss or damage of any sort incurred
              { space }as the result of such dealings or promotions or as the result
              { space }of the presence of non-Dendrite advertisements or other third
              { space }party information in the Services.</p>
            <p><strong>User Content and License</strong></p>
            <p>The Services include interactive features and areas that enable you
              { space }and other users to create, post, send and store content,
              { space }messages, materials, data, information, text, images and
              { space }other items or materials on the Services (collectively,
              { space }&ldquo;<strong>User Content</strong>&rdquo;).
              { space }You are solely responsible for your use of such interactive
              { space }areas and agree that you use them at your own risk.
              { space }You further agree not to post, upload to, send, distribute,
              { space }store, create or otherwise publish through the Services
              { space }any of the following:</p>
            <p>&bull; User Content that is unlawful, libelous,
              { space }defamatory, obscene, pornographic, indecent, lewd, suggestive, harassing,
              { space }threatening, invasive of privacy or publicity rights, abusive, inflammatory,
              { space }fraudulent or otherwise objectionable;</p>
            <p>&bull; User Content that would constitute, encourage or
              { space }provide instructions for a criminal offense, violate the rights of any party,
              { space }or that would otherwise create liability or violate any local, state,
              { space }national or international law, including without limitation the FTC Rules
              { space }regarding endorsements;</p>
            <p>&bull; User Content that may infringe any copyright,
              { space }trademark, trade secret or other intellectual or proprietary
              { space }right of any party;</p>
            <p>&bull; User Content that impersonates any person or entity
              { space }or otherwise misrepresents your affiliation with a person or entity;</p>
            <p>&bull; Unsolicited promotions, political campaigning, advertising or
              { space }solicitations;</p>
            <p>&bull; Viruses, corrupted data or other harmful,
              { space }disruptive or destructive files; or</p>
            <p>&bull; User Content that, in the sole judgment
              { space }of Dendrite, is objectionable or which restricts or inhibits any other
              { space }person from using or enjoying the Services, or which may expose
              { space }Dendrite or our users to any harm or liability of any type.</p>
            <p>The foregoing rules do not create any private right of action on the part
              { space }of any third party or any reasonable expectation or promise that
              { space }the Services will not contain any User Content that is prohibited by such
              { space }rules. Dendrite takes no responsibility and assumes no liability for any
              { space }User Content posted, stored or uploaded by you or any third party,
              { space }or for any loss or damage thereto, or for any user conduct, nor
              { space }is Dendrite liable for any mistakes, defamation, slander, libel,
              { space }omissions, falsehoods, obscenity, pornography or profanity you may encounter.
              { space }As a provider of interactive services, Dendrite is not liable for any
              { space }statements, representations or content provided by our users through
              { space }the Services. Although Dendrite has no obligation to screen,
              { space }edit or monitor User Content, Dendrite reserves the right, and
              { space }has absolute discretion, to remove, screen or edit any User Content
              { space }posted or stored on the Services at any time, for any reason and
              { space }without notice, and you are solely responsible for creating backup
              { space }copies of and replacing any User Content you post or store on
              { space }the Services at your sole cost and expense.&nbsp;</p>
            <p>You agree that we may use the User Content you post to the Services
              { space }for the limited purpose of providing and improving the Services.
              { space }You represent and warrant that (a)&nbsp;you own and
              { space }control all of the rights to the User Content that you post
              { space }or you otherwise have the right to post such User Content to the Services;
              { space }(b)&nbsp;the User Content is accurate and not misleading; and
              { space }(c)&nbsp;use and posting of the User Content you
              { space }supply does not violate these Terms and will not violate any rights of
              { space }or cause injury to any person or entity.</p>
            <p><strong>User Conduct</strong></p>
            <p>You are solely responsible for your conduct while using the Services,
              { space }and you agree that you will not do any of the following in connection
              { space }with the Services or our users:</p>
            <p>&bull; Use the Services in any manner that could interfere with,
              { space }disrupt, negatively affect or inhibit other users from fully
              { space }enjoying the Services or that could damage, disable, overburden
              { space }or impair the functioning of the Services in any manner;</p>
            <p>&bull; Use any robot, spider, crawler, scraper or other
              { space }automated means or interface not provided by us to access
              { space }the Services or Stock Images, or to extract data or Stock Images;</p>
            <p>&bull; Reverse engineer any aspect of the Services or do anything that
              { space }might discover source code or bypass or circumvent measures employed
              { space }to prevent or limit access to any area, content (including Stock Images)
              { space }or code of the Services (except as otherwise permitted by law);</p>
            <p>&bull; Attempt to access any service or area of the Services that
              { space }you are not authorized to access;</p>
            <p>&bull; Attempt to indicate in any manner that you have a relationship
              { space }with us or that we have endorsed you or any products
              { space }or services for any purpose;</p>
            <p>&bull; Develop any third-party applications that interact with the Services
              { space }without our prior written consent;</p>
            <p>&bull; Impersonate or post on behalf or any person or entity or
              { space }otherwise misrepresent your affiliation with a person or entity;</p>
            <p>&bull; Stalk, intimidate, threaten, or otherwise harass or cause
              { space }discomfort to other users;</p>
            <p>&bull; Send any unsolicited commercial messages;</p>
            <p>&bull; Use the Services for any illegal or unauthorized purpose or
              { space }engage in, encourage, or promote any illegal activity,
              { space }or any activity that violates these Terms; or</p>
            <p>&bull; Circumvent or attempt to circumvent any content filtering
            { space }techniques, digital rights management technology,
            { space }security measures or other features.</p>
            <p><strong>Feedback</strong></p>
            <p>You hereby grant to Dendrite a nonexclusive, royalty-free,
              { space }perpetual, irrevocable and fully sublicensable and
              { space }transferable right to use any questions, comments,
              { space }feedback, suggestions, recommendations, ideas or
              { space }other information provided by you to Dendrite regarding
              { space }Dendrite or the Services (&ldquo;<strong>Feedback</strong>&rdquo;),
              { space }in any manner and for any purposes whatsoever without attribution
              { space }or compensation of any kind. The foregoing license will
              { space }survive the term of these Terms.</p>
            <p><strong>Disclaimers</strong></p>
            <p>THE SERVICES AND STOCK IMAGES ARE PROVIDED ON AN &ldquo;AS IS&rdquo;
              { space }BASIS WITHOUT WARRANTIES OF ANY KIND. DENDRITE DISCLAIMS ALL
              { space }OTHER WARRANTIES,INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
              { space }FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT,
              { space }AS TO THE SERVICES AND STOCK IMAGES, INCLUDING THE INFORMATION,
              { space }CONTENT AND MATERIALS CONTAINED THEREIN. WITHOUT LIMITING
              { space }THE FOREGOING, DENDRITE DOES NOT REPRESENT OR WARRANT THAT
              { space }THE SERVICES OR STOCK IMAGES ARE ACCURATE, COMPLETE, RELIABLE,
              { space }CURRENT OR ERROR-FREE.</p>
            <p><strong>Indemnification</strong></p>
            <p>You agree to indemnify, hold harmless and, at our option, defend Dendrite,
              { space }our independent contractors, service providers and consultants,
              { space }and the directors, officers, employees and agents of each of the
              { space }foregoing (collectively,
              { space }the &ldquo;<strong>Released Entities</strong>&rdquo;),
              { space }from and against any claims, damages, costs, liabilities and expenses
              { space }(including reasonable attorneys' fees) arising out of or related to
              { space }(a) your use of the Services or Stock Images;
              { space }(b) any User Content you provide, including any claims that your
              { space }User Content infringes the intellectual property or other rights
              { space }of a third party; (c) your violation of these Terms; (d) your
              { space }violation of any rights of a third party; or (e) your conduct in
              { space }connection with the Services or a Source Partner&rsquo;s website.</p>
            <p><strong>Limitation of Liability</strong></p>
            <p>IN NO EVENT SHALL ANY RELEASED ENTITY BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
              { space }INDIRECT OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF USE,
              { space }LOSS OF PROFITS OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT,
              { space }TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE) OR OTHERWISE,
              { space }ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR INABILITY
              { space }TO USE THE SERVICES OR STOCK IMAGES, INCLUDING ANY DAMAGES CAUSED BY
              { space }OR RESULTING FROM RELIANCE ON ANY STOCK IMAGES OR INFORMATION OBTAINED
              { space }THROUGH THE SERVICES, OR THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS,
              { space }DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION
              { space }OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM
              { space }ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED
              { space }ACCESS TO DENDRITE&rsquo;S SYSTEMS.</p>
            <p>IN NO EVENT SHALL THE AGGREGATE LIABILITY OF THE RELEASED ENTITIES,
              { space }WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE,
              { space }WHETHER ACTIVE, PASSIVE OR IMPUTED), PRODUCT LIABILITY,
              { space }STRICT LIABILITY OR OTHER THEORY, ARISING OUT OF OR RELATING
              { space }TO THE USE OF OR INABILITY TO USE THE SERVICES OR STOCK IMAGES
              { space }OR TO THESE TERMS EXCEED ANY COMPENSATION YOU PAY
              { space }(INCLUDING REFERRAL FEES, IF YOU ARE A SOURCE PARTNER), IF ANY,
              { space }TO SUCH RELEASED PARTY IN CONNECTION WITH THE SERVICES
              { space }OR STOCK IMAGES DURING THE TWELVE (12) MONTHS BEFORE THE FIRST
              { space }EVENT GIVING RISE TO SUCH LIABILITY.</p>
            <p>SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY IN CONTRACTS
              { space }WITH CONSUMERS, SO SOME OR ALL OF THESE LIMITATIONS OF LIABILITY
              { space }MAY NOT APPLY TO YOU.</p>
            <p><strong>Applicable Law; Arbitration</strong></p>
            <p>These Terms are governed by and will be construed in accordance with
              { space }the laws of the State of New York, without reference to conflict
              { space }of laws provisions.</p>
            <p>
              <strong>PLEASE READ THE FOLLOWING PARAGRAPH CAREFULLY BECAUSE IT
                { space }REQUIRES YOU TO ARBITRATE DISPUTES WITH DENDRITE AND
                { space }LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM DENDRITE.
              </strong>
            </p>
            <p>You and Dendrite agree to arbitrate any dispute arising from these
              { space }Terms or your use of the Services or Stock Images, except that
              { space }you and Dendrite are not required to arbitrate any dispute in
              { space }which either party seeks equitable or other relief for the alleged
              { space }unlawful use of copyrights, trademarks, trade names, logos,
              { space }trade secrets, or patents. ARBITRATION PREVENTS YOU FROM SUING
              { space }IN COURT OR FROM HAVING A JURY TRIAL. You and Dendrite agree
              { space }that you will notify each other in writing of any dispute within
              { space }thirty (30) days of when it arises. You and Dendrite further agree:
              { space }(a) to attempt informal resolution prior to any demand for arbitration;
              { space }(b) that any arbitration will occur in New York, New York;
              { space }(c) that arbitration will be conducted confidentially by a single
              { space }arbitrator in accordance with the rules of JAMS; and (d) that
              { space }the state or federal courts in New York, New York have exclusive
              { space }jurisdiction over any appeals of an arbitration award and over
              { space }any suit between the parties not subject to arbitration.
              { space }The arbitrator will be entitled to award attorneys fees and
              { space }other reasonable costs and expenses of arbitration to
              { space }the prevailing party, and may allow discovery and other aspects
              { space }of arbitration proceedings to be conducted by telephone or
              { space }other cost effective means where practicable. Other than class
              { space }procedures and remedies discussed below, the arbitrator has
              { space }the authority to grant any remedy that would otherwise
              { space }be available in court. WHETHER THE DISPUTE IS HEARD IN ARBITRATION
              { space }OR IN COURT, YOU AND DENDRITE WILL NOT COMMENCE AGAINST THE OTHER
              { space }A CLASS ACTION, CLASS ARBITRATION OR OTHER REPRESENTATIVE ACTION
              { space }OR PROCEEDING.</p>
            <p><strong>Modifications to the Services</strong></p>
            <p>Dendrite reserves the right to modify or discontinue, temporarily
              { space }or permanently, the Services, or any features or portions thereof,
              { space }without prior notice. You agree that Dendrite will not be liable
              { space }for any modification, suspension or discontinuance of the Services,
              { space }or any part thereof.</p>
            <p><strong>Termination</strong></p>
            <p>Dendrite reserves the right, without notice and in our sole discretion,
              { space }to terminate your right to use the Services and to block or prevent your
              { space }future access to and use of the Services.</p>
            <p><strong>Waiver; Severability</strong></p>
            <p>Dendrite&rsquo;s failure to enforce any provision of these Terms shall not be
              { space }deemed a waiver of the right to later enforce such provision or
              { space }any other provision of these Terms. If any provision of these
              { space }Terms shall be deemed unlawful, void or for any reason unenforceable,
              { space }then that provision shall be deemed severable from these Terms and shall not
              { space }affect the validity and enforceability of any remaining provisions.</p>
            <p><strong>Third Party Beneficiaries</strong></p>
            <p>You agree that each Source Partner is a third party beneficiary of these Terms
              { space }solely to the extent necessary to enable such Source Partner to enforce
              { space }the provisions in these Terms regarding your access and use of the Stock
              { space }Images and related information and materials provided by such Source Partner
              { space }through the Services. Except for the foregoing, there are no third party
              { space }beneficiaries to these Terms.</p>
            <p><strong>Assignment</strong></p>
            <p>You may not assign these Terms, including by operation of law,
              { space }without the prior written consent of Dendrite, and your attempted
              { space }assignment without such consent will be void and have no effect.
              { space }Dendrite may assign these Terms to an affiliate or in connection
              { space }with a merger, reorganization, reincorporation, or sale of the business
              { space }or assets to which these Terms relate. Subject to the foregoing restriction
              { space }on your assignment, these Terms will be binding on and inure to the benefit
              { space }of you and Dendrite, and their respective successors and assigns.</p>
            <p><strong>Entire Agreement</strong></p>
            <p>These Terms contain the entire agreement and understanding between Dendrite and
              { space }you with respect to the subject matter thereof and supersedes all prior
              { space }agreements, negotiations, representations, and proposals, written and oral,
              { space }relating to such subject matter. However, in addition to these Terms,
              { space }you may have entered other agreements with Dendrite, and these Terms do not
              { space }alter the terms of any such other agreement you may have with Dendrite.</p>
        </div>
      </section>
    )
  }
}
