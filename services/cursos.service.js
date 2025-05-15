
import backendApi from "./apiHandler";

export async function obtenerCursos(params) {
    const res = await backendApi.get("/courses", {
        params: params,
    });
    return res.data;
}


export async function obtenerTemas(id) {
    const res = await backendApi.get("/courses/topics", {
        params: {
            curso: id,
        },
    });
    return res.data;
}
