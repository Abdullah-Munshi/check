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

const TABLE_HEAD = ["Card", "Views", ""];

const TABLE_ROWS = [
  {
    img: "https://res.cloudinary.com/cardscanner/image/upload/v1716202463/profilePhoto/evwsthkvbgxabwkwunuq.jpg",
    name: "Abdullah Munshi",
    views: 0,
  },
  {
    img: "https://res.cloudinary.com/cardscanner/image/upload/v1716202463/profilePhoto/evwsthkvbgxabwkwunuq.jpg",
    name: "Abdullah Munshi",
    views: 0,
  },
  {
    img: "https://res.cloudinary.com/cardscanner/image/upload/v1716202463/profilePhoto/evwsthkvbgxabwkwunuq.jpg",
    name: "Abdullah Munshi",
    views: 0,
  },
  {
    img: "https://res.cloudinary.com/cardscanner/image/upload/v1716202463/profilePhoto/evwsthkvbgxabwkwunuq.jpg",
    name: "Abdullah Munshi",
    views: 0,
  },
  {
    img: "https://res.cloudinary.com/cardscanner/image/upload/v1716202463/profilePhoto/evwsthkvbgxabwkwunuq.jpg",
    name: "Abdullah Munshi",
    views: 0,
  },
];

export function CardTable() {
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
            {TABLE_ROWS.map(({ img, name, views }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-[#333]";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={img}
                        alt={name}
                        size="sm"
                        className="border border-[#ecc466]"
                      />
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="white"
                          className="font-bold text-sm"
                        >
                          {name}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex ">
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal text-sm"
                      >
                        {views}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="actions flex items-center justify-end space-x-3">
                      <Tooltip content="Analytics">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <ChartBarIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Open">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <EyeIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Share link">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <ShareIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="QR Code">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <QrCodeIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Show Cards">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <IdentificationIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Edit">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <PencilSquareIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton
                          variant="text"
                          className="hover:bg-[#333333] rounded-full duration-300 opacity-50 hover:opacity-100"
                        >
                          <TrashIcon className="w-4 h-4 text-white" />
                        </IconButton>
                      </Tooltip>
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
