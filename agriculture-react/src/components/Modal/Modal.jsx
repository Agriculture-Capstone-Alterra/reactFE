import React, { useEffect } from "react";
import style from "./styles.module.css";

// begin : dokumentasi penggunaan modal
// untuk menggunakan modul, silahkan gunakan komponen ModalTrigger
// contoh pemanggilan / penggunaan komponen modal :

// <Modal
// id="editData"
// title="Edit Data"
// content="Apakah anda yakin akan mengedit data tanaman?"
// onCancel= {() => {}}
// onSubmit= {() => {}}
// type="edit"
// />
// id digunakan untuk membuat suatu modal menjadi unik, jadi jika membutuhkan beberapa modal di satu halaman,
// cukup bedakan id dari satu modal dengan yang lainnya, begitu juga dengan modal trigger di bagian
// modalTarget, penempatan modal bebas dimana saja, tidak akan berpengaruh, selama di panggil didalam
// return suatu komponen page.
// penjelasan props :
// id => digunakan untuk identifier modal agar bersifat unik (sesuai dengan tujuan / kegunaan modal tsb)
// title => digunakan untuk judul dari modal (bagian tengah paling atas)
// content => merupakan konten untuk bagian tengah / utama dari modal, bisa diisi text seperti :
// <p className='text-center'>Apakah anda yakin akan mengapus data tanaman?</p>
// atau diisi dengan komponen lainnya, sesuai kebutuhan
// onCancel => diisi dengan callback function yang akan dipanggil ketika tombol cancel di klik
// onSubmit => diisi dengan callback function yang akan dipanggil ketika tombol submit / delete atau konfirmasi di klik
// type => diisi dengan pilihan : delete, confirm, custom dimana delete akan menampikan modal yang menggunakan styling delete
// confirm akan menampikkan modal untuk konfirmasi, sedangkan custom merupakan pilihan untuk customisasi tombol cancel / submit
// cancelClassname dan submitClassname akan dipanggil apabila type yang dipilih adalah custom
// cancelButtonText dan submitButtonText digunakan untuk mengatur text pada tombol cancel dan submit, namun sifatnya opsional,
// apabila dikosongkan akan diambil dari type modal yang digunakan
// end : dokumentasi penggunaan modal
const Modal = ({
  id,
  title,
  content,
  onCancel,
  onSubmit,
  type,
  cancelClassname,
  submitClassname,
  cancelButtonText,
  submitButtonText,
}) => {
  const getCancelClassButton = (type) => {
    switch (type) {
      case "delete":
        return `btn-outline-secondary`;
      case "custom":
        return cancelClassname;
      case "confirm":
        return `btn-outline-info ${style.btnOutlinePrimary}`;
      default:
        return `btn-outline-info ${style.btnOutlinePrimary}`;
    }
  };
  const getSubmitClassButton = (type) => {
    switch (type) {
      case "delete":
        return `btn-danger`;
      case "custom":
        return submitClassname;
      case "confirm":
        return `${style.btnPrimary}`;
      default:
        return `${style.btnPrimary}`;
    }
  };
  const getCancelButtonText = (type) => {
    switch (type) {
      case "delete":
        return `Batal`;
      case "custom":
        return `Batal`;
      case "confirm":
        return `Batal`;
      default:
        return `Batal`;
    }
  };
  const getSubmitButtonText = (type) => {
    switch (type) {
      case "delete":
        return `Hapus`;
      case "custom":
        return `Submit`;
      case "confirm":
        return `Konfirmasi`;
      default:
        return `Submit`;
    }
  };
  const cancelClassButton = getCancelClassButton(type);
  const submitClassButton = getSubmitClassButton(type);
  const cancelText = cancelButtonText
    ? cancelButtonText
    : getCancelButtonText(type);
  const submitText = submitButtonText
    ? submitButtonText
    : getSubmitButtonText(type);
  return (
    <div
      className="modal modal-fade"
      tabIndex="-1"
      id={id}
      aria-labelledby={`${id}Label`}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <div className="col-12">
              <div className="d-flex justify-content-center pt-3">
                <h5 className="modal-title">{title}</h5>
              </div>
            </div>
          </div>
          <div className="modal-body">{content}</div>
          <div className="modal-footer border-0 d-flex justify-content-center pb-5">
            <button
              type="button"
              className={`btn ${cancelClassButton} rounded px-5`}
              data-bs-dismiss="modal"
              onClick={onCancel}>
              {cancelText}
            </button>
            <button
              type="button"
              className={`btn ${submitClassButton} rounded px-5`}
              onClick={onSubmit}>
              {submitText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// const Modal = ({ id, icon-btn, title, bodyText, onCancel, onDelete }) => {
//   useEffect(() => {
//     const myModal = document.getElementById(id);
//     const myInput = document.getElementById(`${id}-input`);

//     myModal.addEventListener('shown.bs.modal', () => {
//       myInput.focus();
//     });
//   }, [id]);

//   return (
//     <div>
//       <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#${id}`}>
//         {icon-btn}
//       </button>
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal" id={id} tabIndex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content p-5">
//               <div className="d-flex justify-content-center">
//                 <h5>{title}</h5>
//               </div>
//               <div className="m-body text-center">
//                 <p>{bodyText}</p>
//               </div>
//               <div className="d-flex justify-content-evenly">
//                 <button type="button" className="btn rounded btn-secondary px-5" data-bs-dismiss="modal" onClick={onCancel}>
//                   Batal
//                 </button>
//                 <button type="button" className="btn rounded btn-danger px-5" onClick={onDelete}>
//                   Hapus
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
