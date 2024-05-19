import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Month",
  "Status",
  "Method",
  "Earnings",
  "Amount withdrawn",
];

const TABLE_ROWS = [
  {
    month: "Oct 2021",
    status: "Paid",
    method: "Paypal",
    earnings: "$128,899.00",
    amountWithdrawn: "$128,899.00",
  },
  {
    month: "Nov 2021",
    status: "Paid",
    method: "SWIFT",
    earnings: "$128,899.00",
    amountWithdrawn: "$128,899.00",
  },
];

const RecentActivity = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ month, status, method, earnings, amountWithdrawn }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "text-[#33383F] p-4 text-sm font-semibold"
                : "text-[#33383F] p-4 text-sm font-semibold border-b border-blue-gray-50";

              return (
                <tr key={month}>
                  <td className={classes}>
                    <div>{month}</div>
                  </td>
                  <td className={classes}>
                    <div className="bg-lightGreen text-sm font-semibold rounded-md inline-grid place-content-center px-2 py-[4px]">
                      {status}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="bg-lightBlue text-sm font-semibold rounded-md inline-grid place-content-center px-2 py-[4px]">
                      {method}
                    </div>
                  </td>
                  <td className={classes}>
                    <div>{earnings}</div>
                  </td>
                  <td className={classes}>
                    <div>{amountWithdrawn}</div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default RecentActivity;
