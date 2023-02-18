import axios from "axios";

const createFolder = async (name) => {
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
        })
    }
    catch (error) {
        throw error;
    }
}
export default createFolder