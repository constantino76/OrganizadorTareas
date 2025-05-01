import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Tareas from './components/Tareas';

export default function App() {
  return (
    <View style={styles.container}>  
    

  <Tareas/>
  <StatusBar style="auto" /></View>


    
  
  );
}

const styles = StyleSheet.create({
  container: {
  width:'100%',
    flex: 1,
  paddingTop:40,
  backgroundColor: 'purple',
   
  },
  texto:{
    color:'blue',
    fontSize:20

  },
});
