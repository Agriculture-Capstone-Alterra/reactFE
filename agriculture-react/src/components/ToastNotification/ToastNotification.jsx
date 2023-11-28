import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

// penggunaan
      // untuk menggunakan ditampilkan lewat sebuah state atau sejenisnya dalam contoh gunakan showToast di component utama
      {/* Render the ToastNotification component */}
      // {showToast && (
      //   <ToastNotification
      //     position="bottom-left"
      //     text="Data tanaman berhasil ditambahkan"
      //     onClose={() => {
      //       setShowToast(false);
      //       window.history.replaceState(null, null, window.location.pathname);
      //     }}
      //   />
      // )}
// end contoh penggunaan
const ToastNotification = ({ position, text, timer, onClose }) => {
  const toastOptions = {
    toast: true,
    position: position || 'bottom-left',
    showCloseButton: true,
    showConfirmButton: false,
    icon: null,
    timer: timer || 3000,
    background: "#A7F3D0",
    width: 400,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  };

  useEffect(() => {
    console.log("called");
    Swal.fire({ title: text, ...toastOptions }).then(onClose);
  }, []);

  return null;
};

export default ToastNotification;
