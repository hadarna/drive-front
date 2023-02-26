import axios from "axios";

const createMyDrive = async () => {
    try {
        await axios({
            method: "post",
            url: "http://localhost:3456/api/folder/",
        });
    }
    catch (error) {
        throw error;
    }
}
export default createMyDrive