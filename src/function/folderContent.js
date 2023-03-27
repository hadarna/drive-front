import axios from "axios";

const folderContent = async (folderName) => {
    const path = `${localStorage.path}/${folderName}`
    try {
        const data = await axios.get("http://localhost:3456/api/folder/content",
            {
                params: { q: path }
            })
        if ((data.data).length > 0) {
            return true
        }
        else {
            return false
        }

    }
    catch (error) {
        throw error;
    }

}

export default folderContent;



