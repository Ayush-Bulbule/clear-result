import AppNavigation from "./navigation/appNavigation";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import { MenuProvider } from "react-native-popup-menu";

import { UserRoleProvider } from "./context/UserContext";
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <MenuProvider>
        <UserRoleProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </UserRoleProvider>
      </MenuProvider>
    </ApplicationProvider>
  );
}
