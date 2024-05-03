import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from "react-native";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";

// somewhere in your app
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

import Avatar02 from "../../assets/icons/avatar_02.svg";
import { Swipeable } from "react-native-gesture-handler";
import IcCloseX from "../../assets/icons/ic_close_x.svg";
import BgCorner from "../../assets/images/prospect_corner_bg.png";
import IcMore from "../../assets/icons/ic_vertical_dots.svg";
import Checkbox from "../ui/Checkbox";
import MoreCall from "../../assets/icons/more_call.png";
import MoreEmail from "../../assets/icons/more_mail.png";
import MoreWhatsapp from "../../assets/icons/more_whatsapp.png";
import IcMorePhone from "../../assets/icons/more_phone.svg";
import IcMoreEmail from "../../assets/icons/more_email.svg";
import IcMoreWhatsapp from "../../assets/icons/more_whatsapp.svg";

const LeftSwipeActions = () => {
  return (
    <View className="flex items-center py-4">
      <View className="bg-green-500 flex-1 px-4 flex-row  flex items-center justify-center rounded-md ">
        <Text className="text-white text-center font-semibold px-8">
          Pravin's Task Completed!
        </Text>
        <IcCloseX />
      </View>
    </View>
  );
};
const rightSwipeActions = () => {
  return (
    <View className="flex items-center py-4">
      <View className="bg-amber-500 flex-1 px-4 flex-row  flex items-center justify-center rounded-md ">
        <Text className="text-white text-center font-semibold px-8">
          Rescheduling Task!
        </Text>
        <IcCloseX />
      </View>
    </View>
  );
};

const ProspectUserListItem = ({
  item,
  handleLeftSwipe,
  handleRightSwipe,
  bulk,
}) => {
  const swipeFromLeftOpen = () => {
    handleRightSwipe();
  };
  const swipeFromRightOpen = () => {
    handleLeftSwipe();
  };
  return (
    <Swipeable
      renderLeftActions={LeftSwipeActions}
      renderRightActions={rightSwipeActions}
      onSwipeableLeftOpen={swipeFromLeftOpen}
      onSwipeableRightOpen={swipeFromRightOpen}
    >
      <View className=" bg-white  shadow-sm m-2 border-gray-300 shadow-gray-500 rounded-xl flex-row justify-between">
        <View className="py-6 rounded-lg p-2 flex-row items-center">
          {bulk ? <Checkbox /> : null}
          <Avatar02 width="64" height="64" />
          <View className="pl-2">
            <Text className="text-lg font-semibold">{item.name}</Text>
            <Text className="text-sm text-gray-400">{item.email}</Text>
          </View>
        </View>

        {/* More actions */}
        <ImageBackground
          source={BgCorner}
          borderTopRightRadius={10}
          className="w-10 h-16 rounded-tr-xl flex items-center "
        >
          <Menu>
            <MenuTrigger
              style={{
                width: 35,
                height: "85%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: 15,
              }}
            >
              <IcMore />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionsContainer: {
                  marginTop: 60,
                  alignItems: "flex-end",
                  backgroundColor: "transparent",
                  shadowColor: "transparent",
                  display: "flex",
                  alignContent:"center"
                },
                optionWrapper: {
                  backgroundColor: "transparent",
                  shadowColor: "transparent",
                },
              }}
            >
              <MenuOption
                customStyles={{
                  optionWrapper: {
                    backgroundColor: "transparent",
                  },
                }}
                onSelect={() => alert(`Contact via Phone`)}
              >
                <View className="w-10 h-10 rounded-full shadow-2xl  shadow-gray-900 bg-amber-50 flex items-center justify-center">
                  <IcMorePhone width={20} height={20}/>
                </View>
              </MenuOption>


              <MenuOption
                customStyles={{
                  optionWrapper: {
                    backgroundColor: "transparent",
                  },
                }}
                onSelect={() => alert(`Contact via Phone`)}
              >
                <View className="w-10 h-10 rounded-full shadow-2xl  shadow-gray-900 bg-amber-50 flex items-center justify-center">
                  <IcMoreEmail width={20} height={20}/>
                </View>
              </MenuOption>

              <MenuOption
                customStyles={{
                  optionWrapper: {
                    backgroundColor: "transparent",
                  },
                }}
                onSelect={() => alert(`Contact via Phone`)}
              >
                <View className="w-10 h-10 rounded-full shadow-2xl  shadow-gray-900 bg-amber-50 flex items-center justify-center">
                  <IcMoreWhatsapp width={20} height={20}/>
                </View>
              </MenuOption>


            </MenuOptions>
          </Menu>
        </ImageBackground>
      </View>
    </Swipeable>
  );
};

export default ProspectUserListItem;
