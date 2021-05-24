import React, { Component } from 'react'
import { Text, View, AppRegistry, SafeAreaView } from 'react-native'

export class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> textInComponent </Text>
      </SafeAreaView>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
