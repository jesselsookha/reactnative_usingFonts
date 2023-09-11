
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return(
    <View style={styles.container}>
      <Text style={styles.headingText}>HEADING</Text>
      <Text style={styles.normalText}>Normal Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headingText: {
    fontFamily: 'Roboto Slab Thin',
    fontSize: 64,
    fontWeight: 'bold',
  },
  normalText:{
    fontFamily: 'Fira Sans',
    fontSize: 42,
  },
});

export default App;
