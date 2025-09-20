import { Link, useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("⚠️ Please enter both email and password");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("✅ Welcome back to Dreamscape!");
      router.replace("/Home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("❌ No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        alert("❌ Incorrect password. Try again.");
      } else if (error.code === "auth/invalid-credential") {
        alert("❌ Invalid email or password. Please try again.");
      } else {
        alert(`Firebase Error: ${error.message}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        }}
        style={styles.imageBackground}
        blurRadius={3}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.card}>
            <Text style={styles.logo}>🌍 Dreamscape</Text>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Log in to explore your dream destinations ✈️
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>
              Don’t have an account?{" "}
              <Link href="/Signup" style={styles.signupLink}>
                Sign Up
              </Link>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

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
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    fontSize: 14,
  },
  input: {
    backgroundColor: "#f1f5f9",
    color: "#000",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  loginBtn: {
    backgroundColor: "#00A6FB",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  loginText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  orText: { color: "#333", textAlign: "center", marginTop: 15 },
  signupLink: { color: "#00A6FB", fontWeight: "bold" },
});

export default Login;
//