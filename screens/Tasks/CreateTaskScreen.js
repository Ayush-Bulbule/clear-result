import {
  View,
  Text,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcDown from "../../assets/icons/ic_down.svg";
import IcMail from "../../assets/icons/ic_mail.svg";
import IcWhatsapp from "../../assets/icons/ic_whatsapp.svg";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from "react-native-dropdown-select-list";
const InputFeild = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
}) => {
  return (
    <View className="">
      <TextInput
        className="border border-[#2f81ed4d] p-2 rounded-md w-full"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const CreateTaskScreen = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);


  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
  };

  const toggleSwitch3 = () => {
    setIsEnabled3((previousState) => !previousState);
  };

  const [selectedPerson, setSelectedPerson] = useState("");

  const data = [
    { key: "1", value: "Piyush Sharma" },
    { key: "2", value: "Parveen Kumar" },
  ];


  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
        className="px-4 py-4 mb-[30rem]"
      >
        <View className="flex flex-row items-center justify-start gap-4">
          <Text
            style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
            className="text-[14px] text-[#828282] font-medium"
          >
            Assign task to me
          </Text>
          <IcDown />
        </View>


        <View className="pb-3">
            <View className="py-2">
              <Text className="text-sm text-gray-500">Assign to</Text>
            </View>

            <SelectList
              setSelected={(val) => setSelectedPerson(val)}
              data={data}
              save="value"
              placeholder="Search & Select Person"
              boxStyles={{
                borderWidth: 1,
                borderColor: "#95C2FF",
                borderRadius: 8,
              }}
              dropdownStyles={{
                position: "absolute",
                zIndex: 1000,
                width: "100%",
                top: 36,
                left: 0,
                backgroundColor: "white",
                borderColor: "white",
                borderRadius: 8,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            />
          </View>

        <View className="mt-2">
          <Text className="text-[14px] font-medium text-[#828282] mb-2">
            Company / Store name
          </Text>
          <InputFeild
            placeholder="Enter the company/store name"
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2 bg-[#F8F8F8] p-2 rounded-md">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Select Contact Person
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled ? "white" : "white"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View className={`${isEnabled?'pb-4':'hidden'}`}>
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Contact Person
            </Text>
            <InputFeild
              placeholder="Search & select contact person"
              value={companyName}
              onChangeText={(text) => setCompanyName(text)}
              secureTextEntry={false}
            />
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Task Title
          </Text>
          <InputFeild
            placeholder="Enter the title for the task"
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Description
          </Text>
          <InputFeild
            placeholder="Enter the description here"
            value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2 bg-[#F8F8F8] p-2 rounded-md">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Select Contact Person
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled2 ? "white" : "white"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
              <View className={`${isEnabled2?'pb-4':'hidden'}`}>
          <View className="mt-2 flex flex-row  items-center">
            <View className="bg-white p-3 rounded-md mr-2">
              <IcMail width={20} height={20}/>
            </View>
            <View className="w-[83%]">
              <InputFeild
                placeholder="Search & select task"
                value={companyName}
                className="px-3"
                onChangeText={(text) => setCompanyName(text)}
                secureTextEntry={false}
              />
            </View>
          </View>

          <View className="mt-4 flex flex-row  items-center">
            <View className="bg-white p-3 rounded-md mr-2">
              <IcWhatsapp />
            </View>
            <View className="w-[83%]">
              <InputFeild
                placeholder="Search & select task"
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
                className="px-3"
                secureTextEntry={false}
              />
            </View>
          </View>
          </View>
        </View>

        <View className="mt-2 bg-[#F8F8F8] p-2 rounded-md">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Action
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled3 ? "white" : "white"}
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <TouchableOpacity
            className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
              Discard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col items-center justify-center mt-4">
          <TouchableWithoutFeedback>
            <Text
              className={`text-[16px] font-medium text-[#2F80ED] underline`}
            >
              Save & Create New
            </Text>
          </TouchableWithoutFeedback>

          <Text className="text-[12px] italic text-[#828282] mt-8">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default CreateTaskScreen;
