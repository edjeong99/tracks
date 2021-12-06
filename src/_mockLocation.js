// this file is to simulate a movement to create track

import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp : 10000000,
        coords:{
            speed:0,
            heading : 0,
            accuracy:5,
            altitudeAccuracy :5,
            altitude : 5,
            logitude : -96.63386273895912 + increment * tenMetersWithDegrees,
            latitude:33.109741995567781 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++;
}, 1000)