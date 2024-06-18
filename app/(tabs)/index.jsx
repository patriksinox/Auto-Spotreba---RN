//Systémové importy
import { Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Moje importy
import topLogo from "../../assets/icon2.png";
import Calculator from "../../components/calculator";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={topLogo}
          className="w-full h-[200px]"
          resizeMode="contain"
        />

        <Calculator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
