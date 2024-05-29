import {
  ChartBarIcon,
  ChevronUpDownIcon,
  EyeIcon,
  IdentificationIcon,
  PencilSquareIcon,
  QrCodeIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["City", "State/Province", "Country", "Card Views"];

const TABLE_ROWS = [
  {
    city: "Savar",
    state: "Dhaka",
    country: "Bangladesh",
    cardViews: 0,
  },
  {
    city: "Savar",
    state: "Dhaka",
    country: "Bangladesh",
    cardViews: 0,
  },
  {
    city: "Savar",
    state: "Dhaka",
    country: "Bangladesh",
    cardViews: 0,
  },
  {
    city: "Savar",
    state: "Dhaka",
    country: "Bangladesh",
    cardViews: 0,
  },
  {
    city: "Savar",
    state: "Dhaka",
    country: "Bangladesh",
    cardViews: 0,
  },
];

export function DashboardTable() {
  return (
    <Card className="h-full w-full bg-transparent">
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="border-x border-[rgb(112,112,112)] bg-[#333] p-4"
                >
                  <Typography
                    variant="small"
                    color="white"
                    className=" leading-none flex items-center justify-between font-semibold"
                  >
                    {head}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ city, state, country, cardViews }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-[#333]";

              return (
                <tr key={Math.random() * 2}>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-bold text-sm"
                      >
                        {city}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex ">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal text-sm"
                      >
                        {state}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex ">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal text-sm"
                      >
                        {country}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex ">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal text-sm"
                      >
                        {cardViews}
                      </Typography>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
