import { useState } from "react"
import Header from "../../components/Header"
import Main from "../../components/Main"
import PlayFiles from "../../components/PlayFiles"
import fileContext from "../../context/fileContext"

export default function Layout() {
    const [files, setFiles] = useState([])
    const [folder, setFolder] = useState([])
    return (
        <div>
            <fileContext.Provider value={{ files, setFiles, folder, setFolder }}>
                <Header />
                <Main />
                <PlayFiles />
            </fileContext.Provider>
        </div>)
}