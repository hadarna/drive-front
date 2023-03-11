import axios from "axios";
import { saveAs } from 'file-saver';


const downloadFile = async (fileName) => {
    const path = `${localStorage.path}/${fileName}`
    console.log(path)
    let endFile = path.split('.').pop()
    try {
        await axios({
            method: "post",
            url: "http://localhost:3456/api/file/download",
            data: { path: path },
            responseType: 'arraybuffer'
        }).then((response) => {
            let blob = new Blob([response.data], { type: `application/${endFile}` });
            saveAs(blob, `${fileName}`);
        })

    }
    catch (error) {
        throw error;
    }

}
export default downloadFile;