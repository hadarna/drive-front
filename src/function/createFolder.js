import axios from "axios";

const createFolder = async (name) => {
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
        const data = await axios({
            method: "get",
            url: "http://localhost:3456/api/folder/new",

            params: { q: { path, name } },
        })
        // readFolder(localStorage.path ? localStorage.path : './myDrive').then(res => setFolder(res))
        console.log("function", data.data)
        return (data.data)
    }
    catch (error) {
        throw error;
    }
}
export default createFolder