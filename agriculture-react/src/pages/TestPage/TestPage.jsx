import LineChart from "../../components/LineChart/LineChart";
import Table from "../../components/Table/Table";

export default function TestPage(){

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
        <div style={ {padding:"30px", backgroundColor: "grey"}}>
            <Table>
                
            </Table>
            <div className="mt-2" style={{ width: '800px', height: '400px' }}>
                {/* <LineChart data={data} /> */}
                <LineChart data={data} />
            </div>
        </div>
        
        </>
    )
}