import LineChart from "../../components/LineChart/LineChart";
import Table from "../../components/Table/Table";
import Layout from "../../layout/Layout";
import DashboardCard from "../../components/dashboard card/dashboardCard";
export default function TestPage(){

    const headers= ["Ngetest ioni satu", "kedua", "Ketiga", "keempat"]


    // begin : dummy data untuk data pada chart
    const generateRandomData = (count) => {
        return Array.from({ length: count }, (_, index) => ({
            month: (index + 1).toString(),
            value: Math.floor(Math.random() * 451),
        }));
    };

    const data = [
        {
            dataSetName: 'bulan ini',
            data: generateRandomData(9),
            color: '#4B567E',
        },
        {
            dataSetName: 'bulan lalu',
            data: generateRandomData(9),
            color: '#847042',
        },
    ];
    //  end : dummy data untuk data pada chart
    
    
    return(
        <>
        <Layout pagetitle={"nama header"} breadcrumbs={"Menanam Tanaman / Chart"}>
            <div>
                <div className="mt-2" style={{ width: '800px', height: '400px' }}>
                    <LineChart data={data} />
                </div>
            </div>
            
        </Layout>
        
      <div style={{ padding: "30px" }}></div>
    </>
  );
}
