//Systémové importy
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as Animatable from "react-native-animatable";
//Moje importy
import { Timer } from "../../lib/timer";
import CustomButton from "../../components/CustomButton";

import OfflineAd from "../../components/offlineAd";
import OnlineAD from "../../components/onlineAD";

import { useGlobalContext } from "../../context/GlobalProvider";

const Result = () => {
  const { trasa, mernaJednotka, datum, suma, palivo, vlastnaCena } =
    useLocalSearchParams();
  const { network } = useGlobalContext();
  const vlastnaBool = vlastnaCena === "false" ? false : true;

  const textClass = `text-white text-center text-lg my-1`;

  const naspat = () => {
    router.push({
      pathname: "/(tabs)",
    });
  };

  return (
    <SafeAreaView className="bg-primary">
      <Animatable.View
        animation="zoomInDown"
        duration={1000}
        easing={"ease-in"}
      >
        <View className="h-full justify-between">
          <View className="border-2 border-secondary rounded-xl p-3  max-w-[95vw] w-[400px] items-center mx-auto mt-5">
            <FontAwesome5 name="car" size={50} color="#FF9001" />
            {/* Výpočet z kalkulačky */}
            <View className="mt-1">
              <Text className={`${textClass}`}>
                Na <Text className="font-bold text-lg">{trasa} km </Text>
                miniete{" "}
                <Text className="font-bold text-lg">
                  {palivo} {mernaJednotka}
                </Text>
                {mernaJednotka === "kWh" ? "." : " paliva."}
              </Text>

              <Text className={`${textClass}`}>
                Celková suma vašej jazdy je{" "}
                <Text className="font-bold text-xl">{suma} €</Text>
              </Text>
              <View className="border-t-2 border-secondary mt-5 mb-2 justify-center" />

              {!vlastnaBool && (
                <Text className={`${textClass} font-bold mt-2 text-md`}>
                  Ceny boli aktualizované dňa {Timer(datum)}
                </Text>
              )}

              {vlastnaBool ? (
                <Text className="text-gray-200 text-lg text-center">
                  Dúfam že bola moja aplikácia nápomocná 😊.
                </Text>
              ) : (
                <Text className="text-gray-200 text-xs text-center">
                  Ceny palív sú priemerné a sú brané zo všetkých čerpacích
                  staníc na územi Slovenskej Republiky.
                </Text>
              )}
            </View>
          </View>
          <CustomButton
            title="Vypočítaj inú trasu"
            containerStyles={"mt-2 max-w-[95vw] w-[400px] mx-auto mb-2"}
            handlePress={naspat}
            textStyles={"font-extrabold"}
          />

          {network.isConnected ? (
            <OnlineAD />
          ) : (
            <OfflineAd containerStyles={"mt-auto"} />
          )}
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Result;
