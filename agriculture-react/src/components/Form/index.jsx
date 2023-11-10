import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Form.css'

const Form = () => {

    return (
        <section className='container'>
            <div className="col-md-12">
            <form className="form needs-validation">
            <h4>
                Tambah Tanaman
            </h4>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="namatanaman">Nama Tanaman</label>
                <input
                type="text"
                className="form-control"
                id="namatanaman"
                name="namatanaman"
                placeholder='Masukkan nama tanaman'
                required
                />
                <div className="invalid-feedback">Tolong masukkan nama tanaman.</div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="jenistanaman">Jenis Tanaman</label>
                <select
                className="form-select"
                id="jenistanaman"
                name="jenistanaman"
                required
                >
                <option value="" disabled selected>
                    Pilih Jenis Tanaman
                </option>
                <option value="Bunga">Bunga</option>
                <option value="Tanaman Hias">Tanaman Hias</option>
                <option value="Umbi-umbian">Umbi-umbian</option>
                <option value="Kacang-kacangan">Kacang-kacangan</option>
                <option value="Pohon-pohonan">Pohon-pohonan</option>
                <option value="Sayuran">Sayuran</option>
                </select>
                <div className="invalid-feedback">
                    Tolong pilih jenis tanaman
                </div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="deskripsitanaman">Deskripsi Tanaman</label>
                <textarea
                className="form-control"
                id="deskripsitanaman"
                name="deskripsitanaman"
                placeholder='Masukkan deskripsi tanaman'
                rows={2}
                required
                />
                <div className="invalid-feedback">Tolong masukkan deskripsi tanaman.</div>
            </div>

            <div className="form-group mb-3">
                <label className="form-label" htmlFor="gambartanaman">Gambar Tanaman</label>
                <input 
                type="file" 
                className="form-control" 
                id="gambartanaman"
                name='gambartanaman'
                required
                />
                <div className="invalid-feedback">Tolong masukkan gambar tanaman.</div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="varietastanaman">Varietas Tanaman</label>
                <input
                type="text"
                className="form-control"
                id="varietastanaman"
                name="varietastanaman"
                placeholder='Masukkan varietas tanaman'
                required
                />
                <div className="invalid-feedback">Tolong masukkan varietas tanaman.</div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="teknologitanaman">Teknologi Tanaman</label>
                <select
                className="form-select"
                id="teknologitanaman"
                name="teknologitanaman"
                required
                >
                <option value="" disabled selected>
                    Pilih Teknologi Tanaman
                </option>
                <option value="Hidroponik">Hidroponik</option>
                <option value="Aeroponik">Aeroponik</option>
                </select>
                <div className="invalid-feedback">
                    Tolong pilih teknologi tanaman
                </div>
            </div>
            <h4>Kalender Bercocok Tanam :</h4>
            <h6>Musim Kemarau</h6>
            <div className="form-group col-md-3 mb-3 d-grid">
                <label className="form-label" htmlFor="awalkemarau">Awal Penanaman :</label>
                <input
                    type="date"
                    id="awalkemarau"
                    name="awalkemarau"
                    className='form-control'
                />
                <div className="invalid-feedback">Tolong masukkan tanggal.</div>
            </div>
            <div className="form-group col-md-3 mb-3 d-grid">
                <label className="form-label" htmlFor="akhirkemarau">Akhir Penanaman :</label>
                <input
                    type="date"
                    id="akhirkemarau"
                    name="akhirkemarau"
                    className='form-control'
                />
                <div className="invalid-feedback">Tolong masukkan tanggal.</div>
            </div>
            <h6>Musim Hujan</h6>
            <div className="form-group col-md-3 mb-3 d-grid">
                <label className="form-label" htmlFor="awalhujan">Awal Penanaman :</label>
                <input
                    type="date"
                    id="awalhujan"
                    name="awalhujan"
                    className='form-control'
                />
                <div className="invalid-feedback">Tolong masukkan tanggal.</div>
            </div>
            <div className="form-group col-md-3 mb-3 d-grid">
                <label className="form-label" htmlFor="akhirhujan">Akhir Penanaman :</label>
                <input
                    type="date"
                    id="akhirhujan"
                    name="akhirhujan"
                    className='form-control'
                />
                <div className="invalid-feedback">Tolong masukkan tanggal.</div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="informasihama">Informasi Hama dan Penanggulangannya</label>
                <textarea
                className="form-control"
                id="informasihama"
                name="informasihama"
                placeholder='Masukkan informasi hama dan penanggulangan tanaman'
                rows={2}
                required
                />
                <div className="invalid-feedback">Tolong masukkan informasi hama dan penanggulangan tanaman.</div>
            </div>
            <div className="form-group mb-3">
                <label className="form-label" htmlFor="informasinutrisi">Informasi Nutrisi dan Pupuk</label>
                <textarea
                className="form-control"
                id="informasinutrisi"
                name="informasinutrisi"
                placeholder='Masukkan informasi nutrisi dan pupuk'
                rows={2}
                required
                />
                <div className="invalid-feedback">Tolong masukkan informasi nutrisi dan pupuk.</div>
            </div>
            <div className="">
                <button type="submit" className="btn btn-dark">
                Tambah
                </button>
            </div>
            </form>
            </div>
        </section>
    )
}

export default Form