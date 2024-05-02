import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/onboarding/WelcomeScreen";
import SignupScreen from "../screens/authentication/SignupScreen";
import LoginScreen from "../screens/authentication/LoginScreen";
import ForgetPasswordScreen from "../screens/authentication/ForgetPasswordScreen";
import TabNavigation from "./tabNavigation";
import CheckEmailScreen from "../screens/authentication/CheckEmail";
import CreatePasswordScreen from "../screens/authentication/CreatePassword";
import SubscriptionScreen from "../screens/tasks/SubscriptionScreen";
import { DrawerActions } from "@react-navigation/native";
import ReportScreeen from "../screens/report/ReportScreen";
import IcMenu from "../assets/icons/ic_menu.svg";
import ReportFilterScreen from "../screens/report/ReportsFilter";
import DashboardScreen from "../screens/admin/DashboardScreen";
import TemplateScreen from "../screens/smi/TemplateScreen";
import EditTemplateScreen from "../screens/smi/EditTemplateScreen";
import CurrentSubscription from "../screens/dashboard/CurrentSubscription";
import RequestRefund from "../screens/dashboard/RequestRefund";
import TrackRefundStatus from "../screens/dashboard/TrackRefundStatus";
import AdminTabNavigation from "./adminNavigation";
import SupportScreen from "../screens/support/SupportScreen";
import ServerScreen from "../screens/server/ServerScreen";
import { useUserRole } from "../context/UserContext";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tab"
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Tab"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="AdminDashboard"
        options={{ headerShown: false }}
        component={AdminTabNavigation}
      />

      <Drawer.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="SIMScreen"
        component={TemplateScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="EditTemplate"
        component={EditTemplateScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Reports"
        component={ReportScreeen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ReportsFilter"
        component={ReportFilterScreen}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="CurrentSubscription"
        component={CurrentSubscription}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="RequestRefund"
        component={RequestRefund}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="TrackRefundStatus"
        component={TrackRefundStatus}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SupportScreen"
        component={SupportScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="ServerScreen"
        component={ServerScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  const { userType } = useUserRole();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  useEffect(() => {
    console.log(userType);
  }, [userType]);

  const handleNavigateHome = () => {
    if (userType == "admin") {
      navigation.navigate("AdminDashboard");
    } else {
      navigation.navigate("Tab", {
        screen: "HomeStack",
        params: {
          screen: "Home",
        },
      });
    }
  };

  return (
    <View className="mt-2 px-2">
      <View className="flex flex-row items-center justify-between px-4 py-2 mb-10 ">
        <TouchableOpacity onPress={closeDrawer}>
          <View className="p-2  rounded-lg bg-gray-50 shadow-2xl flex items-center justify-center  ">
            <IcMenu width={20} height={20} />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "SubscriptionScreen",
          })
        }
      >
        <Text className="font-semibold ">Subscription Model</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 my-2 rounded-xl"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "CurrentSubscription",
          })
        }
      >
        <Text className="font-semibold ">Current Subscription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={() =>
          //open reports sceen
          navigation.navigate("Home", {
            screen: "SIMScreen",
          })
        }
      >
        <Text className="font-semibold ">Social Media Integration</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={() =>
          //open reports sceen
          navigation.navigate("Home", {
            screen: "Reports",
          })
        }
      >
        <Text className="font-semibold ">Reports Segment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={() =>
          //open reports sceen
          navigation.navigate("SupportScreen")
        }
      >
        <Text className="font-semibold ">Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={() =>
          //open reports sceen
          navigation.navigate("Home", {
            screen: "ServerScreen",
          })
        }
      >
        <Text className="font-semibold ">Server Processing Time</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#F4F9FF] p-4 rounded-xl my-2"
        onPress={handleNavigateHome}
      >
        <Text className="font-semibold ">Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Signup"
        options={{ headerShown: false }}
        component={SignupScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="ForgetPassword"
        options={{ headerShown: false }}
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name="CheckEmail"
        options={{ headerShown: false }}
        component={CheckEmailScreen}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{ headerShown: false }}
        component={CreatePasswordScreen}
      />
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {() => <DrawerNavigation />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
