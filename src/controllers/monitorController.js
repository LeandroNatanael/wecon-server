import { result } from "../models/monitorBusinessLogic.js";

async function monitorController(req, res) {
    try {
        const resultMonitor = await result;
        res.status(200).json({ result: resultMonitor.result.list });
    } catch (error) {
        console.error("Error en monitorController:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};



export default monitorController;
