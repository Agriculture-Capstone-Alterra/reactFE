import React, { useEffect } from 'react';
import './modal.css';

const Modal = () => {
  useEffect(() => {
    const myModal = document.getElementById('exampleModal');
    const myInput = document.getElementById('myInput');

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  }, []);

  return (
    <div>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal" id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Hapus Data Tanaman</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Apakah anda yakin akan mengapus data ini?</p>
              </div>
              <div className="modal-footer gap-3">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Batal
                </button>
                <button type="button" className="btn btn-primary">
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
