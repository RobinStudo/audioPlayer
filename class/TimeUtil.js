class TimeUtil{
    convertSecondsToTime(totalSeconds){
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.round(totalSeconds % 60);
        return minutes + ':' + seconds;
    }
}

export default TimeUtil;