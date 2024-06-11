import express from "express";
import cors from "cors";
import monitorController from "../src/controllers/monitorController.js";
import {monitorBusinessLogic} from "../src/models/monitorBusinessLogic.js";
import dataRoute from "../src/routes/dataRoute.js";
import { PORT } from "../src/utils/environmentVariables.js";

const app = express();

app.use(cors());
app.use(express.json());
// app.use('signIn',signInRoute);
app.use('/data', dataRoute);
app.use((req, res, next) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

monitorBusinessLogic();


app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

//socket.io