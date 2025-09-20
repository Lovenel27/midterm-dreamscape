import { Link, useRouter } from 'expo-router'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const Home = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>

      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Dreamscape</Text>
        <Link href="/search" asChild>
          <TouchableOpacity>
            <Ionicons name="search" size={26} color="white" />
          </TouchableOpacity>
        </Link>
      </View>


      <View style={styles.content}>
        <Text style={styles.title}>🌌 Welcome to Dreamscape 🌌</Text>
        <Text style={styles.subtitle}>
          Explore your dreams, set your goals, and travel to your dream destinations ✨
        </Text>


        <Link href="/dream-destination" asChild>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="planet" size={28} color="#0077b6" />
            <Text style={styles.cardText}>View Your Dream Destination</Text>
          </TouchableOpacity>
        </Link>


        <Link href="/goals/create" asChild>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="add-circle" size={28} color="#0096c7" />
            <Text style={styles.cardText}>Add Your Goal Destination</Text>
          </TouchableOpacity>
        </Link>


        <TouchableOpacity 
          style={styles.logoutBtn} 
          onPress={() => router.replace("/")}
        >
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaf9ff', 
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0077b6', 
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 5,
  },
  navTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#023e8a',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'white',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 10,
    width: '85%',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#023e8a',
    marginLeft: 10,
  },
  logoutBtn: {
    marginTop: 50, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e63946', 
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    width: '85%',
    elevation: 4,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
})

export default Home
//
