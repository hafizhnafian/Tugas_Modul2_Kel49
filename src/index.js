import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import HeadBar from "./components/HeadBar";
import Card from "./components/Card";
import Button from "./components/Button";
/*import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/kucing.jpg";*/

/*const quotes = "Asisten modul 2 paling ganteng, Kelompok 49 dikasih nilai 100 dong";*/

const card = [
  { judul: "CARD 1", isi: "Ini card pertama", nama: "Kelompok 49" },
  { judul: "CARD 2", isi: "ini card kedua", nama: "Kelompok 49" },
  ];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HeadBar home="KELOMPOK 49" one="Hafizh" two="Dessinta" three="Riska"/>
    <Card data={card} image1="https://www.dailysia.com/wp-content/uploads/2020/08/ekspresi-kucing-kaget_3.jpg?x57806"/>
    <Button subs="Subscribe" comm="Comment" like="Like" donate="Donate"/>
</React.StrictMode>,
document.getElementById("root")
);

/*<CardList name="Hafizh" nim="21120118130054" kelompok="49" isNameBold image={Gambar}/>
  <Quotes author="Hamba" quotes={quotes}/>*/