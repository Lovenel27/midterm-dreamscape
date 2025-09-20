import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

const AddGoal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const saveGoal = async () => {
    if (!name.trim() || !description.trim()) {
      Alert.alert("⚠️ Please fill in all fields!");
      return;
    }

    try {

      const storedGoals = await AsyncStorage.getItem("goals");
      const goals = storedGoals ? JSON.parse(storedGoals) : [];


      const newGoal = {
        id: Date.now().toString(),
        name,
        description,
      };

      const updatedGoals = [...goals, newGoal];


      await AsyncStorage.setItem("goals", JSON.stringify(updatedGoals));

      Alert.alert("✅ Goal saved successfully!");
      setName("");
      setDescription("");


      router.push("/viewGoal");
    } catch (error) {
      console.error("Error saving goal:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add Your Dream Destination</Text>

      <TextInput
        style={styles.input}
        placeholder="Destination Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={saveGoal}>
        <Text style={styles.buttonText}>Save Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4fdfb" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 15, textAlign: "center", color: "#2e7d32" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10, marginBottom: 15, backgroundColor: "#fff" },
  button: { backgroundColor: "#2e7d32", padding: 15, borderRadius: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default AddGoal;
//