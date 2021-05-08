import React, { useState } from "react";
import "./Styles.css";
import {
  Button,
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  Drawer,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import SimplePaper from "./Paper";

import { Delete, DriveEtaOutlined } from "@material-ui/icons";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 300,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },

  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },
  content: {
    padding: theme.spacing(3),
    marginTop: 10,
    marginLeft: -30,
    marginBottom: 30,
    backgroundColor: "#F5F5F5",
    height: 328,
  },
  color: {
    backgroundColor: "#32CD32",
  },
  divider: {
    height: 12,
    width: "100vw",
  },
  row: {
    display: "flex",
    fontSize: 12,
  },

  font: {
    fontSize: 10,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: 10,
  },
  marginTable: {
    margin: 0,
  },
  tableTwo: {
    width: 50,
  },
}));

const ClippedDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
        <SimplePaper></SimplePaper>
      </Drawer>
      <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <img
            src="navImage.png"
            style={{ width: 50, height: 50, marginRight: 80 }}
          />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Button color="inherit">Patients</Button>
            <Button color="inherit">Calender</Button>
            <Button color="inherit">Users</Button>
            <Button color="inherit">Billing</Button>
          </Typography>
          <Avatar
            src="https://pics.freeicons.io/uploads/icons/png/7365665041556281661-512.png"
            style={{ marginRight: 30 }}
          />

          <Avatar src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsMrpBjxQX8uJCryNVI6Gvc_jPd6QtzDJF8C-p3RQmcu269bKd" />
        </Toolbar>
        <Divider className={classes.divider} />
      </AppBar>

      <main className={classes.content} id="patientInfo">
        <Toolbar />
        <table>
          <table>
            <tr>
              <td>
                <b>Patient Information</b>
              </td>
              <td>
                <td
                  style={{
                    color: "gray",
                    fontSize: 12,
                    fontFamily: "Ariel, Helvetica,default",
                  }}
                >
                  Last updated:
                </td>
                <td
                  style={{
                    fontWeight: 699,
                    fontSize: 12,
                    fontFamily: "Ariel, Helvetica,default",
                  }}
                >
                  10:25 AM, today ...
                </td>
              </td>
            </tr>
          </table>
          <div className={classes.row}>
            <table>
              <tr>
                <td rowSpan="5">
                  <Avatar
                    alt="Sara Smith"
                    src="https://i.guim.co.uk/img/media/e6ff0eaa7c9259d57d1ea173c870f67ed8971121/57_24_2296_1377/master/2296.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=c4f2f9f974f54fbdc4a4e4a991b31e1d"
                    className={classes.large}
                  />
                </td>
                <th
                  colSpan="12"
                  style={{ backgroundColor: "#F5F5F5", fontSize: 17 }}
                >
                  Sara Smith
                </th>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>
                  <b>302-865-9685</b>
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <b>sarasmith@gmail.com</b>
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>
                  <b>Female</b>
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <b>45</b>
                </td>
              </tr>
            </table>

            <table>
              <tr>
                <td>Surgery Type:</td>
                <td id="tableTwo">
                  <b>Rotator suff Repair</b>
                </td>
              </tr>

              <tr>
                <td>Surgery Date:</td>
                <td id="tableTwo">
                  <b>15 Aug 2020</b>
                </td>
              </tr>
              <tr>
                <td>Height(cm):</td>
                <td id="tableTwo">
                  <b>163</b>
                </td>
              </tr>
              <tr>
                <td>Weight(lb):</td>
                <td id="tableTwo">
                  <b>110</b>
                </td>
              </tr>
              <tr>
                <td>BMI:</td>
                <td id="tableTwo">
                  <b>19</b>
                </td>
              </tr>
            </table>
            <table id="table3">
              <tr>
                <td>Anesthesiologist:</td>
                <td>
                  <b>Dr. Christina Hardaway</b>
                </td>
              </tr>

              <tr>
                <td>Anesthesiologist Phone:</td>
                <td>
                  <b>301-896-8745</b>
                </td>
              </tr>
              <tr>
                <td>Anesthesiologist Email:</td>
                <td>
                  <b>christina@3a.com</b>
                </td>
              </tr>
            </table>
            <table>
              <tr>
                <td>Surgery Clearance</td>
              </tr>
              <tr>
                <td>
                  <Avatar variant="h6" className={classes.color}>
                    Yes
                  </Avatar>
                </td>
              </tr>
            </table>
          </div>
        </table>
        <div id="btnBack">
          <Button color="primary" id="btn" className={classes.font}>
            <b>List of prior surgeries</b>
          </Button>
          <Button id="btn" className={classes.font}>
            <b>List of medical diagnosis</b>
          </Button>
          <Button id="btn" className={classes.font}>
            <b>List of medications</b>
          </Button>
          <Button id="btn" className={classes.font}>
            <b>Airway evaluation</b>
          </Button>
          <Button id="btn1" className={classes.font}>
            <b>Anesthisia clearance and recomendation</b>
          </Button>
        </div>
        <Divider />
      </main>

      {/* /////////////////////////////////////////////////////////////////////////////////////////// */}
      <main>
        {/* <Tabs /> */}
        <div>
          <table>
            <th>First time surgery</th>
            <tr>
              <td>No</td>
            </tr>
          </table>
          <table>
            <th>Family history of surgical complications</th>
            <tr>
              <td>No</td>
            </tr>
          </table>
          <table>
            <th>If yes, please provide more detail</th>
            <tr>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vero
                laudantium inventore molestiae!
              </td>
            </tr>
          </table>

          <table>
            <tr>
              <th>Previous Surgeries</th>
            </tr>
            <tr>
              <th>Surgery Type</th>
              <th>Date</th>
              <th>Anesthesia Type</th>
              <th>Surgical Complications</th>
              <th>
                Anesthetic Complications (nausea, vomating, difficult
                intubation)
              </th>
              <th></th>
            </tr>

            <tr>
              <td>Shoulder reconstruction</td>
              <td>January 2008</td>
              <td>General "Breathing Tube"</td>
              <td>No</td>
              <td>No</td>
              <tr>
                <td>
                  <Delete />
                </td>
                <td>
                  <CreateOutlinedIcon />
                </td>
              </tr>
            </tr>
          </table>
        </div>
      </main>
      <Button variant="contained" color="primary">
        + Add
      </Button>
    </div>
  );
};

export default ClippedDrawer;
