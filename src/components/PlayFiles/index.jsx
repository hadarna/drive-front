import readFiles from "../../function/readFiles";

export default function PlayFiles() {

    const path = localStorage.path ? localStorage.path : './myDrive'
    const files = readFiles(path)
    console.log(files);
    return (
        <div>
            {files.then(files.map((v) => <div>{v}</div>))}
        </div>
    )
}