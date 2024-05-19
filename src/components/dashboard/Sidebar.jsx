import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Avatar,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import i1 from "../../assets/i-1.svg";
import i2 from "../../assets/i-2.svg";
import i3 from "../../assets/i-3.svg";
import i4 from "../../assets/i-4.svg";
import i5 from "../../assets/i-5.svg";
import i6 from "../../assets/i-6.svg";
import i7 from "../../assets/i-7.svg";
import i8 from "../../assets/i-8.svg";
import i9 from "../../assets/i-9.svg";
import logo from "../../assets/logo.png";
import user from "../../assets/Avatar.png";

const Sidebar = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Card className="sidebar min-h-[calc(100vh-5rem)] w-full pr-6 max-w-[20rem] bg-richBlack">
      <div className="mb-4 mt-3 px-3">
        <img className="w-[210px]" src={logo} alt="brand" />
      </div>
      <List className="p-0 sidebar-list">
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i1} alt="i" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i2} alt="i" />
          </ListItemPrefix>
          Plans
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i3} alt="i" />
          </ListItemPrefix>
          Products
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i4} alt="i" />
          </ListItemPrefix>
          Wallet
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i5} alt="i" />
          </ListItemPrefix>
          Market
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i6} alt="i" />
          </ListItemPrefix>
          History
        </ListItem>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i7} alt="i" />
          </ListItemPrefix>
          Account
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 text-white transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="list-item !p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 px-4 py-3 accordionHeader"
            >
              <ListItemPrefix>
                <img src={i8} alt="i" />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="mr-auto font-normal inner-list-item"
              >
                Assets
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="list-item">Analytics</ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className="list-item">
          <ListItemPrefix>
            <img src={i9} alt="i" />
          </ListItemPrefix>
          Log out
        </ListItem>
      </List>
      <div className="bg-white rounded-[30px] p-5 mt-auto">
        <Avatar src={user} className="mb-3" />
        <h4 className="text-richBlack text-2xl font-medium mb-1">
          Rohan Gupta
        </h4>
        <p className="text-base font-normal text-gray">
          Wallet Address : 678XB9887XA
        </p>
      </div>
    </Card>
  );
};

export default Sidebar;
