import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Button} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
