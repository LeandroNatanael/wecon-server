import timeGroup from "./realTime.js";

async function realTimeController(sid,maxRetries = 3) {
    let attempts = 0;
    let result;

    while (attempts < maxRetries) {
        try {
            result = await timeGroup(sid);
            if (result.code === 200 && result.result){
                return result;
            }else{
                console.error("Error obteniendo realtime",result);
            }
        } catch (error) {
            console.error("Error inesperado",error);
        }
        attempts++;
        console.log(`Reintentando realTimeC... (${attempts}/${maxRetries})`);
    }
    const finalError = {
        message: "No se pudo usar timeGroup después de varios intentos",
        attempts
    };
    console.error(finalError);
    return finalError;
}

export default realTimeController;