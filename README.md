This is an example project from an online class
https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15708324#overview

This project is a simple React Native app that has authentication (signin, signup) and manage tracks of geo coordinates.



'react-native-element' for styling

 KeyboardAvoidingView, ScrollView to avoid keyboard pushing up screen (keep screen as before)

 ngrok - used to make sure phone is communciateing with localserver
     - need to restart ngrok and put new URL into axios baseURL 
     - execute 'ngrok  http 3000' and get URL from 'FORWARDING'

Use react-native-async-storage to save token
 - import AsyncStorage from '@react-native-async-storage/async-storage';

 NavigationRef - used to get access to navigator (only screen files has prop.navigation.  Context doesn't have that.  so use this)

 NavigationEvents  - listen for navigation and then clear errorMessage


to install dependecy use - npx expo-cli install "dependecy name"
login/pass :  t@t.t,  t