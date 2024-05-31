import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PickerField from "../../components/PickerField";
import { useState } from "react";
import { MernaJednotka } from "../../lib/mernaJednotka";
import { useGlobalContext } from "../../context/GlobalProvider";
import { useEffect } from "react";
import { BarChart } from "react-native-gifted-charts";
import { MesiacChart } from "../../lib/mesiacChart";
import { Timer } from "../../lib/timer";
import Offline from "../../components/offline";
import OfflineAd from "../../components/offlineAd";
import OnlineAD from "../../components/onlineAD";

const Charts = () => {
  const { benzin95, benzin98, nafta, lpg, elektroAC, elektroDC, network } =
    useGlobalContext();
  const mesiace = MesiacChart();
  const [vybranePalivo, setVybranePalivo] = useState(benzin95);

  const nastaveniePaliva = (e) => {
    setVybranePalivo(e);
  };

  //Prefiltrovanie cien
  const posledneMesiace = vybranePalivo.data
    ?.map((x, i) => {
      if (i % 3 === 0) return x;
    })
    .filter((x) => x !== undefined);

  //Dáta pre chart
  const data = posledneMesiace?.map((item, index) => {
    return {
      value: parseFloat(item) > 1 ? parseFloat(item) / 1.5 : parseFloat(item),
      label: mesiace[index],
      topLabelComponent: () => (
        <Text style={{ color: "white", fontSize: 16, marginBottom: 6 }}>
          {parseFloat(item)} €
        </Text>
      ),
      labelWidth: 30,
    };
  });

  //Použitie paliva
  useEffect(() => {
    if (vybranePalivo === "undefined") setVybranePalivo(benzin95);
    if (vybranePalivo.data?.length === 0) setVybranePalivo(benzin95);
    if (vybranePalivo === "benzin95") setVybranePalivo(benzin95);
    if (vybranePalivo === "benzin98") setVybranePalivo(benzin98);
    if (vybranePalivo === "nafta") setVybranePalivo(nafta);
    if (vybranePalivo === "lpg") setVybranePalivo(lpg);
    if (vybranePalivo === "elektroAC") setVybranePalivo(elektroAC);
    if (vybranePalivo === "elektroDC") setVybranePalivo(elektroDC);
  }, [vybranePalivo, benzin95, benzin98, nafta, lpg, elektroAC, elektroDC]);

  if (network.isConnected === false) return <Offline />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="h-full min-h-[100vh]">
        <PickerField
          title={`Pohonná látka - ${
            vybranePalivo.data?.slice(-1)[0]
          } € / ${MernaJednotka(vybranePalivo.nazov)} aktuálne`}
          placeholder="6 litrov"
          handleChangeText={nastaveniePaliva}
          otherStyles={"max-w-[95%] w-full mx-auto"}
          chartStyles={"border-secondary-200"}
        />
        <View className="mx-3 border-secondary-200 border-2 border-t-0 rounded-b-2xl  py-1 px-2 mt-3 ">
          <Text className="text-center text-white mb-1 text-base font-semibold">
            Cena je na 1 {MernaJednotka(vybranePalivo.nazov, "chart")}
          </Text>
          <View className="mx-auto">
            <BarChart
              showFractionalValues
              /*  maxValue={2.3} */
              data={data?.length > 0 ? data : [{ value: 0 }]}
              isAnimated
              hideRules
              yAxisThickness={0}
              xAxisThickness={0}
              hideYAxisText
              isThreeD
              sideColor={"#ed8404"}
              topColor={"#ed8404"}
              frontColor={"#FF8E01"}
              barWidth={38}
              xAxisLabelTextStyle={{
                color: "white",
                textAlign: "center",
              }}
              xAxisLabelsHeight={20}
              initialSpacing={10}
            />
          </View>
        </View>
        <View>
          <Text
            className={` text-center text-gray-100 text-base my-2 font-bold mt-2 text-md`}
          >
            {benzin95.datum &&
              `Ceny boli aktualizované dňa ${Timer(benzin95.datum)}`}
          </Text>
        </View>

        {network.isConnected ? (
          <OnlineAD />
        ) : (
          <OfflineAd containerStyles={"my-auto"} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Charts;
