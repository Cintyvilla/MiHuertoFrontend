// @/components/MyButton.js
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButton({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8DA52B',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    height:48,
    width:216,
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});