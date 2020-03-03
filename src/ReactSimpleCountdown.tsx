import React, { useState, useEffect, Fragment } from 'react';

interface ReactSimpleCountdownProps {
    time: number;
    onComplete: () => void;
}

const ReactSimpleCountdown = ({ time, onComplete }: ReactSimpleCountdownProps) => {
    const [ lastHours, setLastHours ] = useState('00');
    const [ lastMinutes, setLastMinutes ] = useState('00');
    const [ lastSeconds, setLastSeconds ] = useState('00');
    const [ seconds, setSeconds ] = useState( time);

    useEffect(() => {
        if(seconds <= 1){
            onComplete();
            return;
        }
        const intervalId = setInterval(() => {
            countDown();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [seconds]);

    const secondsToTime = (secs: number) => {
        const hours = Math.floor(secs / (60 * 60));

        const divisorForMinutes = secs % (60 * 60);
        const minutes = Math.floor(divisorForMinutes / 60);

        const divisorForSeconds = divisorForMinutes % 60;
        const seconds = Math.ceil(divisorForSeconds);

        const time = {
            h: hours >= 10 ? `${hours}` : `0${hours}`,
            m: minutes >= 10 ? `${minutes}` : `0${minutes}`,
            s: seconds >= 10 ? `${seconds}` : `0${seconds}`,
        };
        return time;
    };

    const countDown = () => {
        const newSeconds = seconds - 1;
        setSeconds(newSeconds);
        const newTime = secondsToTime(newSeconds);
        setLastHours(newTime.h);
        setLastMinutes(newTime.m);
        setLastSeconds(newTime.s);
    };

    return (
        <Fragment>{lastHours} {lastMinutes} {lastSeconds}</Fragment>
    );
};

ReactSimpleCountdown.defaultProps = {
    onComplete: () => {},
};


export default ReactSimpleCountdown;
