import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { FaPaperPlane } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { FaSearch } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip
);

const Dashboard = () => {
  // Data for Bar Chart
  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [4, 8, 6, 10, 5, 12, 9],
        backgroundColor: '#4F46E5',
      },
    ],
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Investment', 'Entertainment', 'Bill Expenses', 'Others'],
    datasets: [
      {
        data: [300, 150, 200, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Data for Wave/Line Chart
  const waveData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance',
        data: [100, 450, 150, 300, 90, 500, 200],
        borderColor: '#4F46E5',
        fill: true,
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-white text-slate-700 p-4 hidden lg:block ">
        <div className="flex items-center mb-6 my-4">
          <img src="dist\assets\icon.png" alt="Logo" className="w-8 h-8 mr-2" />
          <h2 className="text-2xl font-semibold">BankDash.</h2>
        </div>
        <br />
        <ul>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp;<i className="fas fa-tachometer-alt mr-2"></i>
            &nbsp;&nbsp;&nbsp;Dashboard
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-exchange-alt mr-2"></i>{' '}
            &nbsp;&nbsp;&nbsp;Transactions
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-university mr-2"></i>{' '}
            &nbsp;&nbsp;&nbsp;Accounts
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-chart-line mr-2"></i>{' '}
            &nbsp;&nbsp;&nbsp;Investments
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-credit-card mr-2"></i>{' '}
            &nbsp;&nbsp;&nbsp;Credit Cards
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-hand-holding-usd mr-2"></i>
            &nbsp;&nbsp;&nbsp;Loans
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-concierge-bell mr-2"></i>{' '}
            &nbsp;&nbsp;&nbsp;Services
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-gift mr-2"></i>
            &nbsp;&nbsp;&nbsp;My Privileges
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
          <li className="relative flex items-center mb-4 text-lg cursor-pointer hover:text-blue-500 group">
            &nbsp;&nbsp; <i className="fas fa-cogs mr-2"></i>
            &nbsp;&nbsp;Setting
            <span className="absolute left-0 top-0 h-full rounded w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 rounded-2xl">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-white p-4 shadow-md flex-wrap">
          {/* Overview Title */}
          <h1 className="text-lg md:text-2xl font-medium text-slate-500 whitespace-nowrap">
            Overview
          </h1>

          {/* Right Section */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for something"
                className="border rounded-full px-4 py-2 pl-10 focus:outline-none bg-slate-100"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Settings Icon */}
              <div className="bg-gray-200 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex justify-center items-center">
                <img
                  src="dist/assets/setting.svg"
                  alt="settings"
                  className="object-cover h-full w-full rounded-full cursor-pointer"
                />
              </div>

              {/* Notification Icon */}
              <div className="bg-gray-200 h-10 w-10 sm:h-12 sm:w-12 rounded-full flex justify-center items-center">
                <img
                  src="dist/assets/notification.svg"
                  alt="notifications"
                  className="object-cover h-full w-full rounded-full cursor-pointer"
                />
              </div>

              {/* Profile Icon */}
              <div className="bg-gray-200 h-12 w-12 sm:h-14 sm:w-14 rounded-full flex justify-center items-center">
                <img
                  src="dist/assets/lady.png"
                  alt="profile"
                  className="object-cover h-full w-full rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="p-6 grid grid-cols-12 gap-6 bg-slate-100">
          {/* My Cards Section */}
          <div className="col-span-12">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              My Cards
              <span className="text-slate-500 font-medium text-lg float-right">
                see all
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-sm font-normal block">Balance</span>
                    <span className="text-2xl font-bold block">$5,243</span>
                  </div>
                  <img
                    src="dist/assets/Chip_Card@2x.png"
                    alt="Chip"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="flex justify-between items-center text-sm mb-6">
                  <div>
                    <span className="block uppercase tracking-wide text-xs">
                      Card Holder
                    </span>
                    <span className="font-semibold">Eddy Cusuma</span>
                  </div>
                  <div>
                    <span className="block uppercase tracking-wide text-xs">
                      Valid Thru
                    </span>
                    <span className="font-semibold">12/22</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold tracking-widest p-2 rounded-lg text-white">
                    3778 **** **** 1234
                  </div>
                  <img
                    src="dist/assets/mastercard.svg"
                    alt="Mastercard"
                    className="h-10 w-auto"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-green-500 to-teal-400 text-white shadow-lg rounded-3xl p-6 sm:mb-6 mb-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-between items-center mb-6 ">
                  <div>
                    <span className="text-sm font-normal block">Balance</span>
                    <span className="text-2xl font-bold block">$5,243</span>
                  </div>
                  <img
                    src="dist/assets/Chip_Card@2x.png"
                    alt="Chip"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="flex justify-between items-center text-sm mb-6">
                  <div>
                    <span className="block uppercase tracking-wide text-xs">
                      Card Holder
                    </span>
                    <span className="font-semibold">Eddy Cusuma</span>
                  </div>
                  <div>
                    <span className="block uppercase tracking-wide text-xs">
                      Valid Thru
                    </span>
                    <span className="font-semibold">12/22</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold tracking-widest p-2 rounded-lg text-white">
                    3778 **** **** 1234
                  </div>
                  <img
                    src="dist/assets/mastercard.svg"
                    alt="Mastercard"
                    className="h-10 w-auto"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative">
                {/* Title outside the card */}
                <h3 className="absolute sm:top-[-40px] top-[-40px] left-[-10px]  px-2 py-1 font-bold text-slate-500 text-base block mb-2">
                  Recent Transaction
                </h3>
                <div className="bg-white text-black shadow-lg rounded-3xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="dist/assets/cardDeposit.svg"
                          alt="Amazon"
                          className="h-12 w-12 mr-3"
                        />
                        <div>
                          <span className="block font-semibold">
                            Deposit from my Card
                          </span>
                          <span className="block text-sm text-gray-400">
                            28 January 2021
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-red-400">-$850.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="dist/assets/paypal.svg"
                          alt="Starbucks"
                          className="h-12 w-12 mr-3"
                        />
                        <div>
                          <span className="block font-semibold">
                            Deposit Paypal
                          </span>
                          <span className="block text-sm text-gray-400">
                            21 January 2021
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-green-400">+$2,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="dist/assets/Jemi.svg"
                          alt="Uber"
                          className="h-12 w-12 mr-3"
                        />
                        <div>
                          <span className="block font-semibold">
                            Jemi Wilson
                          </span>
                          <span className="block text-sm text-gray-400">
                            25 January 2021
                          </span>
                        </div>
                      </div>
                      <span className="font-bold text-green-400">+$5,400</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Activity and Expense Statistics */}
          <div className="grid grid-cols-1 col-span-full sm:col-span-8">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Weekly Activity
            </h2>
            <div className="bg-white shadow-md rounded-md p-4">
              <Bar data={barData} />
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-10 sm:col-span-4">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Expense Statistics
            </h2>
            <div className="bg-white shadow-md rounded-md p-4">
              <Pie data={pieData} />
            </div>
          </div>

          {/* Quick Transfer and Balance History */}
          <div className="col-span-full sm:col-span-6">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Quick Transfer
            </h2>
            <div className="bg-white shadow-md rounded-md p-4">
              <div className="grid grid-cols-4  gap-4">
                {/* Person 1 */}
                <div className="flex flex-col items-center">
                  <img
                    src="dist\assets\CEO.png"
                    alt="Person 1"
                    className="h-16 w-16 rounded-full mb-2"
                  />
                  <span className="font-semibold">John Doe</span>
                  <span className="text-sm text-gray-500">CEO</span>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col items-center">
                  <img
                    src="dist\assets\director.png"
                    alt="Person 2"
                    className="h-16 w-16 rounded-full mb-2"
                  />
                  <span className="font-semibold">Jane Smith</span>
                  <span className="text-sm text-gray-500">Director</span>
                </div>

                {/* Person 3 */}
                <div className="flex flex-col items-center">
                  <img
                    src="dist\assets\Designer.png"
                    alt="Person 3"
                    className="h-16 w-16 rounded-full mb-2"
                  />
                  <span className="font-semibold">Alice Johnson</span>
                  <span className="text-sm text-gray-500">Designer</span>
                </div>

                {/* Right Arrow Icon */}
                <div>
                  <img
                    src="dist\assets\right arrow.svg"
                    alt="arrow"
                    className="h-28 w-28 rounded-full mb-2 cursor-pointer"
                  />
                </div>

                {/* Quick Transfer Section (2nd Row) */}
                <div className="col-span-4 mt-4 mb-10">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-base font-normal text-slate-400">
                        Write Amount
                      </span>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <div className="relative inline-block">
                        {/* 525.0 Button */}
                        <button className="bg-slate-200 text-slate-500 text-left px-4 py-2 w-52 rounded-full">
                          525.50
                        </button>

                        {/* Send Button (Overlapping) */}
                        <button className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center gap-2">
                          <FaPaperPlane /> {/* Send Icon */}
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full sm:col-span-6 ">
            <h2 className="text-xl font-bold mb-4 text-slate-500">
              Balance History
            </h2>
            <div className="bg-white shadow-md rounded-md p-4">
              <Line data={waveData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
