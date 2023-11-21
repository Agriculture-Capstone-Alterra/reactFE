import Layout from "../../layout/Layout";
import Select from "../../components/Select";
import Account from "../../components/Account";
import "./editPengingat.css";
import { useState } from "react";

const editPengingat = () => {
  const [selectedTanaman, setSelectedTanaman] = useState("");
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
      crumblink: "/editTanaman",
    },
    {
      crumbname: "Edit Pengingat Tanaman",
      crumblink: "/editTanaman",
    },
  ];

  return (
    <>
      <Layout
        pagetitle={"Pengingat Tanaman"}
        breadcrumbs={breadcrumbsobjectexample}>
        <form className="container">
          <h1 className="editTanaman-parent mb-4">Edit Data Pengingat</h1>
          <label className="editTanaman-label d-flex">Nama Tanaman</label>
          <Select
            value={selectedTanaman}
            className={"form-select editTanaman-select"}
            options={namaTanaman}
            title={"Pilih nama tanaman"}
          />
        </form>
      </Layout>
    </>
  );
};

export default editPengingat;
