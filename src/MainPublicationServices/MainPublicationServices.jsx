import Leftsidebar from "../assets/Leftsidebar";
import "./MainPublicationServices.scss";
import Sidebar from "./PublicationServicesSidebar";
import { Link } from "react-router-dom";
const MainPublicationServices = () => {
  return (
    <div className="main-publication-wrapper">
      <Sidebar />

      <div className="main-publication-container">
        {/* Left Side – Quick Links */}
           <aside className="left-sidebar2">
            <ul>
  <li>
    <Link to="/publication-services/conference-paper-publication-services">
      Conference Paper Publication Services
    </Link>
  </li>
  <li>
    <Link to="/publication-services/SCIJournal">
      SCI Journal Publication
    </Link>
  </li>
  <li>
    <Link to="/publication-services/review-article-publication">
      Review Article Publication
    </Link>
  </li>
  <li>
    <Link to="/publication-services/ugc-care-journal-publication-services">
      UGC CARE Journal Publication Services
    </Link>
  </li>
  <li>
    <Link to="/publication-services/book-isbn-publication-support">
      Book ISBN Publication Support
    </Link>
  </li>
  <li>
   <Link to="/publication-services/scopus-journal-publication-services">
      Scopus Journal Publication Services
    </Link>
  </li>
</ul>
        
      </aside>

       
        {/* Main Content */}
        <div className="main-publication-main">
          <h1 className="Publicationh1">Publication Services</h1>
          <h2>Research Journals, Review Articles, Conference Papers & Book Publication Services</h2>
          <p className="main-confidential-note">
            🔒 Excellent and Confidential Support – From Writing to Publication
          </p>
          <p>
            At Narpavi Research Institute, we deliver comprehensive academic publication support for PhD scholars, researchers, and academic professionals and students. Our services cover journal articles, conference papers, review articles, and academic books, with strict confidentiality and guaranteed quality.
          </p>

          <section id="journals">
            <h2>📝 Research Journal Publication Support</h2>
            <p>
              Get your papers published in SCI, Scopus, IEEE, and UGC-listed journals with domain-specific writing, plagiarism control, journal formatting, and publication support.
            </p>
          </section>
          <p>
  The
  {" "}
  <Link
    to="/publication-services/scopus-journal-publication-services"
    className="internal-link highlight-link"
  >
    Scopus Journal Publication Services
  </Link>
  {" "}
  focus on helping authors publish in reputed Scopus-indexed journals across all
  quartiles. Our experts provide manuscript refinement, plagiarism correction,
  journal targeting, peer-review response assistance, and fast-track options to
  improve acceptance success.
</p>


          <section id="reviews">
            <h2>📘 Review Article Publication Services</h2>
            <p>
              We create well-structured, high-quality literature reviews with deep critical analysis to publish in SCI and Scopus-indexed journals.
              <p>
  The
  {" "}
  <Link
    to="/publication-services/review-article-publication"
    className="internal-link highlight-link"
  >
    Review Article Publication
  </Link>
  {" "}
  service is designed for scholars aiming to synthesize existing research into
  high-citation review papers. We support narrative reviews, systematic reviews,
  and meta-analyses with structured literature mapping, critical analysis, and
  journal-ready formatting for SCI and Scopus indexed journals.
</p>

            </p>
          </section>

          <section id="conference">
            <h2>📄 Conference Paper Publication Support</h2>
            <p>
              Technical and research-focused IEEE, Springer, Elsevier and national conference paper writing with formatting and submission and complete publication support for proceedings.<p>
  Our
  {" "}
  <Link
    to="/publication-services/conference-paper-publication-services"
    className="internal-link highlight-link"
  >
    Conference Paper Publication Services
  </Link>
  {" "}
  support researchers and students in preparing high-quality papers for IEEE,
  Springer, Elsevier, and reputed national and international conferences. We assist
  with technical writing, plagiarism control, template-based formatting, and complete
  submission support to ensure acceptance in conference proceedings and indexed
  platforms.
</p>
<p>
  Through our
  {" "}
  <Link
    to="/publication-services/SCIJournal"
    className="internal-link highlight-link"
  >
    SCI Journal Publication
  </Link>
  {" "}
  services, we help researchers publish in high-impact Science Citation Index journals.
  Our support includes manuscript writing, technical editing, plagiarism reduction,
  journal selection, peer-review response handling, and resubmission assistance,
  ensuring compliance with strict SCI editorial standards.
</p>

            </p>
          </section>

          <section id="books">
            <h2>📚 Book Writing & ISBN Publication</h2>
            <p>
              Convert your research into a professionally published book with ISBN, typesetting, cover design, and publication on academic platforms.<p>
  With our
  {" "}
  <Link
    to="/publication-services/book-isbn-publication-support"
    className="internal-link highlight-link"
  >
    Book ISBN Publication Support
  </Link>
  {" "}
  services, researchers can transform theses, monographs, and academic content into
  professionally published books. We handle ISBN allocation, metadata preparation,
  formatting, catalog registration, and publication support for both print and
  digital books.
</p>


            </p>

            <p>
  Our
  {" "}
  <Link
    to="/publication-services/ugc-care-journal-publication-services"
    className="internal-link highlight-link"
  >
    UGC CARE Journal Publication Services
  </Link>
  {" "}
  assist academicians in meeting mandatory publication requirements for promotions,
  PhD evaluations, and academic audits. We ensure verified journal selection from
  the UGC CARE list, plagiarism compliance, formatting accuracy, and smooth
  submission with revision support.
</p>
          </section>

          <h2>📊 Comparison Table – Choose the Right Format for Your Research</h2>
          <table className="main-publication-table">
            <thead>
              <tr>
                <th>Feature / Type</th>
                <th>Journal Article</th>
                <th>Review Article</th>
                <th>Conference Paper</th>
                <th>Academic Book</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Target Indexing</td>
                <td>SCI / Scopus / UGC</td>
                <td>SCI / Scopus</td>
                <td>IEEE / Springer</td>
                <td>ISBN Registered</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>6–12 pages</td>
                <td>12–25 pages</td>
                <td>4–6 pages</td>
                <td>50+ pages</td>
              </tr>
              <tr>
                <td>Review Type</td>
                <td>Peer-Reviewed</td>
                <td>Peer-Reviewed</td>
                <td>Reviewer Panel</td>
                <td>Publisher Evaluation</td>
              </tr>
              <tr>
                <td>Publication Time</td>
                <td>1–6 months</td>
                <td>2–6 months</td>
                <td>1–2 months</td>
                <td>3–9 months</td>
              </tr>
              <tr>
                <td>Ideal For</td>
                <td>Original research</td>
                <td>Topic overviews</td>
                <td>Early-stage research</td>
                <td>Comprehensive research</td>
              </tr>
            </tbody>
          </table>
<p>
  The
  {" "}
  <Link
    to="/publication-services/scopus-journal-publication-services"
    className="internal-link highlight-link"
  >
    Scopus Journal Publication Services
  </Link>
  {" "}
  focus on helping authors publish in reputed Scopus-indexed journals across all
  quartiles. Our experts provide manuscript refinement, plagiarism correction,
  journal targeting, peer-review response assistance, and fast-track options to
  improve acceptance success.
</p>

          <section id="process">
            <h2>End-to-End Publication Process – Expert Support from Start to Finish</h2>
            <p>
              At Narpavi, our research publication workflow is structured to ensure a smooth and professional journey from draft to publication. It begins with a detailed consultation where we evaluate your research topic, identify suitable publication targets (SCI, Scopus, UGC, IEEE, or ISBN-based), and outline a customized strategy.
            </p>
            <p>
              Once the manuscript type is chosen—journal article, review paper, conference paper, or book—our domain experts begin the writing process. We ensure plagiarism-free content, apply precise formatting (APA, IEEE, or journal-specific), and conduct multiple internal reviews.
            </p>
            <p>
              After formatting, we handle journal/publisher selection, submit the paper on your behalf, and monitor the peer review or editorial review process. We also assist in revisions, rebuttals, and proof corrections, leading all the way to acceptance and final publication.
            </p>

            <h2>🔁 Your Publication Journey – Seamless, Transparent, and Expert-Driven</h2>
            <ul>
              <li>Start by sharing your topic or draft</li>
              <li>Receive expert evaluation and journal targeting suggestions</li>
              <li>Our team begins research paper or book drafting</li>
              <li>You review and approve content at each phase</li>
              <li>We format and submit to the appropriate indexed journal or publisher</li>
              <li>If required, we handle peer review responses or reviewer rebuttals</li>
              <li>Your work is published—professionally and confidently</li>
            </ul>
            <p>
              Each stage in this process is optimized for academic publishing success, with built-in SEO, academic quality checks, and referencing accuracy.
            </p>
          </section>

          <h2>🌟 Trusted Partner for Academic Excellence in Research Publication</h2>
          <ul>
            <li>📌 100% Confidentiality and Plagiarism-Free Content</li>
            <li>📌 Experienced Writers & Editors Across All Research Domains</li>
            <li>📌 Accurate Formatting for SCI, Scopus, IEEE, and UGC Standards</li>
            <li>📌 Rapid Turnaround Without Compromising Quality</li>
            <li>📌 Full Support from Initial Draft to Final Acceptance Letter</li>
            <li>📌 High Success Rate in Peer-Reviewed Journal Publications</li>
          </ul>
        </div>


        {/* Right Side – Keywords */}
        <div className="right-sidebar1">
               <Leftsidebar/>
          <h3>Keywords</h3>
          <ul>
            <li>Research paper publication</li>
            <li>SCI journal writing service</li>
            <li>Scopus paper help</li>
            <li>IEEE conference paper writing</li>
            <li>UGC journal publication</li>
            <li>Review article support</li>
            <li>Academic book writing</li>
            <li>ISBN book publishing service</li>
            <li>PhD publication assistance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPublicationServices;
