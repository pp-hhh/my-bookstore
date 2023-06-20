import { UploadFile } from "antd";
// import { apiUrl } from "../utils/global_config";
import { RcFile } from "antd/es/upload";

export const UploadImg = async (
    file: UploadFile
): Promise<{
    msg: string;
    status: number;
    data: { path: string };
}> => {
    const url = `http://localhost:8080/img/upload`;
    const body = new FormData();
    body.append("file", file);
    return await fetch(url, {
        method: "POST",
        body: body,
    })
        .then((res) => res.json())
        .catch((err) => console.error(err));
};
