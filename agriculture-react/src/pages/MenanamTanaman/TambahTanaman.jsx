import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './TambahTanaman.css'
import Breadcrumb from '../../components/Breadcrumb'
import FormLayout from '../../components/FormLayout'
import Input from '../../components/Input'
import TextArea from '../../components/Textarea'
import Select from '../../components/Select'
import Invalid from '../../components/Invalid'

const TambahTanaman = () => {
    const jenisTanamanOptions = [
        { value: 'Bunga', label: 'Bunga' },
        { value: 'Tanaman Hias', label: 'Tanaman Hias' },
        { value: 'Umbi-umbian', label: 'Umbi-umbian' },
        { value: 'Kacang-kacangan', label: 'Kacang-kacangan' },
        { value: 'Pohon-pohonan', label: 'Pohon-pohonan' },
        { value: 'Sayuran', label: 'Sayuran' },
    ];
    const teknologiTanamanOptions = [
        { value: 'Hidroponik', label: 'Hidroponik' },
        { value: 'Aeroponik', label: 'Aeroponik' },
    ];
    return (
        <>
        <div className='mx-3 my-3'>
            <Breadcrumb>
                <li className="breadcrumb-item fontw600">
                    <>Menanam Tanaman</>
                </li>
                <li className="breadcrumb-item fontw600 colorActive">
                    <>Tambah Tanaman</>
                </li>
            </Breadcrumb>
        </div>
        <div className='mx-5 my-5'>
            <FormLayout>
                <h4 className='fontw600'>
                    Tambah Tanaman
                </h4>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="namatanaman">Nama Tanaman</label>
                    <Input
                    id="namatanaman"
                    name="namatanaman"
                    placeholder='Masukkan nama tanaman'
                    />
                    <Invalid>Tolong masukkan nama tanaman.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="jenistanaman">Jenis Tanaman</label>
                    <Select
                        id="jenistanaman"
                        name="jenistanaman"
                        options={jenisTanamanOptions}
                        title="Pilih Jenis Tanaman"
                    />
                    <Invalid>Tolong pilih jenis tanaman.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="deskripsitanaman">Deskripsi Tanaman</label>
                    <TextArea
                    id="deskripsitanaman"
                    name="deskripsitanaman"
                    placeholder='Masukkan deskripsi tanaman'
                    rows={2}
                    />
                    <Invalid>Tolong masukkan deskripsi tanaman.</Invalid>
                </div>
                <label className="form-label fontw600" htmlFor="gambartanaman">Gambar Tanaman</label>
                <div className="input-group mb-3">
                    <input
                    type="file" 
                    className="form-control" 
                    id="gambartanaman"
                    name='gambartanaman'
                    required
                    multiple
                    />
                    <label className="input-group-text" htmlFor="gambartanaman">
                        Pilih File
                    </label>
                    <Invalid>Tolong masukkan gambar tanaman.</Invalid>
                </div>                  
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="varietastanaman">Varietas Tanaman</label>
                    <Input
                    id="varietastanaman"
                    name="varietastanaman"
                    placeholder='Masukkan varietas tanaman'
                    />
                    <Invalid>Tolong masukkan varietas tanaman.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="teknologitanaman">Teknologi Tanaman</label>
                    <Select
                        id="teknologitanaman"
                        name="teknologitanaman"
                        options={teknologiTanamanOptions}
                        title="Pilih Teknologi Tanaman"
                    />
                </div>
                <h4 className='fontw600'>Kalender Bercocok Tanam :</h4>
                <div className='row'>
                    <p className='fontw600'>Musim Kemarau</p>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label fontw400" htmlFor="awalkemarau">Awal Penanaman :</label>
                        <Input
                            type="date"
                            id="awalkemarau"
                            name="awalkemarau"
                        />
                        <Invalid>Tolong masukkan tanggal.</Invalid>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label fontw400" htmlFor="akhirkemarau">Akhir Penanaman :</label>
                        <Input
                            type="date"
                            id="akhirkemarau"
                            name="akhirkemarau"
                        />
                        <Invalid>Tolong masukkan tanggal.</Invalid>
                    </div>
                </div>
                <div className='row'>
                    <p className='fontw600'>Musim Hujan</p>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label fontw400" htmlFor="awalhujan">Awal Penanaman :</label>
                        <Input
                            type="date"
                            id="awalhujan"
                            name="awalhujan"
                        />
                        <Invalid>Tolong masukkan tanggal.</Invalid>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label fontw400" htmlFor="akhirhujan">Akhir Penanaman :</label>
                        <Input
                            type="date"
                            id="akhirhujan"
                            name="akhirhujan"
                        />
                        <Invalid>Tolong masukkan tanggal.</Invalid>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="informasihama">Informasi Hama dan Penanggulangannya</label>
                    <TextArea
                    id="informasihama"
                    name="informasihama"
                    placeholder='Masukkan informasi hama dan penanggulangan tanaman'
                    rows={2}
                    />
                    <Invalid>Tolong masukkan informasi hama dan penanggulangan tanaman.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="informasinutrisi">Informasi Nutrisi dan Pupuk</label>
                    <TextArea
                    id="informasinutrisi"
                    name="informasinutrisi"
                    placeholder='Masukkan informasi nutrisi dan pupuk'
                    rows={2}
                    />
                    <Invalid>Tolong masukkan informasi nutrisi dan pupuk.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="penyiraman">Penyiraman</label>
                    <div className='row'>
                        <div className='col-auto d-inline-flex'>
                            <Input
                            type="number"
                            className="form-control my-1"
                            id="minggupenyiraman"
                            name="minggupenyiraman"
                            />
                            <label className='my-2 mx-2 fontw400'>Minggu</label>
                        </div>
                        <div className='col-auto d-inline-flex'>
                            <Input
                            type="number"
                            className="form-control my-1"
                            id="kalipenyiraman"
                            name="kalipenyiraman"
                            />
                            <label className='my-2 mx-2 fontw400'>Kali</label>
                        </div>
                    </div> 
                    <Invalid>Tolong masukkan waktu penyiraman tanaman.</Invalid>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="waktupenyiraman">Waktu Penyiraman</label>
                    <Input
                    type="time"
                    id="waktupenyiraman"
                    name="waktupenyiraman"
                    />
                    <Invalid>Tolong masukkan waktu penyiraman tanaman.</Invalid>
                </div>
                <div className="form-group row justify-content-end">
                    <button type="submit" className="btn btn-green col-auto m12">
                        Tambah
                    </button>
                </div>
            </FormLayout>
        </div>
        </>
    )
}

export default TambahTanaman