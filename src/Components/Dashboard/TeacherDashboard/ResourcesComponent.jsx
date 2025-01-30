import React, { useState } from 'react';
import { Book, File, Link as LinkIcon, Video, Download, Plus, X } from 'lucide-react';
import "./Resources.css"
const resourcesList = {
  Mathematics: {
    'Lecture Materials': [
      { id: 1, name: 'Introduction to Calculus', type: 'pdf', size: '2.3 MB', uploadDate: '2025-01-15' },
      { id: 2, name: 'Algebra Fundamentals', type: 'pdf', size: '1.8 MB', uploadDate: '2025-01-10' }
    ],
    'Practice Problems': [
      { id: 3, name: 'Weekly Problem Set 1', type: 'doc', size: '500 KB', uploadDate: '2025-01-20' },
      { id: 4, name: 'Math Quiz Solutions', type: 'pdf', size: '1.2 MB', uploadDate: '2025-01-18' }
    ],
    'Video Tutorials': [
      { id: 5, name: 'Understanding Derivatives', type: 'video', size: '25 MB', uploadDate: '2025-01-12' },
      { id: 6, name: 'Geometry Basics', type: 'video', size: '18 MB', uploadDate: '2025-01-08' }
    ]
  },
  Science: {
    'Lab Materials': [
      { id: 7, name: 'Chemistry Lab Safety Guide', type: 'pdf', size: '3.1 MB', uploadDate: '2025-01-14' },
      { id: 8, name: 'Physics Experiment Handbook', type: 'pdf', size: '4.2 MB', uploadDate: '2025-01-11' }
    ],
    'Reference Materials': [
      { id: 9, name: 'Periodic Table Guide', type: 'pdf', size: '1.5 MB', uploadDate: '2025-01-17' },
      { id: 10, name: 'Biology Cell Structure', type: 'ppt', size: '2.8 MB', uploadDate: '2025-01-16' }
    ]
  }
};

const ResourcesSection = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showUploadModal, setShowUploadModal] = useState(false);

  const getFileIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'link': return <LinkIcon className="w-4 h-4" />;
      default: return <File className="w-4 h-4" />;
    }
  };

  const handleDownload = (resource) => {
    console.log(`Downloading ${resource.name}`);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    setShowUploadModal(false);
  };

  const UploadModal = () => (
    <div className="upload-modal fixed inset-0 flex items-center justify-center">
      <div className="modal-content p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upload New Resource</h3>
          <button onClick={() => setShowUploadModal(false)} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">File Name</label>
            <input type="text" className="modal-input" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select className="modal-input">
              <option>Lecture Materials</option>
              <option>Practice Problems</option>
              <option>Video Tutorials</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">File</label>
            <input type="file" className="modal-input" />
          </div>
          <button type="submit" className="add-resource-btn w-full p-2 rounded text-white">
            Upload
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="resources-container p-6">
      <div className="resources-header flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Learning Resources</h2>
        <button
          onClick={() => setShowUploadModal(true)}
          className="add-resource-btn flex items-center gap-2 px-4 py-2 rounded text-white"
        >
          <Plus className="w-4 h-4" /> Add Resource
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Subjects Sidebar */}
        <div className="col-span-3">
          <div className="subjects-sidebar p-4">
            <h3 className="font-semibold mb-4">Subjects</h3>
            <div className="space-y-2">
              {Object.keys(resourcesList).map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`subject-btn w-full text-left px-3 py-2 ${
                    selectedSubject === subject ? 'active' : ''
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Content */}
        <div className="col-span-9">
          {selectedSubject ? (
            <div className="resources-content">
              <h3 className="text-xl font-semibold mb-6">{selectedSubject} Resources</h3>
              {Object.entries(resourcesList[selectedSubject]).map(([category, resources]) => (
                <div key={category} className="mb-6">
                  <h4 className="category-header text-lg font-medium">{category}</h4>
                  <div className="bg-white rounded-lg shadow">
                    <table className="resources-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>Size</th>
                          <th>Upload Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resources.map((resource) => (
                          <tr key={resource.id}>
                            <td className="flex items-center gap-2">
                              {getFileIcon(resource.type)}
                              {resource.name}
                            </td>
                            <td>{resource.type.toUpperCase()}</td>
                            <td>{resource.size}</td>
                            <td>{resource.uploadDate}</td>
                            <td>
                              <button
                                onClick={() => handleDownload(resource)}
                                className="download-btn"
                              >
                                <Download className="w-4 h-4" /> Download
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="resources-content empty-state">
              <Book className="w-16 h-16 mb-4" />
              <p>Select a subject to view resources</p>
            </div>
          )}
        </div>
      </div>

      {showUploadModal && <UploadModal />}
    </div>
  );
};


// Update the renderContent case for resources in the main TeacherDashboard component:
export default ResourcesSection;