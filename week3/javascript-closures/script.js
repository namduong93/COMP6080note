const createTimer = () => {
    let time = 0;
    return {
        getTime: function () {
            return time;
        },
        incTime: function () {
            time++;
        },
        reset: function () {
            time = 0;
        }
    }
}
let timers = [];
document.getElementById("createTimer").addEventListener("click", () => {
    const newTimer = document.createElement("div");
    const thisTimer = createTimer();
    timers.push(thisTimer);
    const updateText = () => newTimer.innerText = thisTimer.getTime();
    setInterval(() => {
        thisTimer.incTime();
        updateText();
    }, 1000);
    updateText();
    document.getElementById("timers").appendChild(newTimer);
})

setInterval(() => {
    timers.forEach(time => {
        time.reset();
    })
}, 5000);