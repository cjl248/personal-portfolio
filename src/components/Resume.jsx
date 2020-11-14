import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import resume from '../assets/resume.pdf'
import { IconContext } from "react-icons"
import { MdGetApp } from 'react-icons/md'

const PDF_CDN = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = PDF_CDN

const apiURL = "https://personal-portfolio-mailer.herokuapp.com"

export default function Resume() {

  const contextValue = {
    className: 'download-icon',
    size: '2.3rem',
  }

  const handleDownloadClick = () => {
    const config = {
      method: "GET",
      headers: {
        "Accept": "application/pdf",
        "Content-Type": "application/json"

      }
    }

    fetch(`${apiURL}/resume.pdf`, config)
      .then(stream => stream.blob())
      .then(blob => {
        // Create anchor element to point to pdf
        const a = document.createElement("a")
        a.style.display = "none"
        document.body.appendChild(a)
        // Create PDF file object
        a.href = window.URL.createObjectURL(blob)
        // Simulate click on anchor
        a.setAttribute("download", 'chris-liendo-resume.pdf')
        a.click()
        // Clean up; get rid of anchor
        window.URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      })

  }

  return(
    <div className='resume-page-container'>
      <section className='resume-header'>
        <span>{`Chris Liendo`}</span>
        <span className='about-contact-line'>
          {`| Email |`}
          <a href={`mailto:cjl248@cornell.edu`}>{`cjl248@cornell.edu`}</a>
          {`| Phone |`}
          <a href={`tel:+1646-338-0622`}>{`646-338-0622`}</a>
        </span>
        <div
          className='resume-download-wrapper'
          onClick={handleDownloadClick}>
          <IconContext.Provider value={contextValue}>
            <MdGetApp></MdGetApp>
          </IconContext.Provider>
          <span
            className='download-text'>
          </span>
            {`Download`}
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
