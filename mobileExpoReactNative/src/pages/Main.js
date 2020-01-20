import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      console.log(granted);
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -22.0700938, longitude: -51.4175201 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars2.githubusercontent.com/u/23368031?s=460&v=4"
          }}
        />
        <Callout
          onPress={() => {
            navigation.navigate("Profile", {
              github_username: "marlon-paulo-da-silva"
            });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Marlon Paulo</Text>
            <Text style={styles.devBio}>
              Criador de Soluções 🚀 utilizando as melhores tecnologias de
              desenvolvimento web e mobile.
            </Text>
            <Text style={styles.devTechs}>React, React Native, Flutter</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#fff"
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5
  }
});

export default Main;
