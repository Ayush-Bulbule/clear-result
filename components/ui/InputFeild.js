import { View, TextInput } from "react-native";
import React from "react";

const InputFeild = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  lineCount,
}) => {
  return (
    <View className="border border-blue-300 p-2 rounded-md bg-white">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        numberOfLines={lineCount || 1}
        multiline={lineCount > 1}
      />
    </View>
  );
};
export default InputFeild;
