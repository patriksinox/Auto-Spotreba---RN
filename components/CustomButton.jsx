import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, handlePress, containerStyles, textStyles }) => {
  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      >
        <Text
          className={`text-primary font-psemibold text-lg ${textStyles}`}
          accessibilityLabel={title}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
