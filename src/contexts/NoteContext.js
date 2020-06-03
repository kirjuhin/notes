import React, { useReducer } from 'react'

const NoteContext = React.createContext()

const noteReducer = (state, action) => {
    let index
    switch(action.type){
        case 'add_note':
            const title = ''
            const content = ''
            const color = 'white'
            const id = Math.floor(Math.random() * 9999999).toString()
            return [...state, { title, content, color, id }]
        case 'del_note':
            index = state.findIndex((note) => note.id === action.payload)
            state.splice(index, 1)
            return [...state]
        case 'edit_note':
            index = state.findIndex((note) => note.id === action.payload.id)
            state[index].title = action.payload.title
            state[index].content = action.payload.content
            return [...state]
        case 'change_color':
            index = state.findIndex((note) => note.id === action.payload.id)
            state[index].color = action.payload.color
            return [...state]
        default:
            return state
    }
}

export const NoteProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(noteReducer, [{ title:'TESTING', content:'TESTING', color:'red', id: '1' }])

    const actions = {
        addNote: (callback) => {
            dispatch({ type: 'add_note' })
            callback()
        },
        delNote: ({ id, callback }) => {
            dispatch({ type: 'del_note', payload: id})
            callback()
        },
        editNote: ({ payload, callback }) => {
            dispatch({ type: 'edit_note', payload })
            callback()
        },
        changeColor: (payload) => {
            dispatch({ type: 'change_color', payload })
        }
    }

    return (
        <NoteContext.Provider value={{ notes, actions }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteContext