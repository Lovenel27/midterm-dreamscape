import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function DreamDestination() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🌍 Your Dream Destinations</Text>

      <View style={styles.card}>
        <Image
          source={require("../assets/images/Bohol.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>🏝 Bohol</Text>
          <Text style={styles.description}>
            Bohol is home to the infamous Chocolate Hills and the smallest monkey in the world, the Tarsier.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../assets/images/Boracay.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>Boracay</Text>
          <Text style={styles.description}>
            Boracay is known as "The Island of White Beaches" due to its famous powdery White Beach, and it is often simply called Boracay Island.
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../assets/images/palawan.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>Palawan</Text>
          <Text style={styles.description}>
            Palawan Island is a long, narrow island province in the Philippines, famous for its natural beauty, earning it the title "Last Frontier".
          </Text>
        </View>
      </View>

       <View style={styles.card}>
        <Image
          source={require("../assets/images/baguio.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>Baguio City</Text>
          <Text style={styles.description}>
            Baguio City is a landlocked, highly urbanized city located in the island of Luzon and within the highlands of the Cordillera Ranges.
          </Text>
        </View>
      </View>

       <View style={styles.card}>
        <Image
          source={require("../assets/images/siargao.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>Siargao</Text>
          <Text style={styles.description}>
            Siargao is a small beautiful island with an abundance of white sandy beaches with clear crystal waters.
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#EAF6FF",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00509E",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 24,
    width: "90%", 
    alignItems: "center", 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    paddingVertical: 10,
  },
  image: {
    width: 250, 
    height: 180,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 10,
  },
  info: {
    paddingHorizontal: 12,
    alignItems: "center", 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#023e8a",
    marginBottom: 6,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
  },
});
//