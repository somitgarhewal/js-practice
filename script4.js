const input = document.getElementsByTagName("input")
const defaultText = document.getElementById('onChange')
const debounceText = document.getElementById('debounce')
const throttleText = document.getElementById('throttle')

document.addEventListener('input', (e) => {
    defaultText.innerText = e.target.value;
    updateDebounceText(e.target.value)
    updateThrottletext(e.target.value)
})
const updateDebounceText = debounce((val) => {
    debounceText.innerText = val
}, 1000)

const updateThrottletext = throttle((val) => {
    throttleText.innerText = val
}, 1000)

function debounce(func, delay = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay)
    }
}


function throttle(func, delay){

    let shouldWait = false
    let waitingArgs = false;

    function timoutFunc(){
        if(waitingArgs === null){
            shouldWait = false
        } else{
            func(...waitingArgs)
            waitingArgs = null
            setTimeout(timoutFunc, delay)
        }

    }

    return(...args)=>{
        if(shouldWait){
            waitingArgs = args
            return
        }
        func(...args)
        shouldWait = true

        setTimeout(timoutFunc, delay)
    }
}

function debounce1(func, delay){
    let timeout;
    return(...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay);
    }
}

function throttle1(func, delay){
    let shouldWait = false
    let waitingArgs = null

    function timeoutFunc(){
        if(waitingArgs === null){
            shouldWait = false
        }else{
            func(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return(...args) => {
        if(shouldWait){
            waitingArgs = args
            return
        }
        func(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}