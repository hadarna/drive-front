import axios from "axios";
import readFiles from "./readFiles";

export default async function addFile(data, setFiles) {
    let path;
    if (localStorage.path === undefined) {
        path = './myDrive';
        localStorage.path = path;
    }
    else {
        path = localStorage.path;
    }

    try {
        await axios({
            method: "post",
            url: "http://localhost:3456/api/file/new",
            params: { q: path },
            data: data,
            Headers: { "Content-Type": "multipart/form-data", }
        });
        readFiles(localStorage.path ? localStorage.path : './myDrive').then(res => setFiles(res))

    }
    catch (error) {
        throw error;
    }
}