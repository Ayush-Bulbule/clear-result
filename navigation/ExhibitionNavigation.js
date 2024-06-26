import ExhibitionInfoScreen from "../screens/admin/ExhibitionInfoScreen";
import AddContactPerson from "../screens/exhibition/AddContactPerson";
import ExhibitionDetailsScreen from "../screens/exhibition/ExhibitionDetailsScreen";
import ExhibitionFilter from "../screens/exhibition/ExhibitionFilter";
import InviteUserScreen from "../screens/exhibition/InviteUserScreen";
import ExhibitionScreen from "../screens/tabs/ExhibitionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const ExhibitionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exhibition"
        component={ExhibitionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExhibitionInfo"
        component={ExhibitionInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InviteUser"
        component={InviteUserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ExhibitionFilter"
        component={ExhibitionFilter}
        options={{ headerShown: false }}
        />
      <Stack.Screen
        name="ExhibitionDetails"
        component={ExhibitionDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddContactPerson"
        component={AddContactPerson}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ExhibitionStack;
