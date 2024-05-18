import { View, Text, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
import * as Animatable from "react-native-animatable";

//Moje Importy
import { Timer } from "../../lib/timer";
import devLogo from "../../assets/images/devLogo.png";
import CustomButton from "../../components/CustomButton";

const Informations = () => {
  //Získanie Dátumu
  const { benzin95 } = useGlobalContext();
  const { datum } = benzin95;

  const sendEmail = () => {
    Linking.openURL(
      "mailto: info@patriksubjak.sk?subject=aplikácia Auto Spotreba"
    );
  };

  const openWeb = () => {
    Linking.openURL("https://www.patriksubjak.sk");
  };

  return (
    <SafeAreaView className="bg-primary h-full justify-around py-5">
      <Animatable.Image
        animation="slideInDown"
        source={devLogo}
        className="w-full max-h-[230px]"
        resizeMode="contain"
        alt="Logo tvorcu aplikácie Patrika Šubjaka."
      />
      <View className="-mt-5">
        <Text
          className="text-xl text-white text-center font-extrabold "
          onPress={openWeb}
          accessibilityLabel="Prejsť na web stránku tvorcu aplikácie Patrika Šubjaka."
        >
          www.patriksubjak.sk
        </Text>
      </View>

      <View className="max-w-[90vw] mx-auto p-3 gap-y-2">
        <Text className="text-white text-xl text-center">
          Našli ste chybu alebo cena paliva nesedí ?
        </Text>
        <Text className="text-white text-xl text-center">Napíšte mi email</Text>
        <CustomButton
          title="info@patriksubjak.sk"
          containerStyles={"mt-4"}
          handlePress={sendEmail}
          textStyles={"font-semibold"}
          accessibilityLabel="Napísať email tvorcovi stránky na info@patriksubjak.sk"
        />
      </View>
      <View className="max-w-[90vw] mx-auto p-3 gap-y-4">
        <Text className="text-white text-xl text-center">
          Ceny palív boli aktualizované dňa {Timer(datum)}
        </Text>
        <Text className="text-gray-200 text-md text-center">
          Ceny palív sú priemerné a sú brané zo všetkých čerpacích staníc na
          územi Slovenskej Republiky.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Informations;
