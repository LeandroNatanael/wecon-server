import fetchData from "../../utils/fetchData.js";
import date from "../../utils/dateNow.js";
import md5 from "md5";
import {
    alias,
    password,
    comid,
    compvtkey,
    secretkeySign,
    urlLogin,
} from "../../utils/environmentVariables.js"

async function signIn() {
    const signature = md5(`alias=${alias}&comid=${comid}&compvtkey=${compvtkey}&password=${password}&ts=${date()}&key=${secretkeySign}`);
    const headers = {
        'common': `{"compvtkey":"${compvtkey}","sign":"${signature}","comid":"${comid}","ts":${date()}}`,
    };
    const options = {
        method: "POST",
        headers: headers,
    };
    const url = `${urlLogin}alias=${alias}&password=${password}`;
    return await fetchData(url, options);
}

export default signIn;