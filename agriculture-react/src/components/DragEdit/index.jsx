import "./drag-drop.css";
import Upload from '../../assets/uploadFile.svg'
import React, { useRef } from 'react';
import axiosWithAuth from "../../api/axios";

const DragEdit = ({ value, name, setValue, onDelete, idPlant, linkApi}) => {
  const dropAreaRef = useRef(null);
  const fileInputRef = useRef(null);

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
  };
  const addImage = (imagePreview) => {
    setValue((prevImagePreviews) => [...prevImagePreviews, imagePreview]);
  };
  const handleFiles = async(files) => {
    for (const file of files) {
      if (file.type.startsWith('image/')) {
        try {
          const imagePreview = {
            id: Date.now(),
            src: URL.createObjectURL(file),
            name: file.name,
          };
          
          const rawset = await fetch(imagePreview.src)
          const toBlob = await rawset.blob()
          const formData = new FormData();
          formData.append('image_files', toBlob);
          const response = await axiosWithAuth.post(`${linkApi}/${idPlant}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          addImage(imagePreview);
        }catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    }
  }
  return (
    <div>
      <div id="image-preview">
      {value.map((image) => (
          <div key={image.id} className="preview-container">
            <img src={image.src} alt="Preview" />
            <div className="image-info">
              <div className="image-name">{image.name}</div>
              <button type="button" className="remove-image" onClick={() => onDelete(image.id)}>
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
          multiple={true}
          ref={fileInputRef}
          onChange={handleFileInputChange}
          name={name} 
        />
      </div>
    </div>
  );
};

export default DragEdit;
