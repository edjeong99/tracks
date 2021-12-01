import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
   
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView >
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                <NavigationEvents 
                onWillFocus={clearErrorMessage} 
                />
                    <AuthForm 
                    headerText = "Sign In for Tracker"
                    errorMessage = {state.errorMessage}
                    submitButtonText = "Sign In"
                    onSubmit ={signin}
                    />
               <NavLink
                    text = "Don't have an account? Sign up instead"
                    routeName = "Signup"
               />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };
const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingVertical: 150,
    },
    container: {
        borderColor: 'red',
        borderWidth: 3,
        flex: 1,
        justifyContent: 'center',
        // marginBottom: 200
    },
});

export default SigninScreen;


