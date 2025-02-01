import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Get all notes
    const getNotes = async () => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5NDA1MTE1MmFhZTQ0NjcwM2NlODA4In0sImlhdCI6MTczNzc2Njk5Nn0.An7GcLf8_JGOej0tRZFmaINoisNBWVBc9jfBaRX_sKQ"
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add a note
    const addNote = async (title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5NDA1MTE1MmFhZTQ0NjcwM2NlODA4In0sImlhdCI6MTczNzc2Njk5Nn0.An7GcLf8_JGOej0tRZFmaINoisNBWVBc9jfBaRX_sKQ"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json()
        console.log(json)

        const note = {
            "_id": "67994eeded5d744g516537c31ad",
            "user": "6794051152aae446703ce808",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-01-28T21:41:01.801Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
        window.location.reload()
    }
    //Delete a note
    const deleteNote = async (id) => {
        //API call
        console.log(id)
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5NDA1MTE1MmFhZTQ0NjcwM2NlODA4In0sImlhdCI6MTczNzc2Njk5Nn0.An7GcLf8_JGOej0tRZFmaINoisNBWVBc9jfBaRX_sKQ"
            },
        });
        const json = response.json()
        console.log(json)

        //Delete a note
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5NDA1MTE1MmFhZTQ0NjcwM2NlODA4In0sImlhdCI6MTczNzc2Njk5Nn0.An7GcLf8_JGOej0tRZFmaINoisNBWVBc9jfBaRX_sKQ"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json()
        console.log(json)

        //Logic to edit a note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element.id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
        // window.location.reload()
    }

    return (
        <noteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;