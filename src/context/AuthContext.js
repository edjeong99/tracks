import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
      case "add_error":
        return { ...state, errorMessage: action.payload };
      case "signin":
          return { errorMessage: "", token: action.payload };
      case "clear_error_message":
        return { ...state, errorMessage:''}
      default:
        return state;
    }
  };
 
const clearErrorMessage = dispatch => () => {
  console.log("clearError");
  dispatch({
    type:"clear_error_message"
  })
}
  const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
  console.log(response);
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
    


const signin = (dispatch) =>async ({ email, password }) => {
     try{
      const response = await trackerApi.post("/signin", { email, password });
      console.log(response);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
     }catch(err){
       console.log(err);
        dispatch({
          type:'add_error',
          payload: "Something went wrong with sign in",
        })
     }

    
}
const signout = (dispatch) =>{
    return () => {
        // signout

    }
}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage },
    { token: null, errorMessage: "" }
  );
  

 