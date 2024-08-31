"use client";

import { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const ResumeViewer = ({ file, downloadName }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="flex justify-start w-full mb-5 ml-5 md:ml-0 font-bold uppercase md:justify-center font-oswald">
        <button asChild>
          <a href={file} className="font-bold" download={downloadName}>
            Download Resume
            <IoMdDownload className="w-4 h-4 ml-2" />
          </a>
        </button>
      </div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (_, index) => (
          <div key={index}>
            <Page key={index + 1} pageNumber={index + 1} />
            <p className="p-2 text-end">
              Page {index + 1} of {numPages}
            </p>
          </div>
        ))}
      </Document>
    </div>
  );
};
export default ResumeViewer;
