import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import resume from '../assets/resume.pdf'
import { IconContext } from "react-icons"
import { MdGetApp } from 'react-icons/md'

const PDF_CDN = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = PDF_CDN

export default function Resume() {

  const contextValue = {
    className: 'download-icon',
    size: '2.3rem',
  }

  const handleDownloadClick = () => {
    const a = document.createElement("a")
    a.style.display = "none"
    document.body.appendChild(a)

    const resumePDF = new Blob([resume], {type: 'application/pdf'})
    a.href = window.URL.createObjectURL(resumePDF)

    a.setAttribute("download", 'chris-liendo-resume')
    a.click()

    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }

  return(
    <div className='resume-page-container'>
      <section className='resume-header'>
        <span>{`Chris Liendo`}</span>
        <span>{`Flushing, NY 11354`}</span>
        <span>{`Email: cjl248@cornell.edu | Phone: 646-338-0622 `}</span>
        <div className='resume-download-wrapper'>
          <span
            className='download-text'
            onClick={handleDownloadClick}>
            {`Download: `}
          </span>
          <IconContext.Provider value={contextValue}>
              <MdGetApp></MdGetApp>
          </IconContext.Provider>
        </div>
      </section>
      <section className='resume-doc'>
        <Document
          file={resume}
          externalLinkTarget='_blank'
          renderMode='svg'>
          <Page
            pageNumber={1}
            scale={1.3}>
          </Page>
        </Document>
      </section>
    </div>
  )

}
