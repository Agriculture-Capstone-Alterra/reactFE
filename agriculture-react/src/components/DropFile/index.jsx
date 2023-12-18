import "./drag-drop.css";
import Upload from '../../assets/uploadFile.svg';
import React, { useRef } from 'react';

const DropFile = ({ name, value, setValue }) => {
  const imageUrl = `${value}`;
  const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
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

  const handleFileInputChange = (e) => {
    const files = fileInputRef.current.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    if (files.length > 0 && files[0].type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = () => {
        const fileObject = {
          name: files[0].name,
          src: reader.result,
        };
        setValue(fileObject);
      };

      reader.readAsDataURL(files[0]);

    }
  };

  const handleDelete = () => {
    setValue(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div
        ref={dropAreaRef}
        id={value ? 'input-area' : 'drop-area'}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {value ? (
          <div className="preview-container">
            {value.src ? (
              <>
              <img src={value.src} alt="Preview" />
              <div className="image-info">
                <div className="image-name">{value.name}</div>
                <button className="remove-image" onClick={handleDelete}>
                  Remove
                </button>
              </div>
              </>
            ) : (
              <>
              <img src={value} alt="Preview" />
              <div className="image-info">
                <div className="image-name">{fileName}</div>
              </div>
              </>
            )}
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
          name={name}
        />
      </div>
    </div>
  );
};

export default DropFile;
