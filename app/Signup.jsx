import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Link, useRouter } from "expo-router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("⚠️ Error", "Please fill in all fields");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("🎉 Success", "Your account has been created!");
      router.replace("/Login");
    } catch (error) {
      Alert.alert("❌ Signup Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* 🌅 Background image */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        }}
        style={styles.imageBackground}
        blurRadius={3}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* ✨ Signup Card */}
          <View style={styles.card}>
            <Text style={styles.logo}>🌍 Dreamscape</Text>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>
              Already have an account?{" "}
              <Link href="/Login" style={styles.loginLink}>
                Log In
              </Link>
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imageBackground: { flex: 1, resizeMode: "cover" },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00509E",
    textAlign: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003f88",
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    fontSize: 14,
  },
  loginLink: { color: "#00A6FB", fontWeight: "bold" },
  input: {
    backgroundColor: "#f1f5f9",
    color: "#000",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  signupBtn: {
    backgroundColor: "#00A6FB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  signupText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
//