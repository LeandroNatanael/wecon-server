let valueAlarm = null;

export const setValueAlarm = (newValue) => {
    valueAlarm = newValue;
    console.log(valueAlarm);
}

export const getValueAlarm = () => {
    return valueAlarm;
}

