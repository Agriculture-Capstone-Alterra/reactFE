import React from 'react';
import PropTypes from 'prop-types';
import Trash from '../../assets/trash.svg';
import Add from '../../assets/addBlack.svg';
import Input from '../Input';
import TextArea from '../Textarea';
import Invalid from '../Invalid';
import DropFile from '../DropFile';

const FormCardTambah = ({ data, onTambah, onHapus, onChange, label, namelabel }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={item.id} className='card card-n px-4 py-3 mb-3 mt-3'>
          <div className='row'>
            <div className='col container'>
              <div className='row'>
                <div className='col-sm'>
                  <div className='form-group mb-3'>
                    <label className='form-label fontw600' htmlFor={`nama${namelabel}`}>
                      Nama {label}
                    </label>
                    <Input
                      id={`nama${namelabel}`}
                      name={`nama${namelabel}`}
                      placeholder={`Masukkan nama ${label.toLowerCase()}`}
                      value={item[`nama${namelabel}`]}
                      onChange={(e) => onChange(index, `nama${namelabel}`, e.target.value)}
                    />
                    <Invalid errormsg={`Tolong masukkan nama ${label.toLowerCase()}.`} />
                  </div>
                </div>
                <div className='col-sm'>
                  <div className='form-group mb-3'>
                    <label className='form-label fontw600' htmlFor={`gambar${namelabel}`}>
                      Foto
                    </label>
                    <DropFile 
                    name={`gambar${namelabel}`}
                    value={item[`gambar${namelabel}`]} 
                    setValue={(value) => onChange(index, `gambar${namelabel}`, value)}
                    />
                    <Invalid errormsg={`Tolong masukkan gambar ${label.toLowerCase()}.`} />
                  </div>
                </div>
                <div className='form-group mb-3'>
                  <label className='form-label fontw600' htmlFor={`deskripsi${namelabel}`}>
                    Deskripsi {label}
                  </label>
                  <TextArea
                    id={`deskripsi${namelabel}`}
                    name={`deskripsi${namelabel}`}
                    placeholder={`Masukkan deskripsi ${label.toLowerCase()}`}
                    rows={2}
                    value={item[`deskripsi${namelabel}`]}
                    onChange={(e) => onChange(index, `deskripsi${namelabel}`, e.target.value)}
                  />
                  <Invalid errormsg={`Tolong masukkan deskripsi ${label.toLowerCase()}.`} />
                </div>
              </div>
            </div>
            <div className='col-auto d-center'>
              <button type='button' className='btn btn-danger' onClick={() => onHapus(item.id)}>
                <img src={Trash} alt='Delete' />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button type='button' className='b-none p-label mb-3' onClick={onTambah}>
        <img src={Add} alt='Add' />
        Tambahkan {label}
      </button>
    </div>
  );
};

FormCardTambah.propTypes = {
  data: PropTypes.array.isRequired,
  onTambah: PropTypes.func.isRequired,
  onHapus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormCardTambah;