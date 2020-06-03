import React,{ useContext, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import NoteContext from '../contexts/NoteContext'
import { AntDesign } from '@expo/vector-icons'
import ColorSelector from '../components/ColorSelector'

function EditScreen({ route, navigation }) {
  const { notes, actions } = useContext(NoteContext)
  const { isCreate } = route.params
  const id = isCreate ? notes[notes.length -1].id : route.params.id
  const note = notes.find((note) => note.id === id)
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  navigation.setOptions({
    title: isCreate ? 'Create Note' : 'Edit Note',
    headerLeft: () => {
      <Text>Remove back button</Text>
    },
    headerRight: () => (
      <TouchableOpacity onPress={() => {
        if (!title.length) {
          Alert.alert('Oooops..', 'Add a title first' )
        } else {
          actions.editNote({ payload: {title, content,id}, callback: () => navigation.navigate('Index')})
        }
      }}>
        <AntDesign name="check" size={30} color="white" style={{marginRight: 20}}/>
      </TouchableOpacity>
    )
})

    return (
      <View style={styles(note).contentStyle}>
        <TextInput 
          style={styles(note).titleInputStyle}
          placeholder='Enter Title...'
          placeholderTextColor='#858585'
          value={title}
          onChangeText={(newValue) => setTitle(newValue)}
        />
        <TextInput 
          style={styles(note).contentInputStyle}
          placeholder='Enter Note...'
          placeholderTextColor='#858585'
          multiline={true}
          value={content}
          onChangeText={(newValue) => setContent(newValue)}
        />
        <ColorSelector id={id} />
      </View>
    );
  }

const styles = (note) =>  { 
  return StyleSheet.create({
    contentStyle: {
      flex: 1,
      backgroundColor: note.color
    },
    titleInputStyle: {
      marginTop: 5,
      marginHorizontal: 15,
      borderColor: 'gray',
      height: 50,
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentInputStyle: {
      marginTop: 5,
      marginHorizontal: 15,
      fontSize: 15,
      flex: 1,
      textAlignVertical: 'top'
    }
  })
}

  export default EditScreen