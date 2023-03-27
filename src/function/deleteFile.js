import axios from "axios";

const deleteFile = async (fileName) => {

    const path = `${localStorage.path}/${fileName}`
    try {
        await axios({
            method: "put",
            url: "http://localhost:3456/api/file/delete",
            data: { path: path }
        });


    }
    catch (error) {
        throw error;
    }
}

export default deleteFile;