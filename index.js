import React, { Component } from 'react'
import { Text, AppRegistry, SafeAreaView } from 'react-native'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> Hello from pods 1 </Text>
      </SafeAreaView>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
