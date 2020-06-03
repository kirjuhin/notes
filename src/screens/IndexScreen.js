import React,{ useContext } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import NoteContext from '../contexts/NoteContext'
import ListItem from '../components/ListItem'
import { AntDesign } from '@expo/vector-icons'

function HomeScreen({ navigation }) {
  const { notes, actions } = useContext(NoteContext)

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          actions.addNote(() => {
            navigation.navigate('Edit', { isCreate: true })
          })
        }}>
          <AntDesign name="pluscircleo" size={30} color="white" style={{marginRight: 20}}/>
        </TouchableOpacity>
      )
  })
    return (
      <View style={styles.contentStyle}>
        {!notes.length ? <Text style={styles.messageStyle}>No notes, try adding one above!</Text> : null}
        <FlatList 
          data={notes}
          keyExtractor={(note) => note.id}
          renderItem={({ item }) => {
            return (
              <ListItem id={item.id} navigation={navigation} />
            )
          }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  messageStyle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

  export default HomeScreen