import { View, Text, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../../context/GlobalProvider";
//Moje Importy
import { Timer } from "../../lib/timer";
import CustomButton from "../../components/CustomButton";
import CreatorLogo from "../../components/creatorLogo";

const Informations = () => {
  //Získanie Dátumu
  const { benzin95 } = useGlobalContext();
  const { datum } = benzin95;

  const sendEmail = () => {
    Linking.openURL(
      "mailto: info@patriksubjak.sk?subject=aplikácia Auto Spotreba"
    );
  };

  return (
    <SafeAreaView className="bg-primary h-full py-5">
      <CreatorLogo />
      <View className="max-w-[90vw] mx-auto p-3 gap-y-1 my-auto">
        <Text className="text-white text-lg text-center ">
          Našli ste chybu alebo cena paliva nie je správna?
        </Text>
        <Text className="text-white text-lg text-center">Napíšte mi email</Text>
        <CustomButton
          title="info@patriksubjak.sk"
          containerStyles={"mt-2"}
          handlePress={sendEmail}
          textStyles={"font-semibold"}
          accessibilityLabel="Napísať email tvorcovi stránky na info@patriksubjak.sk"
        />
      </View>

      <View className="max-w-[90vw] mx-auto p-3 gap-y-2 mt-auto mb-3">
        <Text className="text-white text-lg text-center">
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
