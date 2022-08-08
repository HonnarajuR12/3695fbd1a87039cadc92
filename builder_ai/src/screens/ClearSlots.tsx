import React, { useContext, useMemo } from "react";
import { View, FlatList, Alert } from "react-native";
import { Button, Paragraph, List, Title } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment, { Moment } from "moment";

import { AppContext } from "../context/AppContext";
import { checkStatus } from "../actions";
import { RootStack } from "../types/navigation";
import { UPDATE_SLOT } from "../context/action";

type Props = {
    navigation: NativeStackNavigationProp<RootStack, "ClearSlots">;
}

const ClearSlots: React.FC<Props> = ({ navigation }) => {

    const { state, dispatch } = useContext(AppContext);

    const slots = useMemo(() => Object.values(state.slots), [state]);

    const calculateHours = (date: Moment) => {
        const hours = moment().diff(date, "hours");
        return hours || 1;
    }

    const calculateAmount = (date: Moment) => {
        const hours = calculateHours(date);
        if (hours <= 2) {
            return 10;
        }
        return (hours - 1) * 10;
    }

    const handleClear = async (id: string) => {
        const { [id]: slot, ...rest } = state.slots;
        const updatedSlot = {
            ...slot,
            regNo: ""
        }
        const status = await checkStatus(slot.regNo, calculateAmount(slot.createdAt));
        if (status) {
            dispatch({
                type: UPDATE_SLOT,
                payload: {
                    ...rest,
                    [id]: updatedSlot
                }
            });
            Alert.alert("", "Slot deallocated successfully.");
        } else {
            Alert.alert("", "Slot deallocation failed.")
        }
    }

    return (
        <View style={styles.container} testID="deregister-car-registration">
            <FlatList
                data={slots}
                keyExtractor={item => item.slotId}
                ListEmptyComponent={<Paragraph>No slots are booked</Paragraph>}
                renderItem={({ item, index }) => {
                    if (!item.regNo) return <View testID={`parking-drawing-space-${index}`} />;
                    return (
                        <List.Section style={styles.row} testID={`parking-drawing-registered-${index}`}>
                            <Title testID={`parking-drawing-space-number-${index}`}>ID: {item.slotId}</Title>
                            <Paragraph>Reg no: {item.regNo}</Paragraph>
                            <Paragraph testID="deregister-time-spent">Duration: {calculateHours(item.createdAt)} hours</Paragraph>
                            <Paragraph testID="deregister-charge">Amount: ${calculateAmount(item.createdAt)}</Paragraph>
                            <Button
                                mode="outlined"
                                onPress={() => handleClear(item.slotId)}
                                contentStyle={styles.button}
                                testID="deregister-payment-button"
                            >
                                Payment Taken
                            </Button>
                        </List.Section>
                    );
                }}
            />
            <Button
                mode="contained"
                onPress={navigation.goBack}
                style={styles.button}
                testID="deregister-back-button"
            >
                Back
            </Button>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: "5%"
    },
    button: {
        height: 50
    },
    row: {
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1
    }
}

export default ClearSlots;