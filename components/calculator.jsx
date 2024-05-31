//Systémové importy
import { View, Alert, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";
//Componenty
import FormField from "./FormField";
import CustomButton from "./CustomButton";
import PickerField from "./PickerField";
import { Vzorec } from "../lib/vzorec";
import Checkbox from "./CustomCheckbox";
import { MernaJednotka } from "../lib/mernaJednotka";
//Context
import { useGlobalContext } from "../context/GlobalProvider";

const Calculator = () => {
  const { benzin95, benzin98, nafta, lpg, elektroAC, elektroDC, network } =
    useGlobalContext();

  const [vybranePalivo, setVybranePalivo] = useState(benzin95);
  const [priemernaSpotreba, setPriemernaSpotreba] = useState(6);
  const [dlzkaTrasy, setDlzkaTrasy] = useState(100);
  const [vzorec, setVzorec] = useState(1);
  const [suma, setSuma] = useState(9.96);
  const [minutePalivo, setMinutePalivo] = useState(0);
  const [vlastnaCena, setVlastnaCena] = useState(false);

  //Vyrátanie celkovej sumy funkcia
  const vyratanie = () => {
    let cenaPaliva;
    if (!vlastnaCena && network.isConnected === true)
      cenaPaliva = parseFloat(vybranePalivo.data?.slice(-1)[0]);
    else cenaPaliva = vybranePalivo;
    if (!cenaPaliva) return;
    cenaPaliva = parseFloat(cenaPaliva);
    const jedenKM = priemernaSpotreba / 100;
    const celkovaSpotrebaPaliva = jedenKM * dlzkaTrasy;
    const suma = cenaPaliva * celkovaSpotrebaPaliva * vzorec;
    const SumaCislo = parseFloat(suma.toFixed(2));

    setSuma(SumaCislo);
    setMinutePalivo(celkovaSpotrebaPaliva);
  };

  //Merná jednotka
  const mj = () => {
    if (vybranePalivo.nazov) return MernaJednotka(vybranePalivo.nazov);
    else return MernaJednotka(vybranePalivo);
  };

  //Presmerovanie na result s výsledkami
  const vysledok = async () => {
    Keyboard.dismiss();
    if (!dlzkaTrasy > 0) return Alert.alert("Zadajte prosím dĺžku trasy.");
    if (!priemernaSpotreba > 0)
      return Alert.alert("Zadajte prosím priemernú spotrebu.");
    if (vlastnaCena && !vybranePalivo > 0)
      return Alert.alert("Vyberte palivo alebo zadajte cenu paliva.");

    if (isNaN(vybranePalivo) && isNaN(vybranePalivo.data?.slice(-1)[0]))
      return Alert.alert("Vyberte palivo alebo zadajte cenu paliva.");

    router.push({
      pathname: "/(tabs)/result",
      params: {
        trasa: dlzkaTrasy,
        mernaJednotka: mj(),
        datum: vybranePalivo?.datum,
        suma: suma,
        palivo: minutePalivo.toFixed(2),
      },
    });
  };

  const nastavenieSpotreby = (e) => {
    let hodnota = e;
    if (hodnota.includes(",")) hodnota = hodnota.replace(",", ".");
    const value = parseFloat(hodnota);
    setPriemernaSpotreba(value);
  };

  const nastavenieTrasy = (e) => {
    let hodnota = e;
    if (hodnota.includes(",")) hodnota = hodnota.replace(",", ".");
    const value = parseFloat(hodnota);
    setDlzkaTrasy(value);
  };

  const nastaveniePaliva = (e) => {
    setVybranePalivo(e);
  };

  const nastavenieVlastnejSumy = (e) => {
    let hodnota = e;
    if (hodnota.includes(",")) hodnota = hodnota.replace(",", ".");
    const value = parseFloat(hodnota);
    setVybranePalivo(value);
  };

  //Použitie paliva
  useEffect(() => {
    if (Object.keys(vybranePalivo).length === 0) setVybranePalivo(benzin95);
    if (vybranePalivo === "undefined") setVybranePalivo(benzin95);
    if (vybranePalivo.data?.length === 0) setVybranePalivo(benzin95);
    if (vybranePalivo === "benzin95") setVybranePalivo(benzin95);
    if (vybranePalivo === "benzin98") setVybranePalivo(benzin98);
    if (vybranePalivo === "nafta") setVybranePalivo(nafta);
    if (vybranePalivo === "lpg") setVybranePalivo(lpg);
    if (vybranePalivo === "elektroAC") setVybranePalivo(elektroAC);
    if (vybranePalivo === "elektroDC") setVybranePalivo(elektroDC);
  }, [
    vybranePalivo,
    vzorec,
    benzin95,
    benzin98,
    nafta,
    lpg,
    elektroAC,
    elektroDC,
  ]);

  //Vzorec jazdy
  useEffect(() => {
    const vzorec = Vzorec(dlzkaTrasy);
    setVzorec(vzorec);
  }, [dlzkaTrasy]);

  //Vypočítanie celkovej sumy trasy
  useEffect(() => {
    vyratanie();
  }, [dlzkaTrasy, vybranePalivo, vzorec, priemernaSpotreba]);

  const check = () => {
    setVlastnaCena(!vlastnaCena);
  };

  return (
    <View className="  w-[95%] mx-auto">
      <FormField
        title={`Vaša priemerná spotreba na 100km v ${MernaJednotka(
          vybranePalivo.nazov,
          "uvod"
        )}`}
        placeholder="6"
        accessibilityLabel="Zadajte vašu priemernú spotrebu na 100km."
        handleChangeText={nastavenieSpotreby}
      />
      <FormField
        title={"Vaša dĺžka trasy v kilometroch"}
        placeholder="100"
        handleChangeText={nastavenieTrasy}
        accessibilityLabel="Zadajte vašu dĺžku trasy v kilometroch."
      />

      {network.isConnected === false || vlastnaCena ? (
        <FormField
          title={"Vaša cena paliva"}
          placeholder="1.5 €"
          handleChangeText={nastavenieVlastnejSumy}
          accessibilityLabel="Zadajte vašu vlastnú sumu paliva."
        />
      ) : (
        <PickerField
          title={`Výber pohonnej látky - ${
            vybranePalivo.data?.slice(-1)[0] || vybranePalivo
          } € / ${MernaJednotka(vybranePalivo.nazov)}`}
          placeholder="6 litrov"
          handleChangeText={nastaveniePaliva}
        />
      )}
      {network.isConnected === true && (
        <Checkbox
          handleCheckBox={check}
          value={vlastnaCena}
          accessibilityLabel="Aktivujte pre vlastnú cenu paliva."
          accessibilityHint="Začiarknutie tohto políčka umožní nastaviť cenu ručne."
        />
      )}

      <CustomButton
        title="Vypočítaj cenu cesty & spotrebu"
        containerStyles={"mt-4 mb-4"}
        handlePress={vysledok}
        textStyles={"font-extrabold"}
      />
    </View>
  );
};

export default Calculator;
