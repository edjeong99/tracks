import '../_mockLocation';
import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

const TrackCreateScreen = () => {
const [err, setErr] = useState(null);
    const startWatching = async () => {
      
        try {
          const { granted } = await requestForegroundPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }
          await watchPositionAsync({
            accuracy : Accuracy.BestForNavigation,
            timeInterval : 1000,  //watch every 1 second
            distanceInterval : 10 // watch every 10 meter
          },(location) => {
            console.log(location);
          })
        } catch (e) {
          setErr(e);
        }
      };
useEffect(()=>{
  startWatching();
},[])
  
    return (
    <SafeAreaView forceInset={{top:'always'}}>
        <Text h4> Create Track</Text>
        <Map />
        {err ? <Text>Please enable location service</Text> : null }
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;