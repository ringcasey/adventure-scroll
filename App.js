import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// or any pure javascript modules available in npm
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.topBar}>
      <Text> test </Text>
        <Text style={styles.title}>The Adventure Scroll</Text>
      <Text> test </Text>
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.categoryTitle}>
        Category Title
        </Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.button}>
            <Text onPress = {} style={styles.buttonText}>{'\u2728'}{'\u1F6D2'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 8,
    justifyContent: 'space-between',
    backgroundColor: "aliceblue",
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    width: 150,
    height: 200,
    backgroundColor: 'gray',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  container: {
    
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryTitle: {
    margin: 20,
    marginTop: 10,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
