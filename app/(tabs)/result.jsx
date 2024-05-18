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

const Result = () => {
  const { trasa, mernaJednotka, datum, suma, palivo } = useLocalSearchParams();
  const textClass = `text-white text-center text-xl my-2`;

  const naspat = () => {
    router.push({
      pathname: "/(tabs)",
    });
  };

  return (
    <SafeAreaView className="bg-primary">
      <Animatable.View
        className="h-full"
        animation="zoomInDown"
        duration={1000}
        easing={"ease-in"}
      >
        <View>
          <View className="border-2 border-secondary rounded-xl p-4 max-w-[95vw] w-[400px] items-center mx-auto mt-5">
            <FontAwesome5 name="car" size={50} color="#FF9001" />
            {/* Výpočet z kalkulačky */}
            <View className=" mt-2">
              <Text className={`${textClass}`}>
                Na <Text className="font-bold text-xl">{trasa} km </Text>
                miniete{" "}
                <Text className="font-bold text-xl">
                  {palivo} {mernaJednotka}
                </Text>
                {mernaJednotka === "kWh" ? "." : " paliva."}
              </Text>

              <Text className={`${textClass}`}>
                Celková suma vašej jazdy je{" "}
                <Text className="font-bold text-xl">{suma} €</Text>
              </Text>
              <View className="border-t-2 border-secondary mt-5 justify-center" />
              <Text className={`${textClass} font-bold mt-2 text-md`}>
                Ceny boli aktualizované dňa {Timer(datum)}
              </Text>
              <Text className="text-gray-200 text-xs text-center">
                Ceny palív sú priemerné a sú brané zo všetkých čerpacích staníc
                na územi Slovenskej Republiky.
              </Text>
            </View>
          </View>

          <CustomButton
            title="Vypočítaj inú trasu"
            containerStyles={"mt-5 max-w-[95vw] w-[400px] mx-auto"}
            handlePress={naspat}
            textStyles={"font-extrabold"}
          />
        </View>

        <OfflineAd containerStyles={"mt-auto"} />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default Result;
