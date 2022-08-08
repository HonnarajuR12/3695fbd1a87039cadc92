import { State, Action } from "../types/context";
import { CREATE_SLOTS, REGISTER_SLOT, UPDATE_SLOT } from "./action";

export const initState: State = {
    slots: {}
}

export function appReducer(state = initState, action: Action): State {

    switch (action.type) {
        case CREATE_SLOTS:
            return {
                slots: action.payload
            }
        case REGISTER_SLOT:
            return {
                slots: {
                    ...state.slots,
                    [action.payload.slotId]: action.payload
                }
            }
        case UPDATE_SLOT:
            return {
                slots: action.payload
            }
        default:
            return state;
    }
}