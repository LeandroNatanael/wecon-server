import { setValueAlarm } from "../models/valueAlarmModel.js";

const valueAlarmController = async (req, res) => {
    try {
        setValueAlarm(req.body);
        res.status(200);
    } catch (error) {
        console.error("Error en la ruta /valueAlarm:", error);
        res.status(500);
    }
}

export default valueAlarmController;