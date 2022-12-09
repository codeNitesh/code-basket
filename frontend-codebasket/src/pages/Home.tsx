import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import ElevateAppBar from "../components/ElevatedAppBar";
import "./Home.css";

import { Link, useNavigate } from "react-router-dom";
import DialogBox from "../components/DialogBox";
import Button from "@mui/material/Button";

import codebasketImage from "../assets/codebasketmain.png";
import codebasketLogo from "../assets/logo.png";
import githubLogo from "../assets/github-mark-white.svg";
import linkedInLogo from "../assets/linkedInLogo.png";

function github() {
  const url = "https://github.com/codeNitesh/code-basket/";
  window.open(url);
}

function linkedin() {
  const url = "https://www.linkedin.com/in/codenitesh/";
  window.open(url);
}

function website() {
  const url = "https://niteshsoni.in/";
  window.open(url);
}

export default function Home() {
  const navigate = useNavigate();

  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  const [basketName, setBasketName] = useState("");

  const [basketHistory, setBasketHistory] = useState([]);

  useEffect(() => {
    let localStorageData = localStorage.getItem("code-basket");
    if (localStorageData !== null) {
      setBasketHistory(JSON.parse(localStorageData));
    }
  }, []);

  const handleDialogBoxClose = () => {
    setDialogBoxOpen(false);
  };
  const handleBasketNameChange = (val: any) => {
    setBasketName(val.target.value);
  };

  const handleDialogBoxCreate = () => {
    createBasket().then((data) => {
      let localStorageData = localStorage.getItem("code-basket");
      let newData = [];
      if (localStorageData !== null) {
        newData = JSON.parse(localStorageData);
      }

      const newBasket = {
        _id: data._id,
        basketName: data.basketName,
        createdDate: data.createdDate,
      };
      newData = [...newData, newBasket];

      localStorage.setItem("code-basket", JSON.stringify(newData));

      navigate({
        pathname: "/code",
        search: "?_id=" + data._id,
      });
    });
  };

  const createBasket = async () => {
    const data = {
      css: "",
      js: "",
      html: "",
      basketName: basketName,
    };
    const response = await fetch(`https://code-basket-production.up.railway.app/baskets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  };

  function createNewBasket() {
    setDialogBoxOpen(true);
  }

  return (
    <>
      <div className="background">
        <div className="container">
          <img src={codebasketLogo} alt="CodeBasket" className="logo" />

          <div className="hero">
            <div className="hero-img">
              <img
                src={codebasketImage}
                alt="illustration-mockups"
                className="mockup"
              />
            </div>

            <div className="hero-text">
              <h1 className="head">Write and check HTML, CSS, JavaScript</h1>

              <p className="text">
                CodeBaket is an online code editor for HTML, CSS, JavaScript
                code snippets built in React.js and Node.js
              </p>

              <button onClick={createNewBasket} className="btn text">
                Create New Basket
              </button>
            </div>
          </div>

          <div className="socials">
            <button onClick={github} className="social-btn facebook">
              <img src={githubLogo} />
            </button>
            <button onClick={linkedin} className="social-btn twitter">
              <img src={linkedInLogo} />
            </button>
            <button onClick={website} className="social-btn www">
              www
            </button>
          </div>
        </div>
        <DialogBox
          dialogBoxOpen={dialogBoxOpen}
          handleDialogBoxClose={handleDialogBoxClose}
          handleBasketNameChange={handleBasketNameChange}
          handleDialogBoxCreate={handleDialogBoxCreate}
        />
      </div>
      {/* <ElevateAppBar
        title="CodeBasket"
        buttonTxt="GitHub Repo"
        goToGitHubRepo={goToGitHubRepo}
      />
      <Typography sx={{ marginTop: "50px" }} variant="h2" component="div">
        {"Welcome to CodeBasket"}
      </Typography>
      <Typography variant="h5">
        {
          "An online code editor for HTML, CSS, JavaScript code snippets in React.js"
        }
      </Typography>
      <Button variant="outlined" onClick={handleClick}>
      Create code basket
      </Button>
        {basketHistory.map((data: any, index: number)=>(
          <p key={index}>{data.basketName} - {data._id}</p>
        ))}
         */}
    </>
  );
}
