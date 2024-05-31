import { View, Text, Linking } from "react-native";
import * as Animatable from "react-native-animatable";
import devLogo from "./../assets/images/devLogo.png";

const CreatorLogo = () => {
  const openWeb = () => {
    Linking.openURL("https://www.patriksubjak.sk");
  };

  return (
    <>
      <View>
        <Animatable.Image
          animation="slideInDown"
          source={devLogo}
          className="w-full max-h-[200px] h-[200px] "
          resizeMode="contain"
          alt="Logo tvorcu aplikácie Patrika Šubjaka."
        />

        <Text
          className="text-xl text-white text-center font-extrabold "
          onPress={openWeb}
          accessibilityLabel="Prejsť na web stránku tvorcu aplikácie Patrika Šubjaka."
        >
          www.patriksubjak.sk
        </Text>
      </View>
    </>
  );
};

export default CreatorLogo;
