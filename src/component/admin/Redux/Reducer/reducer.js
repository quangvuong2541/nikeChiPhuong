import * as Actiontype from "../Constant/Contant";
let initialState = {
    listUser : [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actiontype.LIST_USER:
            state.listUser = payload;
        break;
    }
    return { ...state };
};

export default reducer;