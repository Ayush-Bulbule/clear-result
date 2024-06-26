import {
  View,
  Text,
  ImageBackground,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IcClock from "../assets/icons/ic_clock.svg";
import IcHome from "../assets/icons/ic_home.svg";

const UpcomingExCard = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View className={`w-screen pr-10 mr-3`}>
      <View className=" bg-white h-auto flex flex-col overflow-hidden rounded-3xl">
        <View className="h-32 relative rounded-3xl p-0 overflow-hidden">
          <Image
            source={require("../assets/images/google-placeholder.png")}
            resizeMode="cover"
            className={`h-full w-full`}
          />
          <Image
            source={require("../assets/images/badge_upcoming.png")}
            resizeMode="cover"
            className={` absolute bottom-0 right-0`}
          />
        </View>
        <View className="px-4 py-2 gap-y-1">
          {/* Title */}
          <Text
            className={"text-xl font-semibold text-ellipsis line-clamp-1"}
            style={{ fontFamily: "Poppins-Regular" }}
          >
            Fashion Gallery{" "}
          </Text>
          {/* Grid */}
          <View className="flex-row items-center gap-x-2">
            <IcHome width={16} height={16} />
            <Text
              className={"text-sm font-semibold text-ellipsis line-clamp-2"}
              style={{ fontFamily: "Poppins-Regular" }}
            >
              Mon - Sat
            </Text>
          </View>
          <View className="flex-row items-center gap-x-2">
            <IcClock width={16} height={16} />
            <Text
              className={"text-sm font-semibold text-ellipsis line-clamp-2"}
              style={{ fontFamily: "Poppins-Regular" }}
            >
              10:00 am to 13:00 pm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UpcomingExCard;
