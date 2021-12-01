import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
   
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView >
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                <NavigationEvents 
                onWillFocus={clearErrorMessage} 
                />
                    <AuthForm 
                    headerText = "Sign Up for Tracker"
                    errorMessage = {state.errorMessage}
                    submitButtonText = "Sign Up"
                    onSubmit ={signup}
                    />
               <NavLink
                    text = "Already have an account? Sign in instead"
                    routeName = "Signin"
               />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

// not showing header
SignupScreen.navigationOptions = () => {
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

export default SignupScreen;

