import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { CalendarIcon } from "@heroicons/react/16/solid";
import { ButtonGroup } from "@material-tailwind/react";
import placeholderGraph from "../assets/placeholder.png";
import { DashboardTable } from "../components/DashboardTable";

const Analytics = () => {
  return (
    <>
      <Header />
      <div className="analytics-area">
        <div className="container">
          <h1 className="page-title gradient-text type-10">Dashboard</h1>
          <div className="analytics-grid-wrapper grid grid-cols-1 md:grid-cols-[480px_auto] gap-6">
            <div>
              <ButtonGroup className="btn_group border border-tertiary text-tertiary h-[30px] text-sm inline-flex rounded-[4px] font-semibold divide-tertiary">
                <button className="px-3">Last 7 days</button>
                <button className="px-3 active">Last 30 days</button>
                <button className="px-3 inline-flex items-center justify-center">
                  Custom <CalendarIcon className="text-tertiary w-4 h-4 ml-2" />
                </button>
              </ButtonGroup>
              <div className="card-views mt-6 sm:max-w-[300px]">
                <div className="card-views-inner grid grid-cols-[auto_33px] gap-3">
                  <div>
                    <div className="view-amount">0</div>
                    <p className="text-[#fafafa] text-sm font-semibold">
                      Card views
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <circle
                        opacity="0.2"
                        cx="16.5"
                        cy="16.5"
                        r="16.5"
                        fill="#D9D9D9"
                      ></circle>
                      <path
                        d="M23.1 8H13.5C13.2613 8 13.0324 8.10272 12.8636 8.28556C12.6948 8.4684 12.6 8.71639 12.6 8.97496V11.8999H9.9C9.66131 11.8999 9.43239 12.0026 9.2636 12.1854C9.09482 12.3683 9 12.6162 9 12.8748V23.2744C9 23.533 9.09482 23.781 9.2636 23.9638C9.43239 24.1467 9.66131 24.2494 9.9 24.2494H19.5C19.7387 24.2494 19.9676 24.1467 20.1364 23.9638C20.3052 23.781 20.4 23.533 20.4 23.2744V20.3495H23.1C23.3387 20.3495 23.5676 20.2468 23.7364 20.064C23.9052 19.8811 24 19.6332 24 19.3746V8.97496C24 8.71639 23.9052 8.4684 23.7364 8.28556C23.5676 8.10272 23.3387 8 23.1 8ZM18.6 22.2995H10.8V13.8498H18.6V22.2995ZM22.2 18.3996H20.4V12.8748C20.4 12.6162 20.3052 12.3683 20.1364 12.1854C19.9676 12.0026 19.7387 11.8999 19.5 11.8999H14.4V9.94993H22.2V18.3996Z"
                        fill="#ECC466"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className="max-w-full w-full"
                src={placeholderGraph}
                alt=""
              />
            </div>
          </div>
          <div>
            <DashboardTable />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Analytics;
