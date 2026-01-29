import React from "react";
import { Link } from "react-router-dom";
const services = [
  { href: "/service", label: "Our PhD Support Services in Chennai" },
  { href: "/review-article-writing", label: "Review Article Writing in Chennai" },
  { href: "/sci-journal-paper-writing", label: "SCI Journal Paper Writing in Chennai" },
  { href: "/scopus-journal-paper-writing", label: "Scopus Journal Paper Writing in Chennai" },
  { href: "/ieee-conference-paper-writing", label: "IEEE Conference Paper Writing in Chennai" },

  { href: "/publication-services", label: "Publication Services in Chennai" },
  { href: "/publication-services/conference-paper-publication-services", label: "Conference Paper Publication in Chennai" },
  { href: "/publication-services/SCIJournal", label: "SCI Journal Publication in Chennai" },
  { href: "/publication-services/scopus-journal-publication-services", label: "Scopus Journal Publication in Chennai" },
  { href: "/publication-services/review-article-publication", label: "Review Article Publication in Chennai" },
  { href: "/publication-services/ugc-care-journal-publication-services", label: "UGC Care Journal Publication in Chennai" },
  { href: "/publication-services/book-isbn-publication-support", label: "Book ISBN Publication Support in Chennai" },

  { href: "/research-proposal-services/how-to-write-research-proposal", label: "How to Write Research Proposal in Chennai" },
  { href: "/research-proposal-services/trending-research-topics", label: "Trending Research Topics in Chennai" },
  { href: "/research-proposal-services/research-proposal-for-funding", label: "Research Proposal For Funding in Chennai" },
  { href: "/research-proposal-services/engineering-research-proposal-guide", label: "Engineering Research Proposal Guide in Chennai" },

  { href: "/scopus-journal-paper-writing/scopus-services", label: "Scopus Services in Chennai" },

  { href: "/service/ieee-project-center-in-chennai", label: "IEEE Project Centers in Chennai" },
  { href: "/service/matlab-project-center-in-chennai", label: "Matlab Project Centers in Chennai" },
  { href: "/service/ns2-ns3-project-center-in-chennai", label: "NS2 NS3 Project Centers in Chennai" },
  { href: "/service/phd-project-center-in-chennai", label: "PhD Project Centers in Chennai" },
  { href: "/service/me-mtech-project-center-in-chennai", label: "M.E M.Tech Project Centers in Chennai" },
  { href: "/service/be-btech-project-center-in-chennai", label: "B.E B.Tech Project Centers in Chennai" },
  { href: "/service/engineering-phd-research-guidance-chennai", label: "Engineering PhD Research Project Guidance Centers in Chennai" },
  { href: "/service/phd-research-thesis-writing-services-help", label: "PhD Thesis Writing Services in Chennai" },
  { href: "/service/research-paper-writing", label: "Research Paper Writing Service in Chennai" },
  { href: "/service/conference-paper", label: "Conference Paper Writing Services in Chennai" },
  { href: "/service/research-paper-publication-help-and-services", label: "Research Paper Publication Support Services in Chennai" },
  { href: "/service/phd-research-guidance-chennai", label: "PhD Research Guidance in Chennai" }
];

const Leftsidebar = () => {
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index}>
          <a href={service.href}>{service.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default Leftsidebar;
