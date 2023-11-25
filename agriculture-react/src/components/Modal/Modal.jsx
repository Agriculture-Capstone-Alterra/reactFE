import React, { useEffect } from 'react';
import style from './styles.module.css';

// begin : dokumentasi penggunaan modal

// end : dokumentasi penggunaan modal
const Modal = ({id, title, content, onCancel, onSubmit, type, cancelClassname, submitClassname}) => {
  const getCancelClassButton = (type) => {
    switch(type){
      case "delete" : return `btn-outline-secondary`;
      case "custom" : return cancelClassname;
      case "confirm" : return `btn-outline-info ${style.btnOutlinePrimary}`;
      default : return `btn-outline-info ${style.btnOutlinePrimary}`;
    }
  }
  const getSubmitClassButton = (type) => {
    switch(type){
      case "delete" : return `btn-danger`;
      case "custom" : return submitClassname;
      case "confirm" : return `${style.btnPrimary}`;
      default : return `${style.btnPrimary}`;
    }
  }
  const cancelClassButton = getCancelClassButton(type);
  const submitClassButton = getSubmitClassButton(type);
  return ( 
      <div className="modal modal-fade" tabIndex="-1" id={id} aria-labelledby={`${id}Label`}>
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header border-0">
                      <div className="col-12">
                          <div className="d-flex justify-content-center pt-3">
                              <h5 className="modal-title">{title}</h5>
                          </div>
                      </div>
                  </div>
                  <div className="modal-body">
                      <div className="text-center">
                          {content}
                      </div>
                  </div>
                  <div className="modal-footer border-0 d-flex justify-content-center pb-5">
                        <button type="button" className={`btn ${cancelClassButton} rounded px-5`} data-bs-dismiss="modal" onClick={onCancel}>
                          Batal
                        </button>
                        <button type="button" className={`btn ${submitClassButton} rounded px-5`} onClick={onSubmit}>
                          Hapus
                        </button>
                  </div>
              </div>
          </div>
      </div>
   );
}

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