import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcDown from "../../assets/icons/ic_down.svg";
import InputFeild from "../../components/ui/InputFeild";
import IcToggle from "../../assets/icons/ic_Toggle base.svg";
import IcEmail from "../../assets/icons/ic_circum_mail.svg";
import IcWhatsapp from "../../assets/icons/ic_vwp.svg";
import IcPen from "../../assets/icons/ic_pen.svg";
import IcAttachment from "../../assets/icons/ic_attachment.svg";
import IcSearch from "../../assets/icons/ic_search_black.svg";
import IcFlagIndia from "../../assets/icons/ic_flag-india.svg";
import IcCall from "../../assets/icons/ic_phone_call.svg";
import IcMail from "../../assets/icons/ic_circum_mail2.svg";
import IcVender from "../../assets/icons/ic_vender.svg";
import IcClose from "../../assets/icons/ic_close_blue.svg";
import { CheckBox } from "@ui-kitten/components";

const ExhibitionDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(10000);

  const [share, setShare] = useState(false);

  const [saveNew, setSaveNew] = useState(false);

  //Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [hasWhatsapp, setHasWhatsapp] = useState(false);

  const [tags, setTags] = useState(["Traditional Wear"]);
  const [tagText, setTagText] = useState("");

  const onValueChange = (value) => {
    setSliderValue(value);
  };

  const [height, setHeight] = useState(40); // Initial height

  const handleChangeText = (text) => {
    // Calculate the new height based on the content
    const newHeight = text ? Math.max(40, text.split("\n").length * 20) : 40;
    setHeight(newHeight);
  };

  const handleBack = () => {
    // send data to ExhibitionMasterScreen

    navigation.navigate("Exhibition", {
      data: "Invite has been sent to the leads!",
    });
  };

  const removeTag = (index) => {
    let newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  };

  useEffect(() => {
    console.log(tagText);
    if (tagText.includes(",")) {
      setTags([...tags, tagText.split(",")[0]]);
      setTagText("");
    }
    console.log(tags);
  }, [tagText]);

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
            className="text-[16px] text-[#828282] font-medium"
          >
            Exhibition Name 1
          </Text>
          <IcDown />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Exhibition Name
          </Text>

          <InputFeild
            placeholder="Enter the Exhibition Name"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Start Date
          </Text>

          <InputFeild
            placeholder="Enter the Start Date"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            End Date
          </Text>

          <InputFeild
            placeholder="Enter the end date"
            // value={companyName}
            onChangeText={(text) => setCompanyName(text)}
            secureTextEntry={false}
          />
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Tags
          </Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            className=" p-2 rounded-md border-[1px] border-gray-300 flex flex-row "
          >
            {tags.map((tag, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => removeTag(index)}
                className="bg-blue-100  gap-x-2 mx-1 rounded-full flex flex-row items-center w-fit p-1 px-4"
              >
                <Text>{tag}</Text>
                <IcClose width={8} height={8} />
              </TouchableOpacity>
            ))}
            <View className="flex-1">
              <TextInput
                value={tagText}
                className="w-full"
                onChangeText={(text) => setTagText(text)}
                placeholder="Add Tag"
              />
            </View>
          </ScrollView>
        </View>

        <View className="mt-2">
          <Text className="text-[12px] font-medium text-[#828282] mb-2">
            Location
          </Text>

          <TextInput
            className="border border-gray-300 p-2 rounded-md"
            placeholder="Description"
            multiline={true}
            onChangeText={handleChangeText}
            onContentSizeChange={(e) => {
              setHeight(Math.max(40, e.nativeEvent.contentSize.height));
            }}
          />
        </View>

        <View className="mt-2 bg-blue-50 py-2 px-2 rounded-lg">
          <View className="flex flex-row items-center justify-between ">
            <Text className="italic text-gray-500 font-medium">Invites</Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled ? "white" : "white"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View className={`${isEnabled ? "" : "hidden"}`}>
            <View className="flex flex-row items-center mt-4 justify-between">
              <TouchableOpacity
                onPress={() => setShare(!share)}
                className={` ${
                  !share
                    ? "border-blue-400 bg-blue-200"
                    : "border-gray-300 bg-gray-200"
                } border w-[48%]  p-2 rounded-full flex flex-row items-center justify-center`}
              >
                <View className="flex flex-row items-center gap-2">
                  <IcEmail />
                  <View className="flex flex-row items-center justify-between">
                    <Text
                      className={`${
                        !share ? "text-blue-600" : "text-gray-700"
                      } mr-3`}
                    >
                      Emails
                    </Text>
                    {!share && <IcClose width={8} height={8} />}
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShare(!share)}
                className={` ${
                  share
                    ? "border-blue-400 bg-blue-200"
                    : "border-gray-300 bg-gray-200"
                } border w-[48%]  p-2 rounded-full flex flex-row items-center justify-center`}
              >
                <View className="flex flex-row items-center gap-2">
                  <IcWhatsapp />
                  <View className="flex flex-row items-center justify-between">
                    <Text
                      className={`${
                        share ? "text-blue-600" : "text-gray-700"
                      } mr-3`}
                    >
                      Whatsapp
                    </Text>
                    {share && <IcClose width={8} height={8} />}
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View className="bg-white p-4 mt-4 rounded-xl border-[0.8px] border-gray-300">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-[14px] font-semibold">
                  Whatsapp invite message template
                </Text>
                <IcPen />
              </View>
              <Text className="text-[12px] text-gray-500 my-2">
                This is a dummy text message just to...
              </Text>

              <View className="flex flex-row items-center gap-2">
                <IcAttachment />
                <Text className="text-[12px] text-gray-500">
                  Attach for invite
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center justify-center">
              <TouchableWithoutFeedback>
                <Text className="text-[16px] font-medium text-[#2F80ED] underline mt-4">
                  Share on social media
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View className="mt-2 bg-blue-50 py-2 px-2 rounded-lg">
          <View className="flex flex-row items-center justify-between">
            <Text className="italic text-gray-500 font-medium">
              Exhibition Cost
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled1 ? "white" : "white"}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View className={`${isEnabled1 ? "mt-4" : "hidden"}`}>
            {isEnabled1 && (
              <Slider
                style={{
                  width: "100%",
                }}
                minimumValue={10000}
                maximumValue={500000}
                value={sliderValue}
                onValueChange={onValueChange}
                minimumTrackTintColor="#2F80ED"
                maximumTrackTintColor="gray"
                thumbTintColor="#007AFF"
              />
            )}

            <View className="flex flex-row items-center justify-between my-4">
              <View className="bg-gray-200 p-2 rounded border-[0.2px]">
                <Text>{sliderValue.toFixed()}</Text>
              </View>

              <View className="bg-gray-200 p-2 rounded border-[0.2px]">
                <Text>{5000 * 100}</Text>
              </View>
            </View>

            <View className="bg-white rounded-lg p-2 mt-2">
              <View className="flex flex-row items-center justify-between">
                <Text>Rental Cost</Text>

                <IcPen />
              </View>

              <View className="flex flex-row items-center gap-2 my-1">
                <Text className="text-[12px] text-gray-400">
                  {" "}
                  Budget: 70,000 max.
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center justify-center">
              <TouchableWithoutFeedback>
                <Text className="text-[16px] font-medium text-[#2F80ED] underline mt-4">
                  + Add other expenses
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View className="mt-2 bg-blue-50 p-2 rounded-lg">
          <View className="flex flex-row items-center justify-between ">
            <Text className="italic text-gray-500 font-medium">
              Contact Details
            </Text>
            <Switch
              trackColor={{ false: "#8282828b", true: "#2f81ed4d" }}
              thumbColor={isEnabled2 ? "white" : "white"}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View className={`${isEnabled2 ? "mt-4 flex " : "hidden"}`}>
            <View className="mt-2">
              <Text className="text-[12px] font-medium text-[#828282] mb-2">
                Profession
              </Text>

              <View className="flex flex-row items-center justify-between">
                <View className="flex-1">
                  <InputFeild
                    className="p-2 border border-blue-300 rounded-md bg-white"
                    placeholder="Select the profession"
                  />
                </View>

                <TouchableOpacity className="bg-gray-300 p-[14px] rounded-md ml-1">
                  <IcSearch />
                </TouchableOpacity>
              </View>
            </View>

              <Text className="text-[12px] mt-2 font-medium text-[#828282] mb-2">
                Contact Person
              </Text>
              <View className="flex-1">
                <InputFeild
                  className="p-2 border border-blue-300 rounded-md bg-white flex-1"
                  placeholder="Select the contact person"
                />
              </View>

            {/* Mobile Number */}
            <View className="mt-4 ">
              <Text className="text-[13px] font-medium text-[#828282] mb-2">
                Mobile Number
              </Text>
              <View className="flex flex-row items-center border border-blue-200 bg-white  rounded-md">
                <TouchableOpacity>
                  <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                    <IcFlagIndia />
                    <IcDown />
                  </View>
                </TouchableOpacity>
                <View className="flex-1">
                  <TextInput
                    placeholder="+91 9876543210"
                    secureTextEntry={false}
                    inputMode="numeric"
                  />
                </View>
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
                <View className="flex flex-row items-center border border-blue-200 bg-white  rounded-md">
                  <TouchableOpacity>
                    <View className=" p-3 rounded-md mr-2 gap-x-3 flex flex-row items-center justify-center">
                      <IcFlagIndia />
                      <IcDown />
                    </View>
                  </TouchableOpacity>
                  <View className="flex-1">
                    <TextInput
                      placeholder="+91 9876543210"
                      secureTextEntry={false}
                      inputMode="numeric"
                    />
                  </View>
                </View>
              </View>
            )}

            <View className="mt-2">
              <Text className="text-[12px] font-medium text-[#828282] mb-2">
                Email Address
              </Text>
              <View className="flex-1">
                <InputFeild
                  className="p-2 border border-blue-300 rounded-md bg-white flex-1"
                  placeholder="Enter the email address"
                />
              </View>
            </View>

            {saveNew && (
              <View className="bg-white rounded-lg p-2 mt-2">
                <View className="flex flex-row items-center justify-between">
                  <Text>Praveen Sharma</Text>

                  <IcPen />
                </View>

                <View className="flex flex-row items-center gap-2 my-1">
                  <IcCall />
                  <Text className="text-[12px] text-gray-400">
                    {" "}
                    +91-7856632923
                  </Text>
                </View>

                <View className="flex flex-row items-center gap-2 my-1">
                  <IcMail />
                  <Text className="text-[12px] text-gray-400">
                    {" "}
                    praveen@gmail.com
                  </Text>
                </View>

                <View className="flex flex-row items-center gap-2 my-1 ">
                  <IcVender />
                  <Text className="text-[12px] text-gray-400"> Vender</Text>
                </View>
              </View>
            )}
            <View className="fles flex-row items-center justify-center w-full mt-8">
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate("AddContactPerson");
                }}
              >
                <Text
                  className={`text-[16px] font-medium text-[#2F80ED] underline`}
                >
                  + Add contact person
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>

        <View className="mt-4 flex flex-row items-center justify-between">
          <TouchableOpacity
            onPress={handleBack}
            className={`py-3 bg-white border-[1px] w-[48%] border-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
              Discard
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleBack}
            className={`py-3  w-[48%]  bg-[#2F80ED]  rounded-xl`}
          >
            <Text className="text-[16px] font-semibold text-center text-white">
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col items-center justify-center mt-4">
          <TouchableWithoutFeedback onPress={() => setSaveNew(true)}>
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

export default ExhibitionDetailsScreen;
