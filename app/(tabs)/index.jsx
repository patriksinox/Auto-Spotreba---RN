//Systémové importy
import {
  View,
  Image,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Moje importy
import topLogo from "../../assets/icon.png";
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
          <ScrollView className="w-full max-w-[450px] mx-auto">
            <View className="flex items-center justify-center gap-2 ">
              <Image
                source={topLogo}
                className="w-full h-[250px]"
                resizeMode="contain"
              />
            </View>

            <Calculator />
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Index;
