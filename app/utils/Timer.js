import { useState, useEffect } from "react";


export function calculateTime(seconds) {
    const hour_float = seconds / 3600;
    const hour_s = Math.trunc(hour_float);

    const minutes_float = (hour_float % 1) * 60;
    const minutes_s = Math.trunc(minutes_float);

    const sec_float = (minutes_float % 1) * 60;
    const sec_s = Math.round(sec_float);

    // hours = hour_s;
    // minutes = minutes_s;
    // seconds = sec_s;

    return { hour_s, minutes_s, sec_s }


};

export function setAppSesionTime(seconds) {
    let d = new Date()
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    sessionStorage.setItem("logIn", currentTime)
    let calculateLogoutTime = calculateTime(seconds)
    let logoutTime = (d.getHours() + calculateLogoutTime.hour_s) + ':' + (d.getMinutes() + calculateLogoutTime.minutes_s) + ':' + (d.getSeconds() + calculateLogoutTime.sec_s);
    sessionStorage.setItem("logOut", logoutTime)
}


export function isSessionExpired() {
    let d = new Date();
    let currentTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    if (currentTime == sessionStorage.getItem("logOut")) {
        return true
    } else {
        return false
    }
}

export function useCounter(time) {


    const [seconds, setSeconds] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [hours, setHour] = useState(null);


    useEffect(() => {
        countDownTimer(time)
    }, [])

    useEffect(() => { }, [hours, minutes, seconds])

    function countDownTimer(seconds) {
        let timer = 0;
        calculateTime(seconds);
        clearTimeout(timer);
        if (seconds > 0) {
            timer = setTimeout(() => {
                countDownTimer(seconds - 1);
            }, 1000);
        } else {
            clearTimeout(timer);
        }
    };



    function calculateTime(seconds) {
        const hour_float = seconds / 3600;
        const hour_s = Math.trunc(hour_float);

        const minutes_float = (hour_float % 1) * 60;
        const minutes_s = Math.trunc(minutes_float);

        const sec_float = (minutes_float % 1) * 60;
        const sec_s = Math.round(sec_float);




        setHour(hour_s);
        setMinutes(minutes_s);
        setSeconds(sec_s);
    };


    return [hours, minutes, seconds]


}



