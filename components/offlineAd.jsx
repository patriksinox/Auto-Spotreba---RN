import { View, Text, Linking } from "react-native";

const OfflineAd = ({ containerStyles }) => {
  const text = "text-white text-center text-lg";
  const openWeb = () => {
    Linking.openURL("https://www.patriksubjak.sk");
  };

  return (
    <View
      className={`p-3 border-2 border-secondary-100 rounded-2xl mb-8 mx-auto max-w-[95vw] w-[400px] ${containerStyles}`}
    >
      <Text className={`${text} text-xl mb-2`}>
        Vytváranie vašej digitálnej prítomnosti
      </Text>
      <Text className={`${text}`}>Web stránky, eshopy a mobilné aplikácie</Text>
      <Text
        className={`${text} text-xl mt-3 font-extrabold`}
        onPress={openWeb}
        accessibilityLabel="Prejsť na web stránku tvorcu aplikácie."
      >
        www.patriksubjak.sk
      </Text>
    </View>
  );
};

export default OfflineAd;
