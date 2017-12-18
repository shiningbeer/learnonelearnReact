import * as TYPES from '../actions/types';

const initialState = {
    isLoading: false,
    data: "11",
    severError: false,
};

export default function findReducer(state = initialState, action) {

    switch (action.type) {
        case TYPES.FETCHING_USER_MARKETS:
            return {
                ...state,
                isLoading: true,
            };
            break;

        case TYPES.RECEIVED_USER_MARKETS:
            return {
                ...state,
                data: "22",
            };
            break;

        case TYPES.ERROR_FETCHING_USER_MARKETS:
            return {
                ...state,
                data: "33",
                severError: true,
            };
            break;
        default:
            return state;
    }

}