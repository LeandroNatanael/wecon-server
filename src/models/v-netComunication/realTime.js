import fetchData from "../../utils/fetchData.js"
import date from "../../utils/dateNow.js";
import md5 from "md5";
import {
    comid,
    compvtkey,
    secretkeySign,
    boxID,
    groupID,
    urlTimeGroup,
} from "../../utils/environmentVariables.js"

async function timeGroup(sid) {
    const signature = md5(`boxId=${boxID}&comid=${comid}&compvtkey=${compvtkey}&groupId=${groupID}&pageIndex=1&pageSize=5&sid=${sid}&ts=${date()}&key=${secretkeySign}`);

    const headers = {
        'common': `{"boxId":"${boxID}","groupId":"${groupID}","pageSize":"5","pageIndex":"1","sid":"${sid}","comid":"${comid}","compvtkey":"${compvtkey}","ts":${date()},"sign":"${signature}"}`,
    };
    const options = {
        method: "POST",
        headers: headers,
    };
    const url = `${urlTimeGroup}?boxId=${boxID}&groupId=${groupID}&pageSize=5&pageIndex=1`;
    return await fetchData(url, options);
}

export default timeGroup;
