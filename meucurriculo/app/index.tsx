import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <h1 style={styles.text}>Currículo</h1>
      <Text style={styles.text}>Adriano e Beatriz</Text>
      <p></p>
      
      <Link href="/formacao" style={styles.button}>
        Vá para a página de formação
      </Link>
      <Link href="/sobre" style={styles.button}>
        Vá para a página de sobre
      </Link>
      <Link href="/habilidades" style={styles.button}>
        Vá para a página de habilidades
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
;

