
import backendApi from "./apiHandler";

export async function login(body) {
    const res = await backendApi.post("/users/login", body);
    return res.data;
}