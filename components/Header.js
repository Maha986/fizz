import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'


function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={{flex:3, justifyContent:'center'}}>
          <View style={{alignSelf: 'flex-start'}}>
          <Icon
              name="menu"
              color="black"
              size={40}
              backgroundColor="transparent"
              
              onPress={() => alert('menu pressed')}>
            </Icon>
          </View>
        
        </View>
        <View style={{flex:4, justifyContent:'center'}}>
          <Text style={styles.textStyles}>
            FAAIZY
          </Text>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  header: {
    height: 50,
    backgroundColor: 'orange',
    textAlign: 'center',
    marginBottom: 8,
  },
  textStyles: {
    color: 'orange',
    backgroundColor: 'black',
    paddingTop:2,
    paddingBottom:2,
    paddingLeft: 3,
    paddingRight: 3,
    fontSize:21,
    alignSelf: 'flex-start',
    borderRadius: 9
  },
  container:
  {
    flex: 1,
    flexDirection: 'row'
  }

});
export default Header