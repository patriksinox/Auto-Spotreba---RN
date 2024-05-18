import { useState, useEffect } from "react";

const urlBenzin95 =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ01?lang=sk&type=json";
const urlBenzin98 =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ02?lang=sk&type=json";
const urlNafta =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ04?lang=sk&type=json";
const urlLPG =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ03?lang=sk&type=json";
const urlElektroAC =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ09?lang=sk&type=json";
const urlElektroDC =
  "https://data.statistics.sk/api/v2/dataset/sp0207ts/all/UKAZ10?lang=sk&type=json";

function Fetch(network) {
  const [benzin95, setBenzin95] = useState({});
  const [benzin98, setBenzin98] = useState({});
  const [nafta, setNafta] = useState({});
  const [lpg, setLpg] = useState({});
  const [elektroAC, setElektroAC] = useState({});
  const [elektroDC, setElektroDC] = useState({});

  const druhSet = (nazov, cena, datum) => {
    if (nazov === "Benzín 95") {
      return setBenzin95({
        nazov: "Benzín 95",
        data: cena,
        datum: datum,
      });
    }
    if (nazov === "Benzín 98") {
      return setBenzin98({
        nazov: "Benzín 98",
        data: cena,
        datum: datum,
      });
    }
    if (nazov === "Nafta") {
      return setNafta({
        nazov: "Nafta",
        data: cena,
        datum: datum,
      });
    }
    if (nazov === "LPG") {
      return setLpg({
        nazov: "LPG",
        data: cena,
        datum: datum,
      });
    }
    if (nazov === "Elektrická energia AC") {
      return setElektroAC({
        nazov: "Elektrická energia AC",
        data: cena,
        datum: datum,
      });
    }
    if (nazov === "Elektrická energia DC") {
      return setElektroDC({
        nazov: "Elektrická energia DC",
        data: cena,
        datum: datum,
      });
    }
  };

  const fetchData = async (url, nazov) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const vsetkySpravneValues = data.value.filter((x) => x > 0).reverse();
      const array = vsetkySpravneValues
        .reverse()
        .slice(0, 13)
        .reverse()
        .map((x) => x.toFixed(2));
      const { update: datum } = data;
      druhSet(nazov, array, datum);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(urlBenzin95, "Benzín 95");
    fetchData(urlBenzin98, "Benzín 98");
    fetchData(urlNafta, "Nafta");
    fetchData(urlLPG, "LPG");
    fetchData(urlElektroAC, "Elektrická energia AC");
    fetchData(urlElektroDC, "Elektrická energia DC");
    // eslint-disable-next-line
  }, [network.isConnected]);

  return { benzin95, benzin98, lpg, nafta, elektroAC, elektroDC };
}

export default Fetch;
