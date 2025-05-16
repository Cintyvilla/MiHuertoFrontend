
import backendApi from "./apiHandler";

export async function obtenerPlantas(params) {
    const res = await backendApi.get("/plants", {
        params: params,
    });
    return res.data;
}

export async function obtenerPlantasEnHuertos(params) {
    const res = await backendApi.get("/plantsOnOrchards", {
        params: params,
    });
    return res.data;
}
