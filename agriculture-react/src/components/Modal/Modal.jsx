import React, { useEffect } from 'react';
import './Modal.module.css';

const Modal = ({ id, icon-btn, title, bodyText, onCancel, onDelete }) => {
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
        {icon-btn}
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
//   icon-btn={<i className="bi bi-trash"></i>}
//   title="Hapus Data Tanaman"
//   bodyText="Apakah anda yakin akan mengapus data ini?"
//   onCancel={() => {
//     // Handle cancel action
//   }}
//   onDelete={() => {
//     // Handle delete action
//   }}
// />
