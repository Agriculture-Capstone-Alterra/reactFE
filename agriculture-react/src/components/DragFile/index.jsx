import "./drag-drop.css";
import Upload from '../../assets/uploadFile.svg'
import React, { useRef, useState } from 'react';

const DragFile = ({ value, onChange, name }) => {
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imagePreviews, setImagePreviews] = useState([]);

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
    const newImagePreviews = [];

    for (const file of files) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();

        reader.onload = () => {
          const imagePreview = {
            id: Date.now(), // Unique ID for each image
            src: reader.result,
            name: file.name,
          };

          newImagePreviews.push(imagePreview);
          setImagePreviews([...imagePreviews, ...newImagePreviews]);
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveImage = (id) => {
    const updatedImagePreviews = imagePreviews.filter((image) => image.id !== id);
    setImagePreviews(updatedImagePreviews);
  };

  return (
    <div>
      <div id="image-preview">
        {imagePreviews.map((image) => (
          <div key={image.id} className="preview-container">
            <img src={image.src} alt="Preview" />
            <div className="image-info">
              <div className="image-name">{image.name}</div>
              <button className="remove-image" onClick={() => handleRemoveImage(image.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={dropAreaRef}
        id="drop-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
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
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileInputChange}
          value={value}
          name={name} 
        />
      </div>
    </div>
  );
};

export default DragFile;
