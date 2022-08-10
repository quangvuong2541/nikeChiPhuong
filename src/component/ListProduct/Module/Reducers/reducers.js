import * as ActionType from "../Constants/constants";

const GenderTypeProduct = JSON.parse(
  localStorage.getItem("GenderAndTypeProduct")
);
const search = JSON.parse(localStorage.getItem("GenderAndTypeProduct"));

let initialState = {
  data: [],
  isLoading: false,
  typeProduct: GenderTypeProduct?.typeProduct,
  gender: GenderTypeProduct?.gender,
  filterColor: [],
  filterSize: [],
  dataSort: [],
  dataFilter: [],
  sortByTitle: "",
  dataSearchList: [],
  dataSearchInput: search === null ? [] : search,
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_API_LISTPRODUCT:
      state.data = payload;
      state.dataSort = payload;
      state.dataFilter = payload;

      break;
    case ActionType.IS_LOADING_lIST_PRODUCT:
      state.isLoading = payload;
      break;
    case ActionType.CHANGE_GENDER_TYPEPRODUCT:
      state.typeProduct = payload.typeProduct;
      state.gender = payload.gender;
      localStorage.setItem(
        "GenderAndTypeProduct",
        JSON.stringify({
          gender: state.gender,
          typeProduct: state.typeProduct,
        })
      );
      console.log(state.gender);

      break;
    default:
      break;
  }
  return { ...state };
};

export default Reducer;
