import React,{ useState, useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import NoteContext from '../contexts/NoteContext'
import { AntDesign } from '@expo/vector-icons'

const ListItem = ({ navigation, id }) => {
    const { notes, actions } = useContext(NoteContext)
    const [ location, setLocation ] = useState(0)
    const note = notes.find((note) => note.id === id)
    
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Edit', { isCreate: false, id: note.id })
            }
        }>
        <View style={styles(note, location).contentStyle}>
            <Text style={styles(note).titleStyle}>{note.title}</Text>
            <TouchableOpacity onPress={() => {
                Alert.alert(`${note.title}`,'Are you sure you want to delete this note?', [
                    { text: 'Cancel', style: 'cancel' },    
                    { text: 'Yes!', onPress: () => {
                        actions.delNote({ id: note.id, callback: () => navigation.navigate('Index')})
                        } 
                    }
                ])
            }}>
                <AntDesign style={styles(note).iconStyle} name='delete' />
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
    )
}

const styles = (note, location) => { 
    return StyleSheet.create({
    contentStyle: {
        backgroundColor: note.color,
        borderBottomWidth: 2,
        borderColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    titleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    iconStyle: {
        fontSize: 30,
        color: 'black'
    }
  })
}

export default ListItem