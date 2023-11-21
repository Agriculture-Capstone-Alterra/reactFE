import LineChart from "../../components/LineChart/LineChart";
import Table from "../../components/Table/Table";
import Layout from "../../layout/Layout";
import DashboardCard from "../../components/dashboard card/dashboardCard";
export default function TestPage() {
  const headers = ["Ngetest ioni satu", "kedua", "Ketiga", "keempat"];

  // begin : dummy data untuk data pada chart
  const generateRandomData = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      month: (index + 1).toString(),
      value: Math.floor(Math.random() * 451),
    }));
  };

  const data = [
    {
      dataSetName: "bulan ini",
      data: generateRandomData(9),
      color: "#4B567E",
    },
    {
      dataSetName: "bulan lalu",
      data: generateRandomData(9),
      color: "#847042",
    },
  ];
  //  end : dummy data untuk data pada chart

  // begin : dummy data untuk breadcrumb
  const breadcrumbsobjectexample = [
    {
      crumblink: "/linkpage1",
      crumbname: "Nama Page1",
    },
    {
      crumblink: "/linkpage2",
      crumbname: "Nama Page2",
    },
    {
      crumblink: "/linkpage3",
      crumbname: "Nama Page Final",
    },
  ];
  //end : dummy data untuk breadcrumbs

  return (
    <>
      <Layout pagetitle={"Nama Header"} breadcrumbs={breadcrumbsobjectexample}>
        {/* begin main content */}
        <div>
          <div className="mt-2" style={{ width: "800px", height: "400px" }}>
            <LineChart data={data} />
          </div>
        </div>
        {/* end main content */}
      </Layout>
    </>
  );
}
