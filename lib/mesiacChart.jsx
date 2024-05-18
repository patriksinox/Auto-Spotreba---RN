export const MesiacChart = () => {
  const dnes = new Date();
  const aktMesiac = dnes.getMonth();

  const mesiace = [
    "Január",
    "Február",
    "Marec",
    "Apríl",
    "Máj",
    "Jún",
    "Júl",
    "August",
    "September",
    "Október",
    "November",
    "December",
  ];
  if (aktMesiac >= 4) {
    const mesiacArr = mesiace.slice(aktMesiac - 4, aktMesiac + 1);
    return mesiacArr;
  }
  if (aktMesiac < 4) {
    const spojeneArr = [...mesiace, ...mesiace].slice(
      aktMesiac - 4 + mesiace.length,
      aktMesiac + 1 + mesiace.length
    );
    return spojeneArr;
  }
};
