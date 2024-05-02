import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/ui/TopBar";
import Logo from "../../assets/images/cr_logo_auth.png";
import Screen from "../../components/ui/Screen";
import colors from "../../constants/colors";

import IcFacebook from "../../assets/icons/ic_facebook.svg";
import IcGoogle from "../../assets/icons/ic_google.svg";
import DynamicToggleButton from "../../components/ui/DynamicToggleButton";
import { useUserRole } from "../../context/UserContext";

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
        className="border border-gray-300 p-2 rounded-md"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
export default function LoginScreen() {
  const [toggleValue, setToggleValue] = useState(false);

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const { setUserRole } = useUserRole();

  const handleToggle = (value) => {
    setToggleValue(value);
  };

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailOrPass, setEmailOrPass] = useState("");
  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const onEmailChange = (text) => {
    if(email!="")
      setEmailErr(false);
    setEmail(text);
  }

  const onPasswordChange = (text) => {
    if(password!="")
      setPasswordErr(false);
    setPassword(text);
  }

  const handleLogin = () => {
    if(email == "" && password == ""){
      setEmailErr(true);
      setPasswordErr(true);
    }
    if (email == "") {
      setEmailErr(true);
      return;
    }
    if (password == "") {
      setPasswordErr(true);
      return;
    }

    if (!email.includes("@") && !email.includes(".")) {
      setEmailOrPass("Please enter a valid email");
      return;
    }

    if (email == "admin@cr.com" && password == "admin") {
      setUserRole("admin");
      navigation.navigate("Home", {
        screen: "AdminDashboard",
      });
      return;
    } else {
      setUserRole("user");
      navigation.navigate("Home");
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <Screen className="bg-white">
      <TopBar logo={Logo} nodrawer={true} />
      <ScrollView>
        <View className="px-4">
          <View className="">
            <View className="flex pb-24 items-end pt-10">
              <TouchableWithoutFeedback onPress={handleSignup}>
                <Text
                  className={`text-sm font-medium text-[${colors.primary}] underline`}
                >
                  Signup
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View className=" flex flex-col justify-center  gap-7">
              <Text
                className={`text-[18px] text-[${colors.primary}] font-medium`}
              >
                Welcome!
              </Text>
              <View>
                <Text className="text-[14px] font-medium text-[#828282] mb-2">
                  Email ID/ Mobile Number
                </Text>
                <TextInput
                  placeholder="olivia@untitledui.com"
                  value={email}
                  onChangeText={(text) => onEmailChange(text)}
                  className={`border ${emailErr||emailOrPass?"border-red-500":"border-gray-300"} p-2 rounded-md mb-2`}
                  secureTextEntry={false}
                />
                {emailErr && (
                  <Text className="text-[12px] text-red-500">
                    This field is mandatory
                  </Text>
                )  
                }

                {emailOrPass != "" && (
                  <Text className="text-[12px] text-red-500">{emailOrPass}</Text>
                )}
              </View>

              <View>
                <Text className="text-[14px] font-medium text-[#828282] mb-2">
                  Password
                </Text>
                <TextInput
                  placeholder="Passw***"
                  value={password}
                  className={`border ${passwordErr?"border-red-500":"border-gray-300"} p-2 rounded-md mb-2`}
                  onChangeText={(text) => onPasswordChange(text)}
                  secureTextEntry={true}
                />
                {passwordErr && (
                  <Text className="text-[12px] text-red-500">
                    This field is mandatory
                  </Text>
                )}
              </View>

              <TouchableOpacity
                onPress={handleLogin}
                className={`py-3 bg-[${colors.primary}]   rounded-lg`}
              >
                <Text className="text-[16px] font-semibold text-center text-white">
                  Login
                </Text>
              </TouchableOpacity>

              <View className="flex flex-col items-center justify-center">
                <Text className="text-[14px] font-normal text-[#333333] mb-4">
                  or login with
                </Text>

                <View className="flex flex-row gap-2 mb-6">
                  <IcFacebook />
                  <IcGoogle />
                </View>

                <TouchableWithoutFeedback onPress={handleForgetPassword}>
                  <Text
                    className={`text-[14px] font-medium text-[${colors.primary}] underline`}
                  >
                    Forget Password
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
