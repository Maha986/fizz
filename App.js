import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
// import Header from './components/Header';
// import Dashboard from './screens/dashboard';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator';
const App = () => {

  return (
    <>
      <NavigationContainer>
        <StackNavigator>
        </StackNavigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>

  )
}
//   return (
//     <SafeAreaView>
//       <StatusBar 
//         animated={true}
//         backgroundColor="orange"
//         />
//         <Dashboard/>
//     </SafeAreaView>
//   );
// };



export default App;