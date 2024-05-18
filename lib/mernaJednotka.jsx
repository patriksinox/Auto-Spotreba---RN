export const MernaJednotka = (text, typ) => {
  if (text === "Elektrická energia AC" || text === "Elektrická energia DC") {
    return "kWh";
  }
  if (typ === "chart") return "liter";
  if (typ === "uvod") return "litroch";
  else return "l";
};
