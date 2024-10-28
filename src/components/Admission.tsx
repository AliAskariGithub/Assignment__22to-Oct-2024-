import React from "react";
import { LuSend } from "react-icons/lu";

const Admission = () => {
  return (
    <div id="admission" className="flex flex-col items-center justify-center min-h-screen bg-darkPurple p-6 sm:p-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mt-8 mb-10">
        Admission Form
      </h1>

      <div className="w-full max-w-[130vh] bg-gradient-to-r from-gray-300 to-darkPurple rounded-xl p-6 sm:px-24 sm:py-14">
        <form className="space-y-4">
          <div className="pb-7">
            <label className="block text-base pb-2 font-extrabold tracking-wide text-black mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="pb-7">
            <label className="block text-base pb-2 font-extrabold tracking-wide text-black mb-1">
              Birth Date
            </label>

            <div className="flex space-x-2">
              <select className="w-1/3 p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select className="w-[25%] md:w-1/3 p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black">
                <option>Date</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>

            <input
              type="number"
              placeholder="Year"
              className="w-[120px] md:w-2/5 p-3 rounded-xl border text-black border-black focus:outline-none focus:ring-1 focus:ring-black"
            />

            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 md:gap-[150]">
            <div className="pb-6">
              <label className="block text-base pb-5 font-extrabold tracking-wide text-black mb-1">
                Gender
              </label>
              <div className="flex items-center pl-5 space-x-4 gap-16 sm:gap-[50]">
                <label className="flex items-center text-base font-medium md:font-semibold text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center text-base font-medium md:font-semibold text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="pb-3">
              <label className="block text-base pb-2 font-extrabold tracking-wide text-black mb-1">
                Your State
              </label>
              <select className="w-full p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black">
                <option>In Which State You Live In?</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>Balochistan</option>
                <option>Islamabad</option>
                <option>Khyber Pakhtunkhwa</option>
                <option>Gilgit Baltistan</option>
              </select>
            </div>
          </div>

          <div className="pb-37">
            <label className="block text-base pb-2 font-extrabold tracking-wide text-black mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="In Which City You Live in?"
              className="w-full p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 pb-37 gap-7 md:gap-5">
            <div>
              <label className="block text-base pb-2 font-extrabold tracking-wider text-black mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Phone no"
                className="w-full md:w-[51.5vh] p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-base pb-2 font-extrabold tracking-wider text-black mb-1">
                E-mail
              </label>
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full md:w-[51.5vh] p-3 rounded-xl border border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>
          </div>

          <div className="md:px-5 md:flex md:justify-end md:items-center">
            <button
              type="submit"
              className="w-full md:w-auto md:h-[5vh] bg-purple-600 font-medium gap-2  text-white py-2 px-6 rounded-xl shadow-black shadow-md hover:bg-[#6B47DC] mt-4 flex items-center justify-center hover:shadow-lg hover:shadow-black transition duration-300 ease-in-out"
            >
              Submit Form
              <span className="ml-2">
                <LuSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
