import './style.css'
import FormLayout from '../../../components/FormLayout'
import Input from '../../../components/Input'
import TextArea from '../../../components/Textarea'
import Select from '../../../components/Select'
import Invalid from '../../../components/Invalid'
import Layout from '../../../layout/Layout'
import DragEdit from '../../../components/DragEdit'
import { useNavigate, useParams } from 'react-router-dom'
import FormCardTambah from '../../../components/FormCardTambah'
import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../../api/axios'

const EditTanaman = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
    const breadcrumEditTanaman = [
        {
            crumblink : "/menanam-tanaman",
            crumbname : "Menanam Tanaman",
        },
        {
            crumblink : "/menanam-tanaman/edit-tanaman",
            crumbname : "Edit Tanaman",
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
        } catch (error) {
          console.error('Error fetching data from API:', error);
        }
    };
    const getDataEdit = async () => {
        try {
            const response = await axiosWithAuth.get(`plants/${id}`);
            const tanaman = response.data.data;
            setNamaTanaman(tanaman.name)
            setJenisTanaman(tanaman.plant_type_id)
            setDeskTanaman(tanaman.description)
            const gambarTanamanFiles = await tanaman.plant_images.map((tanamanGambar) => {
                const imgURL = tanamanGambar.image_path;
                const fileName=  imgURL.substring(imgURL.lastIndexOf('/') + 1);
                return {
                    id: tanamanGambar.id,
                    name: fileName,
                    src: tanamanGambar.image_path,
                };
            });
            setGambarTanaman(gambarTanamanFiles)
            setVarietasTanaman(tanaman.variety)
            setTeknoTanaman(tanaman.technology_id)
            setKemarauAwal(tanaman.dry_season_start_plant)
            setHujanAwal(tanaman.rainy_season_start_plant)
            setKemarauAkhir(tanaman.dry_season_finish_plant)
            setHujanAkhir(tanaman.rainy_season_finish_plant)
            setHama(tanaman.fertilizer_info)
            setPupuk(tanaman.pest_info)
            setSaran(tanaman.planting_suggestions)
            setRawat(tanaman.how_to_maintain)
            const tools = await tanaman.planting_tools;
            setAlatPenanaman(tools.map((getAlat) => ({
                id: getAlat.id,
                namaAlat: getAlat.name,
                gambarAlat: getAlat.image_path,
                deskripsiAlat: getAlat.description
            })))
            const guides = await tanaman.planting_guides
            setLangkahPenanaman(guides.map((getLangkah) => ({
                id: getLangkah.id,
                namaLangkah: getLangkah.name,
                gambarLangkah: getLangkah.image_path,
                deskripsiLangkah: getLangkah.description
            })))
            const gambarSaranFiles = await tanaman.planting_medium_images.map((saranGambar) => {
                const imgURL = saranGambar.image_path;
                const fileName=  imgURL.substring(imgURL.lastIndexOf('/') + 1);
                return {
                    id: saranGambar.id,
                    name: fileName,
                    src: saranGambar.image_path,
                };
            });
            setGambarSaran(gambarSaranFiles)
        } catch (error) {
            console.error('Error fetching data from API:', error);
        }
    };

    useEffect(()=>{
        getDataPlantType();
        getDataPlantTech();
        getDataEdit();
    },[])

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
    const hapusLangkahPenanaman = (idLangkah) => {
        setLangkahPenanaman((prevLangkah) =>
        prevLangkah.filter((langkah) => langkah.id !== idLangkah)
        );
    };
    const hapusAlatPenanaman = async (idAlat) => {
        setAlatPenanaman((prevAlat) =>
        prevAlat.filter((alat) => alat.id !== idAlat)
        );
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
                const plantResponse = await axiosWithAuth.put(`plants/${id}`, {
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
                    id: langkah.id,
                    description: langkah.deskripsiLangkah,
                    name: langkah.namaLangkah,
                    })),
                    planting_tools: alatPenanaman.map((alat) => ({
                    id: alat.id,
                    description: alat.deskripsiAlat,
                    name: alat.namaAlat,
                    })),
                });

                const response = await axiosWithAuth.get(`plants/${id}`);
                const tanaman = response.data.data;

                const toolData = tanaman.planting_tools;
                const newTools = toolData.filter(tool => !tool.image_path);
                const idsToolArray = newTools.map((tool) => tool.id);
                const toolIDs = idsToolArray.join(',');
                console.log('id alat baru,', toolIDs)
                if(idsToolArray.length > 0){
                    const plantingToolsFormData = new FormData();
                    plantingToolsFormData.append('plant_id', id);
                    plantingToolsFormData.append('planting_tool_ids', toolIDs);
                    for (const imgalat of alatPenanaman) {
                        //console.log('img alat,', imgalat.gambarAlat)
                        //console.log('img alat src,', imgalat.gambarAlat.src)
                        if(imgalat.gambarAlat.src === undefined && imgalat.gambarAlat !== null && imgalat.gambarAlat !== ''){
                            //console.log('img alat blob,', imgalat.gambarAlat)
                            console.log('img alat blob status true')
                        }else if(imgalat.gambarAlat.src !== null && imgalat.gambarAlat !== ''){
                            // console.log('img alat base64,', imgalat.gambarAlat.src)
                            // console.log('img alat base64 status true')
                            const base64toRes = await fetch(imgalat.gambarAlat.src)
                            const base64toBlob = await base64toRes.blob()
                            plantingToolsFormData.append('image_files', base64toBlob);
                        }else{
                            console.log('img alat kosong')
                        }
                    }
                    const plantingToolsResponse = await axiosWithAuth.post(`planting-tools/upload/${id}`, plantingToolsFormData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                }else{}

                const guideData = tanaman.planting_guides;
                const newGuides = guideData.filter(tool => !tool.image_path);
                const idsGuideArray = newGuides.map((guide) => guide.id);
                const guideIDs = idsGuideArray.join(',');
                console.log('id langkah baru,', guideIDs)
                if(idsGuideArray.length > 0){
                    const plantingGuideFormData = new FormData();
                    plantingGuideFormData.append('plant_id', id);
                    plantingGuideFormData.append('planting_guide_ids', guideIDs);
                    for (const imglangkah of langkahPenanaman) {
                        if(imglangkah.gambarLangkah.src === undefined && imglangkah.gambarLangkah !== null && imglangkah.gambarLangkah !== ''){
                            // console.log('img blob,', imglangkah.gambarLangkah)
                            console.log('img blob status true')
                        }else if(imglangkah.gambarLangkah.src !== null && imglangkah.gambarLangkah !== ''){
                            // console.log('img base64,', imglangkah.gambarLangkah.src)
                            // console.log('img base64 status true')
                            const base64toRes = await fetch(imglangkah.gambarLangkah.src)
                            const base64toBlob = await base64toRes.blob()
                            plantingGuideFormData.append('image_files', base64toBlob);
                        }else{
                            console.log('img langkah kosong')
                        }
                    }
                    const plantingGuideResponse = await axiosWithAuth.post(`planting-guides/upload/${id}`, plantingGuideFormData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                }else{}
                
                navigate('/menanam-tanaman')
            } catch (error) {
                console.error('Error updating form:', error);
            }
        }

    };
    const timestampRegExp = /\b\d{13}\b/;
    const handleRemoveImagePlant = async (id) => {
        try {
            if(timestampRegExp.test(id)){
                alert('Reload website!')
            } else {
                const response = await axiosWithAuth.delete(`plant-images/${id}`);
                if (response.status === 200) {
                    const updatedImages = gambarTanaman.filter((image) => image.id !== id);
                    setGambarTanaman(updatedImages);
                } else {
                    console.error('Failed to delete image:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error deleting image:', error.message);
        }
    };
    const handleRemoveImageSugg = async (id) => {
        try {
            if(timestampRegExp.test(id)){
                alert('Reload website!')
            }else{
                const response = await axiosWithAuth.delete(`planting-medium-images/${id}`);
                if (response.status === 200) {
                    const updatedImages = gambarSaran.filter((image) => image.id !== id);
                    setGambarSaran(updatedImages);
                } else {
                    console.error('Failed to delete image:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Error deleting image:', error.message);
        }
    };

    return (
        <Layout pagetitle={"Menanam Tanaman"} breadcrumbs={breadcrumEditTanaman}>
        <div className='mt-2' style={{ padding:'0px 0px 30px 30px', marginRight:'0'}}>
            <FormLayout onSubmit={handleSubmit}>
                <h4 className='fontw800'>
                    Edit Tanaman
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
                <DragEdit
                    name={'gambartanaman'}
                    value={gambarTanaman}
                    setValue={setGambarTanaman}
                    onDelete={handleRemoveImagePlant}
                    idPlant={id}
                    linkApi={`plant-images`}
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
                    <DragEdit
                        name={'gambarsaran'}
                        value={gambarSaran}
                        setValue={setGambarSaran}
                        onDelete={handleRemoveImageSugg}
                        idPlant={id}
                        linkApi={`planting-medium-images`}
                    />
                </div>
                <div className='form-label fontw600'>Langkah Penanaman</div>
                <FormCardTambah
                    data={langkahPenanaman}
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
                        Edit
                    </button>
                </div>
            </FormLayout>
        </div>
        </Layout>
    )
}

export default EditTanaman