//防抖
function throttleFirstExt(f, t) {
    let flag = true;
    return (...args) => {
        if (flag) {
            f(...args);
            flag = false;
            setTimeout(() => {
                flag = true
            }, t)
        }
    }
}