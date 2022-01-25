import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.scss";
import "./components/scss/import.scss";
import IconHome from "./components/js/IconHome";
import IconProfile from "./components/js/IconProfile";
import IconCase from "./components/js/IconCase";
import Home from "./components/js/home";
import Profile from "./components/js/Profile";
import Case from "./components/js/Case";
import { Button } from "./components/js/button";

const en = {
  label: "en",
  homePageH1: "Hey, my name is Ilya",
  profile: {
    title: "Profile",
    about:
      "I am a web and frontend developer. Studied web application development from the very basics. successfully completed various courses in the High-Tech Park of Belarus, worked on freelance websites. ++ I am well-organized and motivated person with a high lev of discipline. ++ Big lover of break dance, travelling,good music and positive people.",
  },
  case: {
    certificates: {
      title: "Courses and certificates",
      descrFE: "Website development using HTML, CSS and JavaScript.",
      descrJS: "JavaScript web application development.",
      school: "COURSES EDUCATIONAL CENTER FOR PROGRAMMING AND HIGH TECH.",
    },
    exp: {
      title: "experience and knowledge",
      video: {
        descr: ["", "", "", ""],
      },
    },
    petProjects: "",
  },
};
const pl = {
  label: "pl",
  homePageH1: "Hej, mam na imie Ilya",
  profile: {
    title: "Profil",
    about:
      "Jestem web i frontend developerem. Studiował tworzenie aplikacji internetowych od podstaw. pomyślnie ukończył różne kursy w High-Tech Park Białorusi, pracował na niezależnych stronach internetowych. ++ Jestem osobą dobrze zorganizowaną i zmotywowaną z wysokim poziomem dyscypliny. ++ Wielki miłośnik break dance, podróży, dobrej muzyki i pozytywnych ludzi.",
  },
  case: {
    certificates: {
      title: "Szkolenia i certyfikaty",
      descrFE:
        "Tworzenie stron internetowych z wykorzystaniem HTML, CSS i JavaScript.",
      descrJS: "Tworzenie aplikacji internetowych JavaScript.",
      school: "KURSY CENTRUM EDUKACYJNE PROGRAMOWANIA I HIGH TECH.",
    },
    exp: {
      title: "doświadczenie i wiedza",
      video: {
        descr: ["", "", "", ""],
      },
    },
    petProjects: "",
  },
};

const App = () => {
  const navButtons = [
    <Link to="/" className="link">
      <IconHome />
    </Link>,
    <Link to="/Profile" className="link">
      <IconProfile />
    </Link>,
    <Link to="/Case" className="link">
      <IconCase />
    </Link>,
  ];
  const [translate, setTranslate] = React.useState(en);

  const handler = () => {
    if (translate !== pl) {
      setTranslate(pl);
    }
    if (translate !== en) {
      setTranslate(en);
    }
  };

  return (
    <div className="App">
      <div className="languageToggle" onClick={handler}>
        {translate.label}
      </div>
      <div className="navigation">
        {navButtons.map((arr, ind) => {
          return arr;
        })}

        {/* <Link to="/" className="link">
          <IconHome />
        </Link>
        <Link to="/Profile" className="link">
          <IconProfile />
        </Link>
        <Link to="/Case" className="link">
          <IconCase />
        </Link> */}
      </div>
      <Routes>
        <Route path="/" element={<Home {...translate} />} exact />
        <Route path="/Profile" element={<Profile {...translate} />} exact />
        <Route path="/Case" element={<Case {...translate} />} exact />
      </Routes>
    </div>
  );
};

export default App;
