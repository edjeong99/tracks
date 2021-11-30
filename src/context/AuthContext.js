import createDataContext from './createDataContext';
import trackerApi from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
        return {...state, errorMessage: action.payload}

    default:
      return state;
  }
};
 

const signup = (dispatch) =>{
    return async ({email, password}) => {
        // make api request to signup

        // if signup successful, modify state and say we are authenticated

        // if singup fail, show error message

        try{
            const response = await trackerApi.post('./signup', {email, password});
            console.log(response.data);
        } catch(err){
         //   console.log(err.response.data);
         dispatch({type:'add_error', payload:"Error with Sign Up"})
        }

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
  { isSignedIn: false, errorMessage:'' }
);