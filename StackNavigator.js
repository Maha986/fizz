import { StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './screens/Dashboard';
const StackNavigator = () => {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Home" options={{
            headerTintColor: 'white',
            headerTitle: "FAAIZY",
            headerTitleAlign:"center",
            headerLeft:()=>(
                <Icon
              name="menu"
              color="black"
              size={40}
              backgroundColor="transparent"
              
              onPress={() => alert('menu pressed')}>
            </Icon>
            ),
            headerStyle: { backgroundColor: 'orange' },
        }} component={Dashboard} ></Stack.Screen>
                {/* <Stack.Screen name="UploadingPage" component={UploadImage} ></Stack.Screen>
                <Stack.Screen name="ProgressPage" component={ProgressPage}></Stack.Screen>
                <Stack.Screen name="ModalPage" component={ModalBox}></Stack.Screen> */}
            </Stack.Group>
        </Stack.Navigator>
    );
};




export default StackNavigator;