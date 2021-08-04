import "./style.css";
import ex1 from "./export1";
import loadContact from "./group/contact";
import loadContact1 from "./paxj";
import koala from "./assets/koala.png";

const title = document.createElement("h3");
title.textContent = "Aye on another round Webpack made easy!";

const page = document.querySelector("body");
page.append(title);

const img = new Image();
img.src = koala;
page.appendChild(img);

ex1();
loadContact();
loadContact1();
