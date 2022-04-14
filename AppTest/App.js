import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Header from './shared/components/Header';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: 'cornflowerblue',
    marginTop: 50,
    alignSelf: 'center'
  }
});

const App = () => {
  return (
    <View styles={styles.screenContainer}>
      <Header />
      <Text style={styles.text}>I'm a React Native component</Text>
      <Button
        title="Hello Word"
      /> 
    </View>
  );
};

export default App;