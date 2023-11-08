import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './LineChart.module.css';
import { useEffect } from 'react';

const LineChart = ({ data }) => {
    const labels = data[0].data.map((item) => item.month);

    const datasets = data.map((dataset) => ({
        label: dataset.dataSetName,
        data: dataset.data.map((item) => item.value),
        fill: 'origin',
        backgroundColor: `${dataset.color}80`, // Appending '20' for 0.2 opacity
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
