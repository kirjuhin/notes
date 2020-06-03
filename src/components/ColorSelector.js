import React, { useContext } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import NoteContext from '../contexts/NoteContext'

const ColorSelector = ({ id }) => {
    const { actions } = useContext(NoteContext)
    return (
        <View style={styles.containerStyle}>

            <TouchableOpacity onPress={() => actions.changeColor({ id, color: 'white' })}>
                <View style={styles.selectorWhiteStyle}></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => actions.changeColor({ id, color: '#baaffa' })}>
                <View style={styles.selectorBlueStyle}></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => actions.changeColor({ id, color: '#b0faaf' })}>
                <View style={styles.selectorGreenStyle}></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => actions.changeColor({ id, color: '#cfc92d' })}>
                <View style={styles.selectorYellowStyle}></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => actions.changeColor({ id, color: '#ffabab' })}>
            <View style={styles.selectorRedStyle}></View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: 200,
        marginBottom: 15,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    selectorWhiteStyle: {
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 30,
        backgroundColor: 'white'
    },
    selectorBlueStyle: {
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 30,
        backgroundColor: '#baaffa'
    },
    selectorGreenStyle: {
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 30,
        backgroundColor: '#b0faaf'
    },
    selectorYellowStyle: {
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 30,
        backgroundColor: '#cfc92d'
    },
    selectorRedStyle: {
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: 'black',
        height: 30,
        width: 30,
        backgroundColor: '#ffabab'
    }
})

export default ColorSelector