// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// const ForecastScreen = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     fetchWeatherData();
//   }, []);


//   const fetchWeatherData = async () => {
//     try {
//       const response = await axios.get(
//         // Replace YOUR_API_KEY with your actual OpenWeatherMap API key
//         `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=2891236865fb81dd11cf0be56216e1cb&cnt=7&units=metric`
//       );
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error("Error fetching weather data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const currentDate = new Date();
//   const daysOfWeek = [];
//   for (let i = 2; i < 7; i++) {
//     const nextDay = new Date(currentDate);
//     nextDay.setDate(currentDate.getDate() + i);
//     const dayOfWeek = nextDay.toLocaleDateString("en-US", {
//       weekday: "long",
//     });
//     daysOfWeek.push(dayOfWeek);
//   }

//   const formattedDate = currentDate.toLocaleDateString("en-US", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//   });

//   const formattedTime = currentDate.toLocaleTimeString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.cardFull2}>
//         <View style={styles.locationContainer2}>
//           <View style={styles.week}>
//             <Text style={styles.day}>Day</Text>
//             <Text style={styles.day}>Tomorrow</Text>
//             {daysOfWeek.map((day, index) => (
//               <Text key={index} style={styles.day}>
//                 {day.slice(0, 3)}
//               </Text>
//             ))}
//           </View>
//           <View>
//             <Text style={styles.day}>Humidity</Text>
//             <Text style={styles.day}>100%</Text>
//             <Text style={styles.day}>100%</Text>
//             <Text style={styles.day}>100%</Text>
//             <Text style={styles.day}>100%</Text>
//             <Text style={styles.day}>100%</Text>
//             <Text style={styles.day}>100%</Text>
//           </View>
//           <View>
//             <Text style={styles.day}>Max/Min</Text>
//             <Text style={styles.day}>
//               {" "}
//               {Math.floor(weatherData.list[0].temp.max)}°°/23°
//             </Text>
//             <Text style={styles.day}>30°/23°</Text>
//             <Text style={styles.day}>30°/23°</Text>
//             <Text style={styles.day}>30°/23°</Text>
//             <Text style={styles.day}>30°/23°</Text>
//             <Text style={styles.day}>30°/23°</Text>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   locationContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   locationContainer1: {
//     flexDirection: "row",
//     alignItems: "center",
//     // backgroundColor: "white",
//     borderRadius: 50,
//     margin: 20,
//   },
//   locationContainer2: {
//     flexDirection: "row",
//     alignItems: "center",
//     // backgroundColor: "white",
//     borderRadius: 50,
//     margin: 10,
//   },

//   locationText: {
//     fontSize: 20,
//     marginLeft: 5,
//     fontWeight: "bold",
//   },
//   locationText1: {
//     fontSize: 15,
//     marginLeft: 5,
//     fontWeight: "bold",
//     // color: "white",
//   },
//   location: {
//     fontSize: 50,
//     marginLeft: 5,
//     fontWeight: "bold",
//   },
//   icon: {
//     width: 20,
//     height: 20,
//   },
//   iconWeather: {
//     width: 70,
//     height: 70,
//   },
//   iconS: {
//     width: 50,
//     height: 50,
//   },
//   iconT: {
//     width: 30,
//     height: 30,
//     margin: 10,
//   },
//   dateTimeText: {
//     fontSize: 18,
//     marginTop: 10,
//     color: "grey",
//   },
//   numbersContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     // marginTop: 20,
//   },
//   number: {
//     fontSize: 100,
//     // marginRight: 10,
//     fontWeight: "bold",
//     color: "#0085FE",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginTop: 20,
//   },
//   card: {
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 10,
//     marginRight: 20,
//     marginLeft: 20,
//   },
//   cardText: {
//     fontSize: 20,
//     // color: "grey",
//     fontWeight: "bold",
//     // color: "white",
//   },
//   day: {
//     fontSize: 16,
//     // color: "grey",
//     fontWeight: "bold",
//     // color: "white",
//     marginRight: 20,
//     marginLeft: 20,
//     marginTop: 10,
//   },

//   week: {
//     fontSize: 16,
//     color: "black",
//     fontWeight: "bold",
//     // color: "white",
//   },
//   cardFull: {
//     borderRadius: 50,
//     backgroundColor: "#0085FE",
//     marginTop: 20,
//     // color: "white",
//   },
//   cardFull2: {
//     borderRadius: 20,
//     // backgroundColor: "white",
//     marginRight: 20,
//     marginLeft: 20,
//     marginTop: 20,
//     // color: "white",
//   },
// });

// export default ForecastScreen;

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import axios from "axios";

const ForecastScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=7&appid=2891236865fb81dd11cf0be56216e1cb&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const currentDate = new Date();
  const daysOfWeek = [];
  for (let i = 2; i < 8; i++) {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + i);
    const dayOfWeek = nextDay.toLocaleDateString("en-US", {
      weekday: "long",
    });
    daysOfWeek.push(dayOfWeek);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardFull2}>
        <View style={styles.locationContainer2}>
          <View style={styles.week}>
            {/* <Text style={styles.day}>Day</Text> */}
            <Text style={styles.day}>Tomorrow</Text>
            {daysOfWeek.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.slice(0, 3)}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.day}>Humidity</Text>
            {weatherData?.list.map((day, index) => (
              <Text key={index} style={styles.day}>
                {day.humidity}%
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.day}>Max/Min</Text>
            {weatherData?.list.map((day, index) => (
              <Text key={index} style={styles.day}>
                {Math.floor(day.temp.max)}°°/{Math.floor(day.temp.min)}°
              </Text>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer1: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 50,
    margin: 20,
  },
  locationContainer2: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 50,
    margin: 10,
  },

  locationText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "bold",
  },
  locationText1: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
    // color: "white",
  },
  location: {
    fontSize: 50,
    marginLeft: 5,
    fontWeight: "bold",
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconWeather: {
    width: 70,
    height: 70,
  },
  iconS: {
    width: 50,
    height: 50,
  },
  iconT: {
    width: 30,
    height: 30,
    margin: 10,
  },
  dateTimeText: {
    fontSize: 18,
    marginTop: 10,
    color: "grey",
  },
  numbersContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 20,
  },
  number: {
    fontSize: 100,
    // marginRight: 10,
    fontWeight: "bold",
    color: "#0085FE",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  cardText: {
    fontSize: 20,
    // color: "grey",
    fontWeight: "bold",
    // color: "white",
  },
  day: {
    fontSize: 16,
    // color: "grey",
    fontWeight: "bold",
    // color: "white",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },

  week: {
    MAR
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    // color: "white",
  },
  cardFull: {
    borderRadius: 50,
    backgroundColor: "#0085FE",
    marginTop: 20,
    // color: "white",
  },
  cardFull2: {
    borderRadius: 20,
    // backgroundColor: "white",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    // color: "white",
  },
});

export default ForecastScreen;

