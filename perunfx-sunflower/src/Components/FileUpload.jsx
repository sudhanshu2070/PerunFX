import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  // State to manage file and upload status
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null); // Clear previous result on new file selection
      setError(null);
    }
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // Append the file to FormData

    try {
      setUploading(true); // Set uploading status to true
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data); // Set the response result
    } catch (err) {
      setError('Failed to upload file! Please try again.'); // Set error if upload fails
    } finally {
      setUploading(false); // Set uploading status to false
    }
  };

  return (
    <div className="file-upload-container">
      <h2>Upload a File</h2>

      {/* File input */}
      <input 
        type="file" 
        onChange={handleFileChange} 
        disabled={uploading} 
      />

      {/* Upload button */}
      <button 
        onClick={handleFileUpload} 
        disabled={uploading || !file} 
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>

      {/* Display Result */}
      {result && (
        <div className="result">
          <h3>Upload Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre> {/* Display the result as JSON */}
        </div>
      )}

      {/* Display Error */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;