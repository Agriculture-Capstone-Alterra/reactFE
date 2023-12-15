import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './LineChart.module.css';
import { useEffect } from 'react';

const LineChart = ({ data }) => {
    // untuk props data, kurang lebih seperti berikut struktur array yang harus diberikan : 
    // data = [
    //      {dataSetName:'bulan ini',data : [{month:'1', value:'100'}, {month:'2',value:'121'}], color : "#4B567E"},
    //      {dataSetName:'bulan lalu',data : [{month:'1', value:'100'}, {month:'2',value:'121'}], color : "#4B567E"},
    // ]
    // dimana dataSetName akan dijadikan nama label / legend pada line chart, data berisi array yang menampung object beratribut month (string) dan value (numeric)
    // color jadi field yang menampung warna untuk legends nya, berikan dalam format hexadesimal

    // const labels = data[0].data.map((item) => item.month);
    const labels = data[0].data.map((item) => item.date);

    const datasets = data.map((dataset) => ({
        label: dataset.dataSetName,
        data: dataset.data.map((item) => item.total),
        fill: 'origin',
        backgroundColor: `${dataset.color}80`,
        borderColor: dataset.color,
        cubicInterpolationMode: 'monotone',
        tension: 0.5,
    }));

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    };

    return (
        <div className={styles.lineChartCard}>
            <div className={styles.chartTitleWrapper}>
                <p className={styles.customTitle}>Analisa Penanaman</p>
                <div className={styles.customLegends}>
                    {data.map((dataset, index) => (
                        <div className={styles.legendItem} key={index}>
                            <span
                                className={`${styles.legendColor}`}
                                style={{ backgroundColor: dataset.color }}
                            ></span>
                            {dataset.dataSetName}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.chartWrapper}>
                <Line data={{ labels, datasets }} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
