import React, { useState } from 'react';
import {Download, Check, AlertCircle} from 'lucide-react';
import "../StuDash.css"
const NoteCard = ({ note, fileUrl, fileName }) => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, downloading, success, error

  const handleDownload = async () => {
    try {
      setDownloadStatus('downloading');
      
      // Initialize download by creating a new anchor element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      
      // Append to document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  return (
    <div className="note-card">
      <div className="note-content">
        <h3>{note}</h3>
        <p className="update-date">Last updated: January 15, 2025</p>
        <button 
          className={`download-button ${downloadStatus}`}
          onClick={handleDownload}
          disabled={downloadStatus === 'downloading'}
        >
          {downloadStatus === 'idle' && (
            <>
              <Download size={18} />
              <span>Download PDF</span>
            </>
          )}
          {downloadStatus === 'downloading' && (
            <>
              <div className="loading-spinner" />
              <span>Downloading...</span>
            </>
          )}
          {downloadStatus === 'success' && (
            <>
              <Check size={18} />
              <span>Downloaded</span>
            </>
          )}
          {downloadStatus === 'error' && (
            <>
              <AlertCircle size={18} />
              <span>Error! Try again</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

const NotesSection = () => {
  const notes = [
    {
      title: 'Mathematics Chapter 5',
      fileUrl: '/path/to/math-chapter-5.pdf',
      fileName: 'Mathematics-Chapter-5.pdf'
    },
    {
      title: 'Physics Notes - Wave Motion',
      fileUrl: '/path/to/physics-wave-motion.pdf',
      fileName: 'Physics-Wave-Motion.pdf'
    },
    {
      title: 'Chemistry - Organic Compounds',
      fileUrl: '/path/to/chemistry-organic.pdf',
      fileName: 'Chemistry-Organic-Compounds.pdf'
    }
  ];

  return (
    <div className="notes-section">
      <h2>Class Notes</h2>
      <div className="notes-grid">
        {notes.map((note) => (
          <NoteCard 
            key={note.title}
            note={note.title}
            fileUrl={note.fileUrl}
            fileName={note.fileName}
          />
        ))}
      </div>
    </div>
  );
};
export default NotesSection;