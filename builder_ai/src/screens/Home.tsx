import React from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { List, TouchableRipple } from "react-native-paper";

import { RootStack } from "../types/navigation";

type Props = {
    navigation: NativeStackNavigationProp<RootStack, "Home">;
}

const Home: React.FC<Props> = ({ navigation }) => {

    const createSlots = () => navigation.navigate("CreateSlots");
    const registerSlots = () => navigation.navigate("RegisterSlots");
    const updateSlots = () => navigation.navigate("ClearSlots");

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader>
                    Actions
                </List.Subheader>
                <TouchableRipple
                    onPress={createSlots}
                    rippleColor="rgba(0,0,0,.3)"
                >
                    <List.Item title="Create slots" />
                </TouchableRipple>
                <TouchableRipple
                    onPress={registerSlots}
                    rippleColor="rgba(0,0,0,.3)"
                >
                    <List.Item title="Register slots" />
                </TouchableRipple>
                <TouchableRipple
                    onPress={updateSlots}
                    rippleColor="rgba(0,0,0,.3)"
                >
                    <List.Item title="Clear slots" />
                </TouchableRipple>
            </List.Section>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: "5%"
    }
}

export default Home;