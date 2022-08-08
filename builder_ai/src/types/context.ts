import { types } from "@babel/core";
import { Moment } from "moment";
import { Dispatch } from "react";

import { CREATE_SLOTS, REGISTER_SLOT, UPDATE_SLOT } from "../context/action";

export type Slot = {
    slotId: string;
    createdAt: Moment;
    regNo: string;
}

export type ParkingLot = {
    [id: string]: Slot;
}

export type State = {
    slots: ParkingLot;
}

type CreateAction = {
    type: typeof CREATE_SLOTS;
    payload: ParkingLot;
}

type RegisterAction = {
    type: typeof REGISTER_SLOT;
    payload: Slot;
}

type UpdateAction = {
    type: typeof UPDATE_SLOT;
    payload: ParkingLot;
}

export type Action = CreateAction | RegisterAction | UpdateAction;

export type Context = {
    state: State;
    dispatch: Dispatch<Action>;
}