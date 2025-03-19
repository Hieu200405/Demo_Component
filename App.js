import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState("Hello");
  const [age,setAge] = useState(19);
  const [tao,setTao] = useState({
    name: "Hello",
    age: 20
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
     fontSize: 30,
     color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 60,color:"red",
    paddingTop: 20,
    paddingHorizontal: 20
  },
});
