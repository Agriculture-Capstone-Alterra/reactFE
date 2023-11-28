// Begin : dokumentasi ModalTrigger
// Komponen ini memiliki base button sebagai trigger untuk membuka modal, jadi jika anda ingin menggunakan modal,
// disarankan untuk menggunakan komponen modal trigger ini, dimana id akan menjadi patokan modal target yang ingin anda tampilkan
// ketika component ini di klik.
// classname digunakan agar tombol ini memiliki styling yang sesuai dengan keinginan dan bersifat dynamic
// modal target diisi dengan id dari modal yang ingin anda tampikan ketika component ini diklik
// children merupakan isi dari button, dimana nanti bisa menyesuaikan kebutuhan, apakah ingin menambahkan suatu icon atau tidak
// style merupakan opsional apabila memang diperlukan adanya inline-styling
// End : dokumentasi ModalTrigger

// begin : contoh penggunaan lengkap dengan modalnya :
// ModalTrigger :

{
  /* 
    // trigger modal 1
    <ModalTrigger
        modalTarget={'editData'}
        className={`btn ${styles.btnAction}`}
        style={{ display: 'flex', alignItems: 'center' }}
    >
        <img src={EditIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
        <span>Edit</span>
    </ModalTrigger>

    // trigger modal 2
    <ModalTrigger
        modalTarget={'deleteData'}
        className={`btn ${styles.btnAction}`}
        style={{ display: 'flex', alignItems: 'center' }}
    >
        <img src={TrashIcon} alt="Edit Icon" className="me-2" width="20" height="20" />
        <span>Hapus</span>
    </ModalTrigger> */
}
// modal :
{
  /* 
    // modal 2
    <Modal
        id="deleteData"
        title="Hapus Data Tanaman"
        content={<p className='text-center'>Apakah anda yakin akan mengapus data tanaman?</p>}
        onCancel= {() => {}}
        onSubmit= {() => {}}
        type="delete"
    />
    // modal 1
    <Modal
        id="editData"
        title="Edit Data"
        content={<p className='text-center'>Apakah anda yakin akan mengedit data tanaman?</p>}
        onCancel= {() => {}}
        onSubmit= {() => {}}
        type="edit"
    /> 
*/
}
// end : contoh penggunaan lengkap dengan modalnya :
const ModalTrigger = ({
  className,
  modalTarget,
  children,
  style,
  disabled,
}) => {
  console.log(modalTarget);
  return (
    <button
      disabled={disabled}
      className={className}
      style={style}
      data-bs-toggle="modal"
      data-bs-target={`#${modalTarget}`}>
      {children}
    </button>
  );
};

export default ModalTrigger;
