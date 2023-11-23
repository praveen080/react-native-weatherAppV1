import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const forecast = () => {
  render() {
    return (
      <View>
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
  }
}

export default forecast;
