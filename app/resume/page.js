import ResumeViewer from "../components/ResumeViewer";
import About from "../components/About/About";
export const metadata = {
  title: "Resume | Emon Singha",
  description:
    "Explore the professional resume of Emon Singha, a passionate Frontend Developer with expertise in React and Next.js.",
  robots: "index, follow",
  canonical: "https://emonsingha.vercel.app/resume",
  openGraph: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Resume",
    url: "https://emonsingha.vercel.app/resume",
    image: {
      url: "https://emonsingha.vercel.app/img/ogImage.webp",
      alt: "Emon Singha's Resume",
    },
    description:
      "Explore the professional resume of Emon Singha, a passionate Frontend Developer with expertise in React and Next.js.",
  },
};
export default function Resume() {
  return (
    <div className="grid w-full pt-16 md:pt-5 overflow-auto bg-background place-items-center">
      {/* <ResumeViewer file="cv.pdf" downloadName="Fahad-Resume" /> */}
      <About file="cv.pdf" downloadName="Fahad-Resume" />
    </div>
  );
}
