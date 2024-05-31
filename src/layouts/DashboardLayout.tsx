import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const DashboardLayout = () => {
    const barData = {
        labels: ['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
        datasets: [
            {
                label: 'Usage',
                data: [12, 19, 3, 5, 2, 3, 9, 6, 5, 4, 12, 13, 14, 8, 10, 12],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Solar Generation',
                data: [2, 3, 4, 5, 6, 7, 8, 9, 6, 5, 4, 3, 2, 1, 5, 4],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
            {
                label: 'Forecast',
                data: [3, 4, 6, 8, 9, 7, 6, 5, 4, 3, 5, 6, 8, 9, 10, 11],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Carbon Footprint last year',
                data: [65, 59, 80, 81, 56, 55, 40, 42, 50, 70, 60, 75],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Carbon Footprint this year',
                data: [45, 39, 60, 61, 46, 35, 30, 32, 40, 50, 60, 65],
                fill: false,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
        ],
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="text-center text-2xl font-bold mb-4">Guardians of the Galaxy Team 🔥</div>
                <div className="text-center text-sm text-gray-500 mb-4">Created by Thor Odinson</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <div className="flex flex-wrap justify-around bg-gray-200 p-4 rounded-lg">
                            <div className="w-1/4 text-center">
                                <div className="text-yellow-500 text-4xl">1,560/1,660</div>
                                <div className="text-gray-500 text-sm">Total Member</div>
                            </div>
                            <div className="w-1/4 text-center">
                                <div className="text-blue-500 text-4xl">16.32 kWh</div>
                                <div className="text-gray-500 text-sm">Total Usage</div>
                            </div>
                            <div className="w-1/4 text-center">
                                <div className="text-green-500 text-4xl">1.32 kWh</div>
                                <div className="text-gray-500 text-sm">Total Solar Generation</div>
                            </div>
                            <div className="w-1/4 text-center">
                                <div className="text-green-700 text-4xl">420 kWh</div>
                                <div className="text-gray-500 text-sm">Total Saved</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-end">
                            <button className="bg-gray-300 p-2 rounded-lg">August 2023 ▼</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
                        <div className="text-lg font-bold mb-2">Consumption</div>
                        <Bar data={barData} />
                    </div>
                    <div className="col-span-1 bg-white p-4 rounded-lg shadow-md">
                        <div className="text-lg font-bold mb-2">Environment Impact</div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <div className="text-red-500 text-3xl">2.256 kg CO2e</div>
                                <div className="text-gray-500 text-sm">Emission Last Year</div>
                            </div>
                            <div>
                                <div className="text-red-700 text-3xl">2.156 kg CO2e</div>
                                <div className="text-gray-500 text-sm">Emission This Year</div>
                            </div>
                        </div>
                        <Line data={lineData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
