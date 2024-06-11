

const getTokenController = async (req, res) => {
    try {
        const token = req.body;
        return(token);
    } catch (error) {
        console.error("Error en la ruta /token:", error);
    }
    return(token);
}

export default getTokenController;