import Layout from "../../layout/Layout";
import Select from "../../components/Select";
import "./tambahPengingat.css";

const tambahPengingat = () => {
  const namaTanaman = [
    {
      label: "Bayam",
      value: "Bayam",
    },
    {
      label: "Sawi",
      value: "Sawi",
    },
  ];
  const breadcrumbsobjectexample = [
    {
      crumbname: "Pengingat Menanam Tanaman",
      crumblink: "/tambahPengingat",
    },
    {
      crumbname: "Tambah Pengingat Tanaman",
      crumblink: "/tambahPengingat",
    },
  ];
  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container">
          <h1 className="tambahPengingat-parent mb-4">Tambah Data Pengingat</h1>
          <label className="tambahPengingat-label d-flex">Nama Tanaman</label>
          <Select
            value={""}
            className={"form-select tambahPengingat-select"}
            options={namaTanaman}
            title={"Pilih nama tanaman"}
          />
        </form>
      </Layout>
    </>
  );
};

export default tambahPengingat;
