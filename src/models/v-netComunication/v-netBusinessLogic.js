import signInController from "./signInController.js";
import realTimeController from "./realTimeController.js";

async function vNetBusinessLogic() {

    let resultSignIn = null;

        try {
            const result = await signInController();

            if (result.code === 200 && result.result) {
                resultSignIn = await realTimeController(result.result.sid);
                if (resultSignIn.code === 200 && resultSignIn.result) {
                    // console.log("v-net",resultSignIn);
                    return resultSignIn;
                } else {
                    console.log("Error obteniendo listTime");
                }

            } else {
                console.error("Error sid");
            };

        } catch (error) {
            console.error("Erro en signIn v-net controller", error);
        }

    }

export default vNetBusinessLogic;