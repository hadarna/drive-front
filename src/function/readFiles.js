import axios from "axios";

const readFiles = async (path) => {
    try {
        const data = await axios.get("http://localhost:3456/api/file/get",
            {
                params: { q: path }
            })
        return data.data;

    }
    catch (error) {
        throw error;
    }

}


export default readFiles