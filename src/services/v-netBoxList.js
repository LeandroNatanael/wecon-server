import date from "../utils/dateNow.js";
import fetchData from "../utils/fetchData.js";
import md5 from "md5";
import {
    comid,
    compvtkey,
    secretkeySign,
    urlBoxs
} from "../utils/environmentVariables.js"


 async function boxList(sid) {
    const signature = md5(`comid=${comid}&compvtkey=${compvtkey}&sid=${sid}&ts=${date()}&key=${secretkeySign}`)
    const headers = {
        'common': `{"compvtkey":"${compvtkey}","sign":"${signature}","comid":"${comid}","sid":"${sid}","ts":${date()}}`,
    };
    const options = {
        method: "POST",
        headers: headers,
    };
    const url = `${urlBoxs}`
    return await fetchData(url, options);
}

export default boxList;