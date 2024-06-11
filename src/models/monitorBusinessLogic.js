import vNetBusinessLogic from "./v-netComunication/v-netBusinessLogic.js";

let result = null;
let isMonitoring = false;

async function monitorBusinessLogic() {
    if (isMonitoring) return;
    isMonitoring = true

    async function monitor() {
        try {
            const newResult = await vNetBusinessLogic();
            result = newResult;
             console.log(result)
        } catch (error) {
            console.error("Error en vNetBusinessLogic:", error);
        } finally {
            isMonitoring = false;
        }
    }

    await monitor();
    const interval = setInterval(monitor, 20000);

    return { interval };
}

monitorBusinessLogic();

export { result, monitorBusinessLogic };
