import './style.css'
import FormLayout from '../../../components/FormLayout'
import Input from '../../../components/Input'
import TextArea from '../../../components/Textarea'
import Select from '../../../components/Select'
import Invalid from '../../../components/Invalid'
import Layout from '../../../layout/Layout'
import DragFile from '../../../components/DragFile'
import { useNavigate } from 'react-router-dom'
import FormCardTambah from '../../../components/FormCardTambah'
import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../../api/axios'

const TambahTanaman = () => {
    const navigate = useNavigate();
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
    const [jenisTanamanOptions, setJenisTanamanOptions] = useState([]);
    const [teknologiTanamanOptions, setTeknologiTanamanOptions] = useState([]);
    const getDataPlantType = async () => {
        try {
          const response = await axiosWithAuth.get('plant-types')
          const dataFromApi = response.data.data;
          const transformedData = dataFromApi.map(item => ({
            value: item.id,
            label: item.name,
          }));
          setJenisTanamanOptions(transformedData);
          console.log('get type:', transformedData);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
    };
    const getDataPlantTech = async () => {
        try {
          const response = await axiosWithAuth.get('planting-techs')
          const dataFromApi = response.data.data;
          const transformedData = dataFromApi.map(item => ({
            value: item.id,
            label: item.name,
          }));
          setTeknologiTanamanOptions(transformedData);
          console.log('get tech:', transformedData);
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
    };

    useEffect(()=>{
        getDataPlantType();
        getDataPlantTech();
    },[])

    const [namaTanaman, setNamaTanaman] = useState('');
    const [jenisTanaman, setJenisTanaman] = useState('');
    const [deskTanaman, setDeskTanaman] = useState('');
    const [gambarTanaman, setGambarTanaman] = useState([]);
    const [varietasTanaman, setVarietasTanaman] = useState('');
    const [teknoTanaman, setTeknoTanaman] = useState('');
    const [kemarauAwal, setKemarauAwal] = useState('');
    const [hujanAwal, setHujanAwal] = useState('');
    const [kemarauAkhir, setKemarauAkhir] = useState('');
    const [hujanAkhir, setHujanAkhir] = useState('');
    const [hama, setHama] = useState('');
    const [pupuk, setPupuk] = useState('');
    const [alatPenanaman, setAlatPenanaman] = useState([
        { id: 0, namaAlat: '', gambarAlat: null, deskripsiAlat: '' },
    ]);
    const [saran, setSaran] = useState('');
    const [gambarSaran, setGambarSaran] = useState([]);
    const [langkahPenanaman, setLangkahPenanaman] = useState([
        { id: 0, namaLangkah: '', gambarLangkah: null, deskripsiLangkah: '' },
    ]);
    const [rawat, setRawat] = useState('');
    
    const tambahkanLangkahPenanaman = () => {
        setLangkahPenanaman((prevLangkah) => [
        ...prevLangkah,
        {
            id: prevLangkah.length + 1,
            namaLangkah: '',
            gambarLangkah: null,
            deskripsiLangkah: '',
        },
        ]);
    };
    const tambahkanAlatPenanaman = () => {
        setAlatPenanaman((prevAlat) => [
        ...prevAlat,
        {
            id: prevAlat.length + 1,
            namaAlat: '',
            gambarAlat: null,
            deskripsiAlat: '',
        },
        ]);
    };
    const hapusLangkahPenanaman = (id) => {
        setLangkahPenanaman((prevLangkah) =>
        prevLangkah.filter((langkah) => langkah.id !== id)
        );
    };
    const hapusAlatPenanaman = (id) => {
        setAlatPenanaman((prevAlat) =>
        prevAlat.filter((alat) => alat.id !== id)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(namaTanaman===''
        || jenisTanaman===''
        || deskTanaman===''
        || gambarTanaman===null
        || varietasTanaman===''
        || teknoTanaman===''
        || kemarauAwal===''
        || kemarauAkhir===''
        || hujanAwal===''
        || hujanAkhir===''
        || hama===''
        || pupuk===''
        || gambarSaran===null
        || saran===''
        || rawat===''
        || langkahPenanaman.namaLangkah===''
        || langkahPenanaman.gambarLangkah===null
        || langkahPenanaman.deskripsiLangkah===''
        || alatPenanaman.namaAlat===''
        || alatPenanaman.gambarAlat===null
        || alatPenanaman.deskripsiAlat===''
        ){
            alert('Tolong lengkapi form!')
        }else{
            try {
                // Step 1
                const plantResponse = await axiosWithAuth.post('plants', {
                    description: deskTanaman,
                    dry_season_finish_plant: kemarauAkhir,
                    dry_season_start_plant: kemarauAwal,
                    fertilizer_info: pupuk,
                    how_to_maintain: rawat,
                    name: namaTanaman,
                    pest_info: hama,
                    plant_type_id: parseInt(jenisTanaman),
                    planting_medium_suggestions: saran,
                    planting_suggestions: saran,
                    rainy_season_finish_plant: hujanAkhir,
                    rainy_season_start_plant: hujanAwal,
                    technology_id: parseInt(teknoTanaman),
                    variety: varietasTanaman,
                    planting_guides: langkahPenanaman.map((langkah) => ({
                    description: langkah.deskripsiLangkah,
                    name: langkah.namaLangkah,
                    })),
                    planting_tools: alatPenanaman.map((alat) => ({
                    description: alat.deskripsiAlat,
                    name: alat.namaAlat,
                    })),
                });
            
                const plantId = plantResponse.data.data.id;
            
                // Step 2
                const plantFormData = new FormData();
                for (const image of gambarTanaman) {
                    const base64toRes = await fetch(image.src)
                    const base64toBlob = await base64toRes.blob()
                    console.log("images load, ", base64toBlob)
                    plantFormData.append('image_files', base64toBlob);
                    plantFormData.append('plant_id', plantId);
                }
                const plantImagesResponse = await axiosWithAuth.post(`plant-images/${plantId}`, plantFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                const toolData = plantResponse.data.data.planting_tools;
                const idsToolArray = toolData.map((tool) => tool.id);
                const toolIDs = idsToolArray.join(',');
                // Step 3: Upload images planting tools
                const plantingToolsFormData = new FormData();
                plantingToolsFormData.append('plant_id', plantId);
                plantingToolsFormData.append('planting_tool_ids', toolIDs);
                for (const imgalat of alatPenanaman) {
                    const base64toRes = await fetch(imgalat.gambarAlat.src)
                    const base64toBlob = await base64toRes.blob()
                    console.log("images load, ", base64toBlob)
                    plantingToolsFormData.append('image_files', base64toBlob);
                }
                const plantingToolsResponse = await axiosWithAuth.post(`planting-tools/upload/${plantId}`, plantingToolsFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                // Step 4
                const plantSuggData = new FormData();
                for (const imgsaran of gambarSaran) {
                    const base64toRes = await fetch(imgsaran.src)
                    const base64toBlob = await base64toRes.blob()
                    console.log("images load, ", base64toBlob)
                    plantSuggData.append('image_files', base64toBlob);
                    plantSuggData.append('plant_id', plantId);
                }
                const plantSuggResponse = await axiosWithAuth.post(`planting-medium-images/${plantId}`, plantSuggData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                const guideData = plantResponse.data.data.planting_guides;
                const idsGuideArray = guideData.map((guide) => guide.id);
                const guideIDs = idsGuideArray.join(',');
                // Step 5: Upload images planting guides
                const plantingGuideFormData = new FormData();
                plantingGuideFormData.append('plant_id', plantId);
                plantingGuideFormData.append('planting_guide_ids', guideIDs);
                for (const imglangkah of langkahPenanaman) {
                    const base64toRes = await fetch(imglangkah.gambarLangkah.src)
                    const base64toBlob = await base64toRes.blob()
                    console.log("images load, ", base64toBlob)
                    plantingGuideFormData.append('image_files', base64toBlob);
                }
                const plantingGuideResponse = await axiosWithAuth.post(`planting-guides/upload/${plantId}`, plantingGuideFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                navigate('/menanam-tanaman')
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
            
    };
      
    const handleAlatPenanamanChange = (index, field, value) => {
        const updatedData = [...alatPenanaman];
        updatedData[index] = {
        ...updatedData[index],
        [field]: value,
        };
        setAlatPenanaman(updatedData);
    };
    
    const handleLangkahPenanamanChange = (index, field, value) => {
        const updatedData = [...langkahPenanaman];
        updatedData[index] = {
        ...updatedData[index],
        [field]: value,
        };
        setLangkahPenanaman(updatedData);
    };
    const handleOnClick = () => {
        navigate(`/menanam-tanaman`);
    };
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
                    value={namaTanaman}
                    onChange={(e) => setNamaTanaman(e.target.value)}
                    placeholder='Masukkan nama tanaman'
                    />
                    <Invalid errormsg={"Tolong masukkan nama tanaman."} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="jenistanaman">Jenis Tanaman</label>
                    <Select
                        id="jenistanaman"
                        name="jenistanaman"
                        value={jenisTanaman}
                        onChange={(e) => setJenisTanaman(e.target.value)}
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
                    value={deskTanaman}
                    onChange={(e) => setDeskTanaman(e.target.value)}
                    placeholder='Masukkan deskripsi tanaman'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan deskripsi tanaman."}/>
                </div>
                <label className="form-label fontw600" htmlFor="gambartanaman">Gambar Tanaman</label> 
                <DragFile 
                    name={'gambartanaman'}
                    value={gambarTanaman}
                    setValue={setGambarTanaman}
                /> 
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="varietastanaman">Varietas Tanaman</label>
                    <Input
                    id="varietastanaman"
                    name="varietastanaman"
                    value={varietasTanaman}
                    onChange={(e) => setVarietasTanaman(e.target.value)}
                    placeholder='Masukkan varietas tanaman'
                    />
                    <Invalid errormsg={"Tolong masukkan varietas tanaman."}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="teknologitanaman">Teknologi Tanaman</label>
                    <Select
                        id="teknologitanaman"
                        name="teknologitanaman"
                        value={teknoTanaman}
                        onChange={(e) => setTeknoTanaman(e.target.value)}
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
                            value={kemarauAwal}
                            onChange={(e) => setKemarauAwal(e.target.value)}
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="akhirkemarau">Akhir Penanaman</label>
                        <Input
                            type="date"
                            id="akhirkemarau"
                            name="akhirkemarau"
                            value={kemarauAkhir}
                            onChange={(e) => setKemarauAkhir(e.target.value)}
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
                            value={hujanAwal}
                            onChange={(e) => setHujanAwal(e.target.value)}
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                    <div className="form-group col-md-3 mb-3 d-grid">
                        <label className="form-label-musim" htmlFor="akhirhujan">Akhir Penanaman</label>
                        <Input
                            type="date"
                            id="akhirhujan"
                            name="akhirhujan"
                            value={hujanAkhir}
                            onChange={(e) => setHujanAkhir(e.target.value)}
                        />
                        <Invalid errormsg={"Tolong masukkan tanggal."}/>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label fontw600" htmlFor="informasihama">Informasi Hama dan Penanggulangannya</label>
                    <TextArea
                    id="informasihama"
                    name="informasihama"
                    value={hama}
                    onChange={(e) => setHama(e.target.value)}
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
                    value={pupuk}
                    onChange={(e) => setPupuk(e.target.value)}
                    placeholder='Masukkan informasi nutrisi dan pupuk'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan informasi nutrisi dan pupuk."}/>
                </div>
                <div className='form-label fontw600'>Panduan Menanam</div>
                <p className='p-label'>Alat yang Dibutuhkan</p>
                <FormCardTambah
                    data={alatPenanaman}
                    setData={setAlatPenanaman}
                    onTambah={tambahkanAlatPenanaman}
                    onHapus={hapusAlatPenanaman}
                    onChange={handleAlatPenanamanChange}
                    label="Alat Penanaman"
                    namelabel='Alat'
                />
                <div className='form-label fontw600 mt-3'>Saran Untuk Tempat Penanaman</div>
                <div className='card card-n px-4 py-3 mb-3'>
                    <div className="form-group mb-3">
                        <label className="form-label fontw600" htmlFor="saranpenanaman">Deskripsi</label>
                        <TextArea
                        id="saranpenanaman"
                        name="saranpenanaman"
                        value={saran}
                        onChange={(e) => setSaran(e.target.value)}
                        placeholder='Masukkan saran untuk tempat penanaman'
                        rows={2}
                        />
                        <Invalid errormsg={"Tolong masukkan saran untuk tempat penanaman."}/>
                    </div>
                    <label className="form-label fontw600" htmlFor="gambarsaran">Foto</label>
                    <DragFile 
                        name={'gambarsaran'}
                        value={gambarSaran}
                        setValue={setGambarSaran}
                    />
                </div>
                <div className='form-label fontw600'>Langkah Penanaman</div>
                <FormCardTambah
                    data={langkahPenanaman}
                    setData={setLangkahPenanaman}
                    onTambah={tambahkanLangkahPenanaman}
                    onHapus={hapusLangkahPenanaman}
                    onChange={handleLangkahPenanamanChange}
                    label="Langkah Penanaman"
                    namelabel='Langkah'
                />
                <div className="form-group mb-3 mt-3">
                    <label className="form-label fontw600" htmlFor="caramerawat">Cara merawat tanaman</label>
                    <TextArea
                    id="caramerawat"
                    name="caramerawat"
                    value={rawat}
                    onChange={(e) => setRawat(e.target.value)}
                    placeholder='Masukkan cara merawat tanaman'
                    rows={2}
                    />
                    <Invalid errormsg={"Tolong masukkan cara merawat tanaman."}/>
                </div>
                <div className="form-group row justify-content-end">
                    <div className='col-auto m12'>
                    <button type="button" className="btn btn-outline-green" onClick={() => handleOnClick()}>Batal</button>
                    </div>
                    <button type='submit' className="btn btn-green col-auto m12">
                        Tambah
                    </button>
                </div>
            </FormLayout>
        </div>
        </Layout>
    )
}

export default TambahTanaman