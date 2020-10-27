
import React from 'react';
import Paragraphe from './src/component/Paragraphe';
import { StyleSheet, Text, View, ScrollView, Image, Button, ActivityIndicator, } from 'react-native';





export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.container2}>
          <Image source={require('./assets/konexio-logo_1.png')}
                 style={{ width: 150, height: 50 }} />
          <Image source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
                 style={{ width: 150, height: 50 }} />
        </View>
        <Button title="Enter"
                onPress={() => alert('Button color pressed')} />
        <Text style={styles.text1}>My first React native app !</Text>
        <Text style={styles.text2}>Original</Text>
        <Text style={styles.text3}>Made by myself</Text>
        <ActivityIndicator size="large" color="#00ff00" />
        <View style={styles.container3}>
          <Paragraphe />
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkturquoise',
  },
  text1: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 35
  },
  text2: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 35
  },
  text3: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 35
  },
  button: {
    color: '#f194ff'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container3: {
    justifyContent: 'justify'
  }

});




