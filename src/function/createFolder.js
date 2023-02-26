import axios from "axios";
import readFolder from "./readFolder";

const createFolder = async (setFolder, name) => {
    console.log(name);
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
            url: "http://localhost:3456/api/folder/new",
            data: { path: path, name: name }
        });
        readFolder(localStorage.path ? localStorage.path : './myDrive').then(res => setFolder(res))

    }
    catch (error) {
        throw error;
    }
}
export default createFolder