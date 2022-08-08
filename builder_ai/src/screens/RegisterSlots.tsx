import React, { useContext, useState } from "react";
import { Alert, View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment from "moment";

import { AppContext } from "../context/AppContext";
import { Slot } from "../types/context";
import { RootStack } from "../types/navigation";
import { REGISTER_SLOT } from "../context/action";

type Props = {
    navigation: NativeStackNavigationProp<RootStack, "RegisterSlots">;
}

const RegisterSlots: React.FC<Props> = ({ navigation }) => {

    const [regNo, setRegNo] = useState<string>("");
    const { state, dispatch } = useContext(AppContext);

    const handleRegister = () => {
        let doesIdExist: boolean = false;
        const freeSlotId = Object.keys(state.slots).find((id) => {
            if (state.slots[id].regNo === regNo) {
                doesIdExist = true;
            }
            return !state.slots[id].regNo;
        });
        if (doesIdExist) {
            Alert.alert("", "This vehicle is already registerd.");
            return;
        }
        if (!freeSlotId) {
            Alert.alert("", "No slots are available right now.");
            return;
        }
        const newSlot: Slot = {
            slotId: freeSlotId,
            createdAt: moment(),
            regNo
        }
        dispatch({ type: REGISTER_SLOT, payload: newSlot });
        setRegNo("");
        Alert.alert("", "Slot booked successfully.");
        setTimeout(() => {
            navigation.goBack();
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <Title>Register new vehicle</Title>
            <TextInput
                label="Enter registration number"
                value={regNo}
                onChangeText={setRegNo}
                mode="outlined"
                maxLength={10}
                style={styles.input}
                testID="parking-drawing-registration-input"
            />
            <Button
                onPress={handleRegister}
                mode="contained"
                disabled={!regNo}
                contentStyle={styles.button}
                testID="parking-drawing-add-car-button"
            >
                Register
            </Button>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: "5%"
    },
    input: {
        marginBottom: 20
    },
    button: {
        height: 50
    }
}

export default RegisterSlots;