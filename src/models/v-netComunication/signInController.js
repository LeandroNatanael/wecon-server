import signIn from "./signIn.js";

async function signInController() {
    const maxRetries = 3;
    let attempts = 0;
    let result = null;

    while (attempts < maxRetries) {
        try {
            result = await signIn();

            if (result.code === 200 && result.result) {
                return result;
            } else {
                console.error("Error en el intento de inicio de sesión:", result);
            }
        } catch (error) {
            console.error("Error inesperado:", error);
        }

        attempts++;
        console.log(`Reintentando SignInC... (${attempts}/${maxRetries})`);
    }

    const finalError = {
        message: "No se pudo iniciar sesión después de varios intentos",
        attempts
    };


    console.error(finalError);
    return finalError;
}

export default signInController
