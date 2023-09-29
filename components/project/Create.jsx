"use client"
import { PrismaClient } from "@prisma/client"
import { useState } from "react"


const Create = () => {
    const prisma = new PrismaClient()
    const [text, setText] = useState('')
    const createProject = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/createproj', {
            method: 'POST',
            body: JSON.stringify(text)
        })
    }

    return (
        <div>
            <form onSubmit={e => createProject(e)}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <button type="submit">Submit</button>
            </form></div>
    )
}

export default Create