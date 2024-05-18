import { View, Text, StyleSheet } from "react-native";

import RNPickerSelect from "react-native-picker-select";

const PickerField = ({ title, handleChangeText, otherStyles, chartStyles }) => {
  return (
    <View className={` ${otherStyles} mt-2`}>
      <Text className="text-base text-gray-100 font-pmedium text-center">
        {title}
      </Text>
      <View
        className={`w-full h-14 text-white px-4 bg-primary rounded-2xl border-2 border-black-200 focus:border-secondary  items-center justify-center mt-2 ${chartStyles}`}
        accessibilityLabel="Vyberte si pohonnú látku zo zoznamu."
      >
        <RNPickerSelect
          style={pickerSelectStyles}
          placeholder={{}}
          onValueChange={handleChangeText}
          items={[
            { label: "Benzín 95", value: "benzin95" },
            { label: "Benzín 98", value: "benzin98" },
            { label: "Nafta", value: "nafta" },
            { label: "LPG", value: "lpg" },
            { label: "Elektrická energia AC", value: "elektroAC" },
            { label: "Elektrická energia DC", value: "elektroDC" },
          ]}
        />
      </View>
    </View>
  );
};

export default PickerField;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "#fff",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#fff",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
