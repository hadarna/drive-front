import axios from "axios";

const deleteFolder = async (fileName) => {

    const path = `${localStorage.path}/${fileName}`
    try {
        await axios({
            method: "put",
            url: "http://localhost:3456/api/folder/delete",
            data: { path: path }
        });


    }
    catch (error) {
        throw error;
    }
}

export default deleteFolder;