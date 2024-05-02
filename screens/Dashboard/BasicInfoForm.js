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
import IcFlagIndia from "../../assets/icons/ic_flag_india.svg";
import IcDown from "../../assets/icons/ic_down.svg";
import IcMail from "../../assets/icons/ic_mail.svg";
import IcWhatsapp from "../../assets/icons/ic_whatsapp.svg";
import IcPlusLight from "../../assets/icons/ic_plus_light.svg";
import IcCameraUpload from "../../assets/icons/ic_camera_upload.svg";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@ui-kitten/components";
import { SelectList } from "react-native-dropdown-select-list";
import { useUserRole } from "../../context/UserContext";
import InputFeild from "../../components/ui/InputFeild";

const data = [
  { key: "1", value: "Piyush Sharma" },
  { key: "2", value: "Parveen Kumar" },
];

const UserInfoFormScreen = () => {
  const navigation = useNavigation();
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const [hasWhatsapp, setHasWhatsapp] = useState(false);

  const { userRole } = useUserRole();

  const toggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
  };

  const toggleSwitch2 = () => {
    setIsEnabled2((previousState) => !previousState);
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
            Prospect Entry Form
          </Text>
          <IcDown />
        </View>

        {userRole === "admin" && (
          <View className="px-2 pb-3">
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
        )}

        <View className="flex items-center justify-center gap-x-3 flex-row">
          <View className="mt-2 bg-gray-100 rounded-full h-14 w-14 flex items-center justify-center">
            <IcCameraUpload />
          </View>
          <View className="mt-2 flex-1">
            <Text className="text-[14px] font-medium text-[#828282] mb-2">
              Company / Store name
            </Text>
            <InputFeild
              placeholder="Enter the company/store name"
              secureTextEntry={false}
            />
            <View className="flex items-center pt-2">
              <CheckBox className="">
                <Text>Company name and store name is different.</Text>
              </CheckBox>
            </View>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Primary Contact
          </Text>
          <InputFeild
            placeholder="Enter firstname and last name of the contact"
            secureTextEntry={false}
          />
        </View>

        {/* Mobile Number */}
        <View className="mt-4 ">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Mobile Number
          </Text>
          <View className="flex flex-row items-center border border-blue-200  rounded-md">
            <TouchableOpacity>
              <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                <IcFlagIndia />
                <IcDown />
              </View>
            </TouchableOpacity>

            <TextInput
              placeholder="+91 9876543210"
              secureTextEntry={false}
              inputMode="numeric"
            />
          </View>
          <View className="flex flex-row items-center justify-start">
            <CheckBox
              checked={hasWhatsapp}
              style={{ margin: 3 }}
              onChange={(nextChecked) => setHasWhatsapp(!hasWhatsapp)}
            />
            <Text className="text-xs">Whatsapp no is not similar?</Text>
          </View>
        </View>

        {/* Mobile Number */}
        {hasWhatsapp && (
          <View className="mt-4 ">
            <Text className="text-[13px] font-medium text-[#828282] mb-2">
              Mobile Number
            </Text>
            <View className="flex flex-row items-center border border-blue-200  rounded-md">
              <TouchableOpacity>
                <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                  <IcFlagIndia />
                  <IcDown />
                </View>
              </TouchableOpacity>

              <TextInput
                placeholder="+91 9876543210"
                secureTextEntry={false}
                inputMode="numeric"
              />
            </View>
          </View>
        )}

        {/* Email */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Email Address
          </Text>
          <InputFeild
            placeholder="Enter the email address"
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2 bg-gray-50 p-2 rounded-md pb-4">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Agent& Distributor
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled1 ? "white" : "white"}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>

          <View className={`${isEnabled1 ? "flex" : "hidden"} gap-y-2`}>
            <Text className="text-[13px] text-gray-500 font-semibold ">
              Agent
            </Text>
            <View className="flex-row flex gap-x-2 items-center">
              <View className="flex-1">
                <SelectList
                  setSelected={(val) => setSelectedPerson(val)}
                  data={data}
                  save="value"
                  placeholder="Search & Select Agent"
                  boxStyles={{
                    flex: 1,
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
              <View className=" p-3 rounded-md mr-2 bg-gray-200">
                <IcPlusLight />
              </View>
            </View>
            <Text className="text-[13px] text-gray-500 font-semibold ">
              Distributor
            </Text>
            <View className="flex-row flex gap-x-2 items-center">
              <View className="flex-1">
                <SelectList
                  setSelected={(val) => setSelectedPerson(val)}
                  data={data}
                  save="value"
                  placeholder="Search & Select Distributor"
                  boxStyles={{
                    flex: 1,
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
              <View className=" p-3 rounded-md mr-2 bg-gray-200">
                <IcPlusLight />
              </View>
            </View>
            
          </View>
        </View>

        <View className="mt-2 bg-[#F8F8F8] p-2 rounded-2xl -z-10">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-[13px] text-gray-500 font-semibold italic">
              Prospects Details{" "}
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled2 ? "white" : "white"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>

        {/* Notes */}
        <View className="mt-4">
          <Text className="text-[13px] font-medium text-[#828282] mb-2">
            Notes
          </Text>
          <InputFeild
            placeholder="Please enter if any notes"
            secureTextEntry={false}
          />
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
              Discard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TaskStack");
            }}
            className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback>
          <Text className="text-[16px] font-medium text-center mt-4 text-[#2F80ED] underline">
            Save & Create New
          </Text>
        </TouchableWithoutFeedback>

        <View className="flex flex-col items-center justify-center mt-4">
          <Text className="text-[12px] italic text-[#828282] mt-8">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default UserInfoFormScreen;
