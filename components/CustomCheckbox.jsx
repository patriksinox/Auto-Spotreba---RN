import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";

const CustomCheckbox = ({ handleCheckBox, value }) => {
  return (
    <View className="flex flex-row items-center gap-2 ml-5 mt-2">
      <Checkbox
        value={value}
        onValueChange={handleCheckBox}
        color={value ? "#FF9C01" : undefined}
        className="h-7 w-7"
      />
      <Text className="text-white">Vlastná suma paliva</Text>
    </View>
  );
};

export default CustomCheckbox;
