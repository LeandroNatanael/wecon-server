import AbortController from "abort-controller";

async function fetchData(url, options = {}, timeout = 3600) {
    const controller = new AbortController();
    const timeOut = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;  // Lanzar el error para que pueda ser manejado externamente
    } finally {
        clearTimeout(timeOut);
    }
}

export default fetchData;
