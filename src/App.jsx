import "./App.css";
import Download from "./components/Download/Download.jsx";
import Pill from "./components/Pill/Pill.jsx";
import moment from "moment";
import useBillingData from "./hooks/useBillingData.jsx";
import React from "react";
import useMediaQuery from "./hooks/useMediaQuery.jsx";
function App() {
  const { data, isLoading } = useBillingData();
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");
  if (isLoading) {
    return (
      <div className={"container mt-12"}>
        <div className={"text-lg font-bold col-span-full"}>Payment History</div>
        <div className={"col-span-full mt-2 description"}>
          Please reach out to our friendly team via team@codepulse.com if you
          have questions
        </div>
        <div className={"text-center mt-4 font-semibold"}>
          {" "}
          Loading Payment data...
        </div>
      </div>
    );
  }
  if (isSmallDevice) {
    return (
      <div className={"container mt-12"}>
        <div className={"text-lg font-bold col-span-full"}>Payment History</div>
        <div className={"col-span-full mt-2 description"}>
          Please reach out to our friendly team via team@codepulse.com if you
          have questions
        </div>
        {data.length === 0 ? (
          <div className={"text-center mt-4 font-semibold"}>
            No Payment history found.
          </div>
        ) : (
          <>
            {data.map((item, idx) => {
              return (
                <div key={idx} className={"data-table"}>
                  <div className={"heading"}>Invoice</div>
                  <div className={"font-semibold text-black text-right"}>
                    {moment(item.created_at).format("DD MMM, YYYY")}
                  </div>
                  <div className={"heading"}>Status</div>
                  <div className={"text-right"}>
                    <Pill status={item.status} />
                  </div>
                  <div className={"heading"}>Amount</div>
                  <div className={"font-semibold text-black text-right"}>
                    ${Number(item.amount).toFixed(2)}
                  </div>
                  <div className={"heading"}>Plan</div>
                  <div className={"font-semibold text-black text-right"}>
                    {item.plan} plan
                  </div>
                  <div
                    className={"text-center col-span-full"}
                    style={{ borderBottom: 0 }}
                  >
                    <Download downloadUrl={item.invoice_url} />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
  return (
    <>
      <div className={"container mt-12"}>
        <div className={"text-lg font-bold col-span-full"}>Payment History</div>
        <div className={"col-span-full mt-2 description"}>
          Please reach out to our friendly team via team@codepulse.com if you
          have questions
        </div>
        <div className={"data-table"}>
          <div className={"heading"}>Invoice</div>
          <div className={"heading"}>Status</div>
          <div className={"heading"}>Amount</div>
          <div className={"heading"}>Plan</div>
          <div className={"heading"}></div>
          {data.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <div
                  style={{
                    borderBottomWidth: idx !== data.length - 1 ? "1px" : "0px",
                  }}
                  className={"font-semibold text-black"}
                >
                  {moment(item.created_at).format("DD MMM, YYYY")}
                </div>
                <div
                  style={{
                    borderBottomWidth: idx !== data.length - 1 ? "1px" : "0px",
                  }}
                >
                  <Pill status={item.status} />
                </div>
                <div
                  style={{
                    borderBottomWidth: idx !== data.length - 1 ? "1px" : "0px",
                  }}
                >
                  ${Number(item.amount).toFixed(2)}
                </div>
                <div
                  style={{
                    borderBottomWidth: idx !== data.length - 1 ? "1px" : "0px",
                  }}
                >
                  {item.plan} plan
                </div>
                <div
                  style={{
                    borderBottomWidth: idx !== data.length - 1 ? "1px" : "0px",
                  }}
                >
                  <Download downloadUrl={item.invoice_url} />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by&nbsp;
        <a
          href="https://www.greatfrontend.com/projects/u/phanindra"
          target="_blank"
        >
          {" "}
          Phanindra
        </a>
        .
      </div>
    </>
  );
}

export default App;
