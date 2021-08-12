import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    flex: 1,
    backgroundColor: 'violet',
    paddingTop: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'gold',
    paddingTop: 20,
  },
  boxThree: {
    flex: 3,
    backgroundColor: 'coral',
    paddingTop: 30,
  },
  boxFour: {
    flex: 4,
    backgroundColor: 'skyblue',
    paddingTop: 40,
  },
})
