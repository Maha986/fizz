import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function Dashboard() {
  const [number, setNumber] = useState(0)
  const [price, setPrice] = useState(0)
  return (

    <SafeAreaView>
      <View style={styles.c}>

        <View style={{ }}>
          <View
            style={styles.container}
          >
            <View style={{ flex: 0.5, flexDirection: 'row', borderRightWidth: 1 }} >
              <View style={{ flex: 0.3, justifyContent: 'center' }}>
                <Icon name="message-text-outline" size={40} color="green" />
              </View>
              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{number} Messages</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, flexDirection: 'row' }} >
              <View style={{ flex: 0.3, justifyContent: 'center' }}>
                <Icon name="wallet-outline" size={40} color="green" />
              </View>
              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>PKR. {price}</Text>
              </View>
            </View>
          </View>

          <View style={[styles.container, styles.options]}>
            <View style={{ flex: 0.3, backgroundColor: 'red' }}></View>
            <View style={{ flex: 0.7, justifyContent: 'center' }}>
              <Text style={styles.text}>PERSONAL ASSISTANT</Text>
            </View>
          </View>
          <View style={[styles.container, styles.options]}>
            <View style={{ flex: 0.3, backgroundColor: 'red' }}></View>
            <View style={{ flex: 0.7, justifyContent: 'center' }}>
              <Text style={styles.text}>DELIVERIES</Text>
            </View>
          </View>
          <View style={[styles.container, styles.options]}>
            <View style={{ flex: 0.3, backgroundColor: 'red' }}></View>
            <View style={{ flex: 0.7, justifyContent: 'center' }}>
              <Text style={styles.text}>PURCHASES</Text>
            </View>
          </View>
        </View>
        <View style={{height:40,backgroundColor:'red' ,marginTop: 'auto', position:'absolute', bottom: 0 }}>
          <Text>hellow</Text>
        </View>
      </View>

      <StatusBar style="auto" />

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  c:{},
  container:
  {
    flexDirection: "row",
    height: 100,
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 7,
    backgroundColor: '#95ef3f',
    borderRadius: 12
  },
  options:
  {
    backgroundColor: '#e9e4e4',
    padding: 10
  },
  text: {
    fontSize: 22
  }

});
export default Dashboard