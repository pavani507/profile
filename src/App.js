import React, { Component } from "react";
import pavani from "./pavani-min.jpg";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "font-awesome/css/font-awesome.min.css";
import ReactBrand from "./react-brands.svg";
import JsSquareBrand from "./js-square-brands.svg";
import Graduate from "./user-graduate-solid.svg";
import Email from "./envelope-solid.svg";
import location from "./map-marker-solid.svg";
import Skills from "./laptop-solid.svg";
import Button from "@material-ui/core/Button";
import Resume from "./pavanires.pdf";

import "./App.css";

const pStyle = {
  fontSize: "30px"
};
const ulStyle = {
  marginLeft: "30px",
  fontSize: "17px",
  color: "#2d13ec"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <div className="Profile">
            <div className="firstDiv">
              <div className="imageBorder">
                <img alt="myimage" src={pavani} className="imageSize" />
              </div>
            </div>
            <div className="downloadCV">
              <a href={Resume} download style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  href={Resume}
                  size="medium"
                  style={{ width: 250, borderRadius: 20 }}
                >
                  download CV
                </Button>
              </a>
            </div>
            <div className="myName">
              <div style={pStyle}>
                <h1>
                  Hello, <span className="txc">My name is Pavani</span>
                </h1>
              </div>
              <div className="myDetails">
                <div>
                  <img
                    src={Graduate}
                    alt="degree"
                    style={{ width: 25, marginRight: 6 }}
                  />
                  {""}
                  B.Tech-CSE{" "}
                </div>
                <div className="lh">
                  <img
                    src={Email}
                    alt="email"
                    style={{ width: 22, marginRight: 6 }}
                  />
                  pavani.chilakala123@gmail.com
                </div>
                <div className="lh">
                  <img
                    src={location}
                    alt="location"
                    style={{ width: 23, marginRight: 6 }}
                  />
                  Bangalore
                </div>
                <div className="lh">
                  {" "}
                  <img
                    src={Skills}
                    alt="skills"
                    style={{ width: 25, marginRight: 6 }}
                  />
                  HTML,CSS,JavaScript,React
                </div>
                <div style={{ marginTop: 70 }}>
                  <a
                    href="https://twitter.com/pavanipavani507?lang=en"
                    className="txc"
                  >
                    <i class="fa fa-twitter" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/pavani-chilakala-63b671164/"
                    className="txc"
                  >
                    <i class="fa fa-linkedin" />
                  </a>
                  <a href="https://github.com/pavani507" className="txc">
                    <i class="fa fa-github" />
                  </a>
                </div>
              </div>
              <div />
              <div />
            </div>
          </div>
          <div className="certificationTitle">
            <div
              style={{
                marginTop: "30px",
                marginLeft: "42%",
                color: "#2d13ec",
                fontSize: "30px"
              }}
            >
              <h3>Certifications</h3>
            </div>
            <div className="certification">
              <Card className="card">
                <CardContent>
                  <Typography className="title" color="#2d13ec" gutterBottom>
                    <i
                      className="fa fa-html5"
                      style={{ fontSize: "45px", marginLeft: "90px" }}
                    />
                  </Typography>
                  <Typography variant="h5" component="h3" color="primary">
                    Responsive web design
                  </Typography>

                  <Typography className="pos" color="textSecondary">
                    <ul style={ulStyle}>
                      <li>html</li>
                      <li>css</li>
                      <li>flexbox</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ marginLeft: 70 }}
                    size="large"
                    variant="contained"
                    color="secondary"
                    href="https://www.freecodecamp.org/certification/pavanichilakala/responsive-web-design"
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
              <Card className="card">
                <CardContent>
                  <Typography className="title" gutterBottom>
                    <img
                      src={JsSquareBrand}
                      alt="js"
                      style={{ width: 40, marginLeft: 90 }}
                    />
                  </Typography>
                  <Typography variant="h5" component="h3" color="primary">
                    JavaScript Algorithms
                  </Typography>
                  <Typography className="pos" color="textSecondary">
                    <ul style={ulStyle}>
                      <li>JavaScript concepts</li>
                      <li>New es6 syntax</li>
                      <li>Data Structures</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ marginLeft: 70 }}
                    size="large"
                    variant="contained"
                    color="secondary"
                    href="https://www.freecodecamp.org/certification/pavanichilakala/javascript-algorithms-and-data-structures"
                  >
                    Download
                  </Button>
                </CardActions>
              </Card>
              <Card className="card">
                <CardContent>
                  <Typography className="title" gutterBottom>
                    <img
                      src={ReactBrand}
                      alt="react"
                      style={{ width: 50, marginLeft: 90 }}
                    />
                  </Typography>
                  <Typography variant="h5" component="h2" color="primary">
                    Front End Libraries
                  </Typography>
                  <Typography className="pos" color="textSecondary">
                    <ul style={ulStyle}>
                      <li>React </li>
                      <li>Virtual Dom</li>
                      <li> State management</li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{ marginLeft: 70 }}
                    size="large"
                    variant="contained"
                    color="secondary"
                    href="https://www.freecodecamp.org/certification/pavanichilakala/front-end-libraries"
                  >
                    download
                  </Button>
                </CardActions>
              </Card>
              <div />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
