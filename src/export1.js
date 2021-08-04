function ex1(text = "Hello, Webpack Export1!") {
  //   const element = document.createElement("h1");

  //   element.innerHTML = text;
  //   //   const page = document.querySelector("body");

  //   return element;

  const title = document.createElement("h3");
  title.textContent = "Aye Asoo on another round Webpack made easy!!!!";

  const page = document.querySelector("body");
  console.log("Helo");
  return page.append(title);
}

export default ex1;
