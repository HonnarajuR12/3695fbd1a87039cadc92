import React, { useState, useMemo, useContext } from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment from "moment";

import { AppContext } from "../context/AppContext";
import { ParkingLot, Slot } from "../types/context";
import { RootStack } from "../types/navigation";
import { CREATE_SLOTS } from "../context/action";

type Props = {
    navigation: NativeStackNavigationProp<RootStack, "CreateSlots">;
}

const CreateSlots: React.FC<Props> = ({ navigation }) => {

    const [slots, setSlots] = useState<string>("");
    const { state, dispatch } = useContext(AppContext);

    const slotCount = useMemo(() => Object.keys(state.slots).length, [state]);

    const handleCreate = () => {
        const count = Number(slots);
        if (count !== NaN) {
            const slotMap: ParkingLot = {};
            for (let i = 0; i < count; i++) {
                const slotId = Math.random().toString();
                const slot: Slot = {
                    slotId,
                    createdAt: moment(),
                    regNo: ""
                }
                slotMap[slotId] = slot;
            }
            dispatch({ type: CREATE_SLOTS, payload: slotMap });
            setSlots("");
            Alert.alert("", "Slots created successfully.");
            setTimeout(() => {
                navigation.goBack();
            }, 1500);
        }
    }

    return (
        <View style={styles.container}>
            <Title>{slotCount ? slotCount : "No"} slots created so far</Title>
            <TextInput
                label="How many slots to create?"
                value={slots}
                onChangeText={setSlots}
                mode="outlined"
                keyboardType="number-pad"
                maxLength={2}
                style={styles.input}
                testID="parking-create-text-input"
            />
            <Button
                onPress={handleCreate}
                mode="contained"
                disabled={!slots}
                contentStyle={styles.button}
                testID="parking-create-submit-button"
            >
                Create
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

export default CreateSlots;