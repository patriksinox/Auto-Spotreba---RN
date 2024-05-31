//Systémové importy
import {
  View,
  Image,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Moje importy
import topLogo from "../../assets/icon2.png";
import Calculator from "../../components/calculator";

const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAvoidingView
        keyboardVerticalOffset={80}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <Pressable onPress={Keyboard.dismiss}>
          <View className="flex justify-around h-full ">
            <Image
              source={topLogo}
              className="w-full h-[200px]"
              resizeMode="contain"
            />

            <Calculator />
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Index;
