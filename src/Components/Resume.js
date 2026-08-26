import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const isClient = typeof window !== 'undefined';
  const [wid, setWid] = useState(isClient ? window.innerWidth : 1024);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setWid(window.innerWidth);
    // ensure initial value is correct if component mounts after load
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
          <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target="_blank" rel="noopener noreferrer" download="Devansh's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>

    </div>
  )
}

export default Resume
