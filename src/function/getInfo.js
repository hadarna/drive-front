import axios from "axios";

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const newDate = `${day}/${month}/${year}`;
    return newDate;
}

const getInfo = async (fileName) => {
    const path = `${localStorage.path}/${fileName}`

    try {
        const info = await axios.get("http://localhost:3456/api/file/getInfo",
            {
                params: { q: path }
            })

        const fileSizeInMb = (info.data.size / (1024 * 1024)).toFixed(2);
        const information = ({ size: fileSizeInMb, create: formatDate(info.data.birthtime), lastChange: formatDate(info.data.mtime) });
        console.log(information)
        return information;

    }
    catch (error) {
        throw error;
    }

}

export default getInfo;