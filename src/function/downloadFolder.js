import axios from "axios";
import { saveAs } from 'file-saver';
import deleteFile from "./deleteFile";


const downloadFolder = async (folderName) => {
    const path = `${localStorage.path}/${folderName}`
    console.log(path)
    try {
        await axios({
            method: "post",
            url: "http://localhost:3456/api/folder/download",
            data: { path: path },
            responseType: 'arraybuffer'
        }).then((response) => {
            let blob = new Blob([response.data], { type: "application/zip" });
            saveAs(blob, `download${path}${Date.now()}.zip`);
        })
            .then((response) => { deleteFile(path) })

    }
    catch (error) {
        throw error;
    }

}
export default downloadFolder;