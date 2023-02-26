import axios from "axios";

const readFolder = async (path) => {
    try {
        const data = await axios.get("http://localhost:3456/api/folder/get",
            {
                params: { q: path }
            })
        return data.data;

    }
    catch (error) {
        throw error;
    }

}


export default readFolder