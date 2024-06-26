import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Screen from "../../components/ui/Screen";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import React, { useState } from "react";
import IcSearch from "../../assets/icons/ic_search.svg";
import Checkbox from "../../components/ui/Checkbox";
import { useNavigation } from "@react-navigation/native";

const AddContactPerson = () => {
  const [activeButton, setActiveButton] = useState(0);
  const items = [
    { label: "Vendor", value: "Vendor" },
    { label: "Manager", value: "Manager" },
    { label: "Retailer", value: "Retailer" },
    { label: "Profession 1", value: "Profession 1" },
    { label: "Profession 2", value: "Profession 2" },
  ];

  const names = [
    "Praveen Sharma",
    "Ananya Gupta",
    "Madhu Agrawal",
    "Rahul Shah",
    "Mohit Kale",
    "Ritika Agrawal",
    "Reena Desai",
    "Suyash Rathi",
    "Varun Nair",
    "Rohit Ray",
  ];
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // ES6 syntax for swapping elements
    }
    return array;
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={CrLogo} />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 220 }}
        showsVerticalScrollIndicator={false}
        className="py-4 mb-[30rem]"
      >
        <Text className="text-[18px] font-medium  mb-2 px-4">
          Profession Filters
        </Text>

        <View className="bg-white  pt-4">
          <View className="flex flex-row h-full">
            <View className="w-[35%]">
              {items.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setActiveButton(index);
                  }}
                  style={{
                    backgroundColor:
                      activeButton === index ? "white" : "#F8F8F8",
                    padding: 20,
                    paddingVertical: 26,
                    borderBottomWidth: index > 0 ? 0.8 : 0,
                    borderTopWidth: index > 0 ? 0.8 : 0,
                    borderColor: "#E1E1E1",
                  }}
                >
                  <Text className="text-center w-full text-[12px] font-medium">
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View className="w-full px-4">
              {activeButton === 0 ? (
                <Vendor names={names} />
              ) : (
                <Vendor names={shuffleArray(names)} />
              )}
              {/* {activeButton === 1 ? <StoreCompany /> : null}
          {activeButton === 2 ? <EventExhibition /> : null}
          {activeButton === 3 ? <ContactPerson /> : null} */}
            </View>
          </View>

          <Text className="text-[12px] italic text-[#828282] absolute bottom-[-4%] left-[36%]  ">
            Powered by ClearResults
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
};

const Vendor = ({names}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text className="text-[12px] font-bold text-[#828282]">
        Search States
      </Text>
      <View className="w-56 mb-6 mt-2 flex flex-row items-center border border-blue-300 p-2 rounded-lg">
        <View className="mr-2">
          <IcSearch />
        </View>
        <TextInput className=" " placeholder="Search state" />
      </View>

      <Text className="text-[12px] font-bold text-[#828282]">Names</Text>

      {names.map((name, index) => (
        <Checkbox key={index} label={name} />
      ))}

      <View className=" flex flex-row items-center gap-2 mt-4">
        <TouchableOpacity
          className={`py-3 bg-white border-[1px] w-[29%] border-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-[#2F80ED]">
            Discard
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ExhibitionDetails");
          }}
          className={`py-3  w-[29%]  bg-[#2F80ED]  rounded-xl`}
        >
          <Text className="text-[16px] font-semibold text-center text-white">
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddContactPerson;
