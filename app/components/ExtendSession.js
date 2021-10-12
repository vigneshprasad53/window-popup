import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import { setAppSesionTime, isSessionExpired } from '../utils/Timer'
import { signOut } from '../utils/googleOAuth'

const ExtendSession = () => {
    const [displayPosition, setDisplayPosition] = useState(false);
    const [seconds, setSeconds] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [hours, setHour] = useState(null);
    const [sessionExpired, setSessionExpired] = useState(false)
    const [extendSession, setExtendSession] = useState(false)

    useEffect(() => {
        setAppSesionTime(60);
        let lookForSessionTimeout = 0;
        lookForSessionTimeout = setInterval(() => {
            let sessionExpired = isSessionExpired()
            if (sessionExpired) {
                setSessionExpired(true)
                clearInterval(lookForSessionTimeout)
            }
        }, 1000);
    }, [sessionExpired]);

    useEffect(() => {
        if (sessionExpired && !extendSession) {
            showModal();
            countDownTimer(10)
        }
        if (sessionExpired && extendSession) {
            setSessionExpired(false);
            setExtendSession(false);
            hideModal();
            setAppSesionTime(60);
        }

    }, [sessionExpired, extendSession])

    useEffect(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            signOut()
        }
    }, [hours, minutes, seconds])

    const countDownTimer = seconds => {
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

    const calculateTime = seconds => {
        const hour_float = seconds / 3600;
        const hour = Math.trunc(hour_float);

        const minutes_float = (hour_float % 1) * 60;
        const minutes = Math.trunc(minutes_float);

        const sec_float = (minutes_float % 1) * 60;
        const sec = Math.round(sec_float);
        setHour(hour);
        setMinutes(minutes);
        setSeconds(sec);
    };


    const showModal = () => {
        setDisplayPosition(true);
    };

    const hideModal = () => {
        setDisplayPosition(false);
    };

    const handleYes = () => {
        setExtendSession(true);
    };

    const handleNo = () => {
        signOut()
    };


    const renderFooter = () => {
        return (
            <div>
                <Button
                    label="No"
                    icon="pi pi-times"
                    onClick={() => handleNo()}
                    className="p-button-text"
                />
                <Button
                    label="Yes"
                    icon="pi pi-check"
                    onClick={() => handleYes()}
                    autoFocus
                />
            </div>
        );
    };

    return (
        <div className="dialog-demo">
            <div className="card">
                <Dialog
                    header="Do you want to extend session?"
                    visible={displayPosition}
                    position={"top"}
                    modal
                    style={{ width: "50vw" }}
                    footer={renderFooter()}
                    hideModal={() => hideModal()}
                    draggable={false}
                    resizable={false}
                    showHeader={true}
                    showCloseIcon={false}
                    onHide={() => signOut()}
                >
                    <p className="p-m-0">Session Expires in {minutes}:{seconds}</p>
                </Dialog>
            </div>
        </div>
    );
};

export default ExtendSession
