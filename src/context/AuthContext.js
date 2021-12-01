import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
      case "add_error":
        return { ...state, errorMessage: action.payload };
      case "signup":
        return { errorMessage: "", token: action.payload };
      default:
        return state;
    }
  };
 

  const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
  console.log(response);
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
    


const signin = (dispatch) =>{
    return ({email, password}) => {
        // make api request to signin

        // if signin successful, modify state and say we are authenticated

        // if signin fail, show error message

    }
}
const signout = (dispatch) =>{
    return () => {
        // signout

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: "" }
  );
  