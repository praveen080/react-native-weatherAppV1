import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ForecastScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardFull2}>
        <View style={styles.locationContainer2}>
          <View style={styles.week}>
            <Text style={styles.day}>Day</Text>
            <Text style={styles.day}>Tomorrow</Text>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.slice(0, 3)}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.day}>Humidity</Text>
            <Text style={styles.day}>100%</Text>
            <Text style={styles.day}>100%</Text>
            <Text style={styles.day}>100%</Text>
            <Text style={styles.day}>100%</Text>
            <Text style={styles.day}>100%</Text>
            <Text style={styles.day}>100%</Text>
          </View>
          <View>
            <Text style={styles.day}>Max/Min</Text>
            <Text style={styles.day}>30°/23°</Text>
            <Text style={styles.day}>30°/23°</Text>
            <Text style={styles.day}>30°/23°</Text>
            <Text style={styles.day}>30°/23°</Text>
            <Text style={styles.day}>30°/23°</Text>
            <Text style={styles.day}>30°/23°</Text>
          </View>
        </View>
      </View>
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
