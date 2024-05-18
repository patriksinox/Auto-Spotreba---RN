import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import errorImg from "../assets/images/error.png";
import OfflineAd from "./offlineAd";

const Offline = () => {
  return (
    <>
      <SafeAreaView className="bg-primary h-full justify-center">
        <View className="h-full justify-center items-center">
          <Image
            source={errorImg}
            className="w-full max-h-[230px]"
            resizeMode="contain"
            alt="Error obrázok."
          />
          <View>
            <Text className="text-white text-2xl text-center px-3">
              Táto funkcionalita vyžaduje pripojenie k internetu
            </Text>
          </View>
          <OfflineAd containerStyles={"mt-10"} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Offline;
