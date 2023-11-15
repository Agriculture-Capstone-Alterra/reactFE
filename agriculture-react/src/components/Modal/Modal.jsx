import React, { useEffect } from 'react';
import './modal.module.css';

const Modal = ({ id, title, bodyText, onCancel, onDelete }) => {
  useEffect(() => {
    const myModal = document.getElementById(id);
    const myInput = document.getElementById(`${id}-input`);

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }, [id]);

  return (
    <div>
      <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal" id={id} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content p-5">
              <div className="d-flex justify-content-center">
                <h5>{title}</h5>
              </div>
              <div className="m-body text-center">
                <p>{bodyText}</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <button type="button" className="btn rounded btn-secondary px-5" data-bs-dismiss="modal" onClick={onCancel}>
                  Batal
                </button>
                <button type="button" className="btn rounded btn-danger px-5" onClick={onDelete}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// Penggunaannya di komponen lain
// <Modal
//   id="exampleModal"
//   title="Hapus Data Tanaman"
//   bodyText="Apakah anda yakin akan mengapus data ini?"
//   onCancel={() => {
//     // Handle cancel action
//   }}
//   onDelete={() => {
//     // Handle delete action
//   }}
// /> 