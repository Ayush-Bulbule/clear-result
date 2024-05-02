import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

import React, { useEffect, useState } from "react";
import TopBar from "../../components/ui/TopBar";
import CrLogo from "../../assets/images/cr_logo.png";
import IcFilter from "../../assets/icons/ic_filter.svg";
import IcFilterDown from "../../assets/icons/ic_filter_down.svg";
import ProspectsTopNavigation from "../../components/ProspectsTopNavigation";
import Screen from "../../components/ui/Screen";
import Button from "../../components/ui/Button";
import SuccessToast from "../../components/SuccessToast";

const ProspectsScreen = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [dropdwn, setDropdwn] = useState(false);

  const [bulkDeleteNotification, setBulkDeleteNotification] = useState(false);
  const [bulkTransferNotification, setBulkTransferNotification] = useState(false);

  const [bulkDelete, setBulkDelete] = useState(false);
  const [bulkTransfer, setBulkTransfer] = useState(false);

  const handleBulkTransfer = () => {
    setBulkTransfer(!bulkTransfer);
    setBulkDelete(false);
    setDropdwn(false);
  };

  const handleBulkDelete = () => {
    setBulkDelete(!bulkDelete);
    setBulkTransfer(false);
    setDropdwn(false);
  };

  return (
    <>
    <Screen>
      <TopBar logo={CrLogo} />

      {/* Top  Title and Filter */}

      <View className="">
        <View className="flex flex-row items-center justify-between px-4 py-4">
          <Text
            className="text-[18px]"
            style={{ fontFamily: "Poppins-Regular", fontWeight: 600 }}
          >
            {/* {isFilterVisible ? "Task Filters" : "Prospects"} */}
            Prospects
          </Text>
          <View className="relative">
            <View className="flex flex-row items-center gap-2">
              <TouchableOpacity
                onPress={() => setDropdwn(!dropdwn)}
                style={{
                  backgroundColor: "white",
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 5,
                  elevation: 5,
                }}
                activeOpacity={0.8}
              >
                <Text
                  style={{
                    color: "#2F80ED",
                    fontFamily: "Poppins-Regular",
                    marginRight: 5,
                  }}
                >
                  Actions
                </Text>
                <IcFilterDown />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: isFilterVisible ? "#FFF6DE" : "white",
                  paddingVertical: 12,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  elevation: 5,
                }}
              >
                <IcFilter />
              </TouchableOpacity>
            </View>

            {/* Drop Down */}
            <View
              className={`${
                dropdwn ? "" : "hidden"
              } z-50 absolute top-12 left-2 p-2 rounded-lg shadow-md shadow-gray-600 bg-white`}
            >
              <TouchableOpacity
                onPress={handleBulkDelete}
                className="px-4 py-2 rounded-md"
              >
                <Text className="text-sm ">Bulk Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleBulkTransfer}
                className="px-4 py-2 rounded-md"
              >
                <Text className="text-sm ">Bulk Transfer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Content Tabs */}
      <ProspectsTopNavigation
        bulkDelete={bulkDelete}
        bulkTransfer={bulkTransfer}
        setBulkDelete={setBulkDelete}
        setBulkTransfer={setBulkTransfer}
      />
      {bulkDelete ||
        (bulkTransfer && (
          <View>
            <Button title="Apply" />
            <Button title="Cancel" />
          </View>
        ))}
    </Screen>


    </>

  );
};

export default ProspectsScreen;
