import { View, Text, TextInput } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className={` ${otherStyles} mt-2`}>
      <Text className="text-base text-gray-100 font-pmedium text-center">
        {title}
      </Text>

      <View
        className={`w-full h-14 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary  items-center flex-row`}
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base "
          keyboardType="numeric"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          {...props}
          maxLength={4}
        />
      </View>
    </View>
  );
};

export default FormField;
