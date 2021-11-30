import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
        return {...state, errorMessage: action.payload};
    case 'signup':
            return {token:action.payload, errorMessage: ''};
    default:
      return state;
  }
};
 

const signup = dispatch => async ({email, password}) => {
    try{ 
            // make api request to signup
            const response = await trackerApi.post('./signup', {email, password});
            //console.log(response.data);
          // if signup successful, modify state and say we are authenticated
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup', payload:response.data.token})

            //navigate to main flow
        } catch(err){   // if singup fail, show error message
         //   console.log(err.response.data);
         dispatch({type:'add_error', payload:"Error with Sign Up"})
        }
    }
    


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
  {signin, signup, signout},
  {errorMessage:'', token:null }
);