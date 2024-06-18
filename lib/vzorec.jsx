export const Vzorec = (hodnota) => {
  if (hodnota >= 1 && hodnota <= 10) {
    return 1.25;
  }
  if (hodnota > 10 && hodnota <= 50) {
    return 1.08;
  }
  if (hodnota > 51 && hodnota <= 100) {
    return 1;
  }
  if (hodnota > 100) {
    return 0.95;
  }
  if (hodnota === 0) return 1;
};
