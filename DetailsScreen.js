import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🚀 About Farhan Shaikh</Text>
      <Text style={styles.description}>
        I am a **Zoho Developer** at Strateworks Solutions, specializing in:
      </Text>
      <View style={styles.skillsContainer}>
        <Text style={styles.skill}>🔹 Zoho Creator & Deluge</Text>
        <Text style={styles.skill}>🔹 Zoho Books & Inventory</Text>
        <Text style={styles.skill}>🔹 API Integrations</Text>
        <Text style={styles.skill}>🔹 Problem Solving & Coding</Text>
        <Text style={styles.skill}>🔹 Frontend Development (React, HTML, CSS)</Text>
      </View>
      <Text style={styles.quote}>
        "Passionate about building efficient solutions and automations!" ✨
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#1e3c72", // Dark blue gradient start
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffcc00", // Yellow color for highlight
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  skillsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white box
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  skill: {
    fontSize: 18,
    color: "#ffcc00", // Yellow skill text
    fontWeight: "bold",
    marginVertical: 3,
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#f8f8f8",
    textAlign: "center",
    marginTop: 20,
  },
});
