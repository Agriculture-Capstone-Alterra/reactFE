import "./drag-drop.css";
import Upload from '../../assets/uploadFile.svg';
import React, { useRef, useState } from 'react';

const DropFile = ({ value, onChange, name }) => {
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    dropAreaRef.current.classList.add('highlight');
  };

  const handleDragLeave = () => {
    dropAreaRef.current.classList.remove('highlight');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropAreaRef.current.classList.remove('highlight');
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = () => {
    const files = fileInputRef.current.files;
    handleFiles(files);
    onChange();
  };

  const handleFiles = (files) => {
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result);
        setSelectedFileName(files[0].name);
      };

      reader.readAsDataURL(files[0]);
    }
  };

  const handleDelete = () => {
    setImagePreview(null);
    setSelectedFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div
        ref={dropAreaRef}
        id={imagePreview ? 'input-area' : 'drop-area'}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {imagePreview ? (
          <div className="preview-container">
            <img src={imagePreview} alt="Preview" />
            <div className="image-info">
              <div className="image-name">{selectedFileName}</div>
              <button className="remove-image" onClick={handleDelete}>
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-auto d-center">
              <img src={Upload} alt="Upload icon" />
            </div>
            <div className="col-auto">
              <p className="m-0">
                <b>Drag & drop an image</b> <br /> or{' '}
                <span className="select" onClick={() => fileInputRef.current.click()}>
                  Browse
                </span>{' '}
                to choose a file
              </p>
            </div>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          value={value}
          name={name}
        />
      </div>
    </div>
  );
};

export default DropFile;
