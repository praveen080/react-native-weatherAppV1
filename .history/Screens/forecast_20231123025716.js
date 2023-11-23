import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Forecast</Text>
      {/* Add your forecast components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ForecastScreen;
