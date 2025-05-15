
import backendApi from "./apiHandler";

export async function obtenerPlantas(params) {
    const res = await backendApi.get("/plants", {
        params: params,
    });
    return res.data;
}


export async function login(body) {
    const res = await backendApi.post("/users/login", body);
    return res.data;
}