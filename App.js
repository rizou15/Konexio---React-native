import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';




export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={require('./assets/konexio-logo_1.png')}
               style={{ width: 150, height: 50 }} />
        <Image source={{ uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
               style={{ width: 150, height: 50 }} />
        <Button class="alert alert-primary" role="alert"></Button>     
        <Text style={{ fontSize: 30 }}>The original</Text>
        <Text style={{ textAlign: 'center' }}>Worldwide</Text>
        <Text><b>My first React native app !</b></Text>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    padding: 80,
    margin: 10
  },
});
