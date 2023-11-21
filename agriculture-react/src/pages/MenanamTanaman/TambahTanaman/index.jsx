import Trash from '../../../assets/trash.svg'
import Add from '../../../assets/addBlack.svg'
import './style.css'
import FormLayout from '../../../components/FormLayout'
import Input from '../../../components/Input'
import TextArea from '../../../components/Textarea'
import Select from '../../../components/Select'
import Invalid from '../../../components/Invalid'
import Layout from '../../../layout/Layout'
import DragFile from '../../../components/DragFile'
import DropFile from '../../../components/DropFile'

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
    const breadcrumTambahTanaman = [
        {
            crumblink : "/menanam-tanaman",
            crumbname : "Menanam Tanaman",
        },
        {
            crumblink : "/menanam-tanaman/tambah-tanaman",
            crumbname : "Tambah Tanaman",
        }
    ];
    const handleSubmit = () => {
    }
    return (
        <Layout pagetitle={"Menanam Tanaman"} breadcrumbs={breadcrumTambahTanaman}>
        <div className='mt-2' style={{ padding:'0px 0px 30px 30px', marginRight:'0'}}>
            <FormLayout onSubmit={handleSubmit}>
                <h4 className='fontw800'>
                    Tambah Tanaman
                </h4>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="namatanaman">Nama Tanaman</label>
                    <Input
                    id="namatanaman"
                    name="namatanaman"
                    placeholder='Masukkan nama tanaman'
                    />
                    <Invalid errormsg={"Tolong masukkan nama tanaman."} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="jenistanaman">Jenis Tanaman</label>
                    <Select
                        id="jenistanaman"
                        name="jenistanaman"
                        options={jenisTanamanOptions}
                        title="Pilih Jenis Tanaman"
                    />
                    <Invalid errormsg={"Tolong pilih jenis tanaman."}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="deskripsitanaman">Deskripsi Tanaman</label>
                    <TextArea
                    id="deskripsitanaman"
                    name="deskripsitanaman"
                    placeholder='Masukkan deskripsi tanaman'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan deskripsi tanaman."}/>
                </div>
                <label className="form-label fontw600" htmlFor="gambartanaman">Gambar Tanaman</label> 
                <DragFile 
                    name={'gambartanaman'}
                /> 
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="varietastanaman">Varietas Tanaman</label>
                    <Input
                    id="varietastanaman"
                    name="varietastanaman"
                    placeholder='Masukkan varietas tanaman'
                    />
                    <Invalid errormsg={"Tolong masukkan varietas tanaman."}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="teknologitanaman">Teknologi Tanaman</label>
                    <Select
                        id="teknologitanaman"
                        name="teknologitanaman"
                        options={teknologiTanamanOptions}
                        title="Pilih Teknologi Tanaman"
                    />
                    <Invalid errormsg={"Tolong pilih teknologi tanaman."}/>
                </div>
                <div className='form-label fontw600'>Kalender Musiman</div>
                <div className='row'>
                    <p className='label-musim'>Musim Kemarau</p>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="awalkemarau">Awal Penanaman</label>
                        <Input
                            type="date"
                            id="awalkemarau"
                            name="awalkemarau"
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="akhirkemarau">Akhir Penanaman</label>
                        <Input
                            type="date"
                            id="akhirkemarau"
                            name="akhirkemarau"
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                </div>
                <div className='row'>
                    <p className='label-musim'>Musim Hujan</p>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="awalhujan">Awal Penanaman</label>
                        <Input
                            type="date"
                            id="awalhujan"
                            name="awalhujan"
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="akhirhujan">Akhir Penanaman</label>
                        <Input
                            type="date"
                            id="akhirhujan"
                            name="akhirhujan"
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
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
                    <Invalid errormsg={"Tolong masukkan informasi hama dan penanggulangan tanaman."}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="informasinutrisi">Informasi Nutrisi dan Pupuk</label>
                    <TextArea
                    id="informasinutrisi"
                    name="informasinutrisi"
                    placeholder='Masukkan informasi nutrisi dan pupuk'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan informasi nutrisi dan pupuk."}/>
                </div>
                <div className='form-label fontw600'>Panduan Menanam</div>
                <p className='p-label'>Alat yang Dibutuhkan</p>
                <div>
                    <div className='card px-4 py-3 mb-3'>
                        <div className='row'>
                            <div className='col container'>
                                <div className='row'>
                                    <div className='col-sm'>
                                        <div className="form-group mb-3">
                                            <label className="form-label fontw600" htmlFor="namaalat">Nama Alat</label>
                                            <Input
                                            id="namaalat"
                                            name="namaalat"
                                            placeholder='Masukkan nama alat'
                                            />
                                            <Invalid errormsg={"Tolong masukkan nama alat."} />
                                        </div>
                                    </div>
                                    <div className='col-sm'>
                                        <div className="form-group mb-3"> 
                                            <label className="form-label fontw600" htmlFor="gambaralat">Gambar Alat</label>
                                            <DropFile name={"gambaralat"} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label fontw600" htmlFor="deskripsialat">Deskripsi Alat</label>
                                        <TextArea
                                        id="deskripsialat"
                                        name="deskripsialat"
                                        placeholder='Masukkan deskripsi alat'
                                        rows={2}
                                        />
                                        <Invalid errormsg={"Tolong masukkan deskripsi alat."}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto d-center'>
                                <button className='btn btn-danger'><img src={Trash}/></button>
                            </div>
                        </div>
                    </div> 
                    <button className='b-none p-label mb-3'><img src={Add}/>Tambahkan Alat Lain</button>
                    <hr className='m-0'/>
                </div>
                <div className='form-label fontw600 mt-3'>Saran Untuk Tempat Penanaman</div>
                <div className='card px-4 py-3 mb-3'>
                    <div className="form-group mb-3">
                        <label className="form-label fontw600" htmlFor="saranpenanaman">Deskripsi</label>
                        <TextArea
                        id="saranpenanaman"
                        name="saranpenanaman"
                        placeholder='Masukkan saran untuk tempat penanaman'
                        rows={2}
                        />
                        <Invalid errormsg={"Tolong masukkan saran untuk tempat penanaman."}/>
                    </div>
                    <label className="form-label fontw600" htmlFor="gambarsaran">Foto</label>
                    <DragFile 
                        name={'gambarsaran'}
                    />
                </div>
                <div className='form-label fontw600'>Langkah Penanaman</div>
                <div>
                    <div className='card px-4 py-3 mb-3'>
                        <div className='row'>
                            <div className='col container'>
                                <div className='row'>
                                    <div className='col-sm'>
                                        <div className="form-group mb-3">
                                            <label className="form-label fontw600" htmlFor="namalangkah">Nama Langkah</label>
                                            <Input
                                            id="namalangkah"
                                            name="namalangkah"
                                            placeholder='Masukkan nama langkah'
                                            />
                                            <Invalid errormsg={"Tolong masukkan nama langkah-langkah penanaman."} />
                                        </div>
                                    </div>
                                    <div className='col-sm'>
                                        <div className="form-group mb-3">
                                            <label className="form-label fontw600" htmlFor="gambarlangah">Foto</label>
                                            <DropFile name={"gambarlangkah"} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label fontw600" htmlFor="deskripsilangkah">Deskripsi Langkah</label>
                                        <TextArea
                                        id="deskripsilangkah"
                                        name="deskripsilangkah"
                                        placeholder='Masukkan deskripsi langkah penanaman'
                                        rows={2}
                                        />
                                        <Invalid errormsg={"Tolong masukkan deskripsi langkah penanaman."}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-auto d-center'>
                                <button className='btn btn-danger'><img src={Trash}/></button>
                            </div>
                        </div>
                    </div>
                    <button className='b-none p-label mb-3'><img src={Add}/>Tambahkan Langkah Penanaman</button>
                    <hr className='m-0'/>
                </div>
                <div className="form-group mb-3 mt-3">
                    <label className="form-label fontw600" htmlFor="caramerawat">Cara merawat tanaman</label>
                    <TextArea
                    id="caramerawat"
                    name="caramerawat"
                    placeholder='Masukkan cara merawat tanaman'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan cara merawat tanaman."}/>
                </div>
                <div className="form-group row justify-content-end">
                    <button type="submit" className="btn btn-outline-green col-auto m12">
                        Batal
                    </button>
                    <button type="submit" className="btn btn-green col-auto m12">
                        Tambah
                    </button>
                </div>
            </FormLayout>
        </div>
        </Layout>
    )
}

export default TambahTanaman