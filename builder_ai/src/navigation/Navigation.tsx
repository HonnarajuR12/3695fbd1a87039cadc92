import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStack } from "../types/navigation";
import Home from "../screens/Home";
import CreateSlots from "../screens/CreateSlots";
import RegisterSlots from "../screens/RegisterSlots";
import ClearSlots from "../screens/ClearSlots";

const { Navigator, Screen } = createNativeStackNavigator<RootStack>();

const Navigation: React.FC = () => {

    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Home"
                    component={Home}
                />
                <Screen
                    name="CreateSlots"
                    component={CreateSlots}
                    options={{ headerTitle: "Create Slots" }}
                />
                <Screen
                    name="RegisterSlots"
                    component={RegisterSlots}
                    options={{ headerTitle: "Register Slots" }}
                />
                <Screen
                    name="ClearSlots"
                    component={ClearSlots}
                    options={{ headerTitle: "Clear Slots" }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Navigation;