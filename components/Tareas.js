

/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link> */

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native';



const task = [{

  title: 'alimentar al perro',
  done: true,
  date: new Date()

},

{
  title: 'salir a correr',
  done: true,
  date: new Date()

}

]
interface Task {

  title: string;
  done: boolean;
  date: Date;
}
function Tareas() {

  function renderItem({ item }:{item:Task }) { //tipeamos el objeto task a item

    return (
    <View style={styles.listView}>
    
  <TouchableOpacity> <Text style={item.done ? styles.textDone : styles.text}> {item.title}</Text>
  <Text style={item.done ? styles.textDone : styles.text}>{item.date.toLocaleDateString()}</Text></TouchableOpacity>

       

      { item.done &&(
     <TouchableOpacity style={styles.removeButtom}>
      <Text style={styles.text}>Eliminar</Text>
       </TouchableOpacity>
    )}
    </View>
  );

  }


  return (



    <>
      <View style={styles.container} >
        <Text style={styles.title}>Lista de Tareas</Text>
        <View style={styles.VIewContainer}>

          <TextInput style={styles.InputText} placeholder='Introduzca una tarea ' />
          <TouchableOpacity style={styles.InputButtom}><Text style={styles.InputButtomText}>Agregar</Text></TouchableOpacity>

        </View>
        <View style={styles.scrollContainer}>
          <FlatList renderItem={renderItem} data={task} /></View>
      </View>

    </>
  );

}

export default Tareas


const styles = StyleSheet.create({

  container: {
    with: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 20,
  },
  title: {
    fontSize: 20,
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',

  },

  VIewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  InputText: {

    paddingLeft: 10,
    color: 'white',
    placeholder: 'red',
    fontSize: 20,
    borderColor: 'gray',
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 9,
    width: Dimensions.get('screen').width * 0.65,// allow responsible interface
    height: Dimensions.get('screen').height * 0.06,
  },
  InputButtom: {

    borderRadius: 8,
    width: Dimensions.get('screen').width * 0.20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // style by text into inputbuttom
  InputButtomText: {

    marginLeft: 2,
    color: 'white'

  },
  scrollContainer: {

marginTop:20


  }
  ,

  listView: {
    paddingVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection:'row',
    justifyContent:'space-between'

  },

  text: {
    fontSize: 16,
    color: '#ada5a4'

  },
  textDone: {
    fontSize: 16,
    textDecorationLine: 'line-through',
       color: '#ada5a4'
  },
   removeButtom:{
    justifyContent:'center',
    alignItems:'center',
   backgroundColor:'red',
   paddingHorizontal: 20,
   borderRadius:9
   }
})