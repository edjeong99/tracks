import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <Spacer>
                        <Button title="Sign Up" />
                    </Spacer>
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
borderColor : 'red',
borderWidth : 3,
        flex: 1,
        justifyContent: 'center',
       // marginBottom: 200
    }
});

export default SignupScreen;

