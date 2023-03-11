import axios from "axios";

const rename = async (path, originName, newName) => {
    try {
        await axios({
            method: "put",
            url: "http://localhost:3456/api/file/rename",
            data: { path: path, originName: originName, newName: newName }
        })

    }
    catch (error) {
        throw error;
    }

}


export default rename;