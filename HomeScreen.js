import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image 
        source={{ uri: "data:image/jpeg;base64,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" }} // Replace with your image URL
        style={styles.profileImage} 
      />

      {/* Name */}
      <Text style={styles.name}>Farhan Shaikh</Text>

      {/* Welcome Message */}
      <Text style={styles.heading}>👋 Welcome to My App</Text>
      <Text style={styles.subText}>Explore my skills and work experience.</Text>

      {/* Navigation Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>View My Skills 🚀</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#142850", // Deep Blue Background
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular Image
    borderWidth: 3,
    borderColor: "#FFD700", // Gold Border
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFD700", // Gold Color
    marginBottom: 10,
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFD700", // Gold Button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5, // Shadow effect
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#142850", // Dark blue text
  },
});
