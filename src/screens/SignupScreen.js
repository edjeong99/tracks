import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { state, signup } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView >
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.container}>
                    <Spacer>
                        <Text h4>Sign Up for Tracker</Text>
                    </Spacer>
                    <Input
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Spacer />
                    <Input
                        secureTextEntry
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
                    <Spacer>
                        <Button title="Sign Up"
                            onPress={() => signup({ email, password })} />
                    </Spacer>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <Text style={styles.link}>Already have an account? Sign in instead</Text>
                    </TouchableOpacity>
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
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;

