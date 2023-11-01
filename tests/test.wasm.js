
/// dynamically generated code

let from_base64 = (base64) => {
    let str = atob(base64)
    let n = str.length
    let arr = new Uint8Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = str.charCodeAt(i);
    }
    return arr
}

let mod = await WebAssembly.compile(from_base64(
    "AGFzbQEAAAABCgJgAABgAn9/AX8DAwIAAQUDAQACBisHfwFBgIgEC38AQYAIC38AQYAIC38AQYAIC38AQYCIBAt/AEEAC38AQQELB34JBm1lbW9yeQIAEV9fd2FzbV9jYWxsX2N0b3JzAAAEYWRkMgABDF9fZHNvX2hhbmRsZQMBCl9fZGF0YV9lbmQDAg1fX2dsb2JhbF9iYXNlAwMLX19oZWFwX2Jhc2UDBA1fX21lbW9yeV9iYXNlAwUMX190YWJsZV9iYXNlAwYKDAICAAsHACABIABqCwA1BG5hbWUBGgIAEV9fd2FzbV9jYWxsX2N0b3JzAQRhZGQyBxIBAA9fX3N0YWNrX3BvaW50ZXIAJglwcm9kdWNlcnMBDHByb2Nlc3NlZC1ieQEFY2xhbmcGMTQuMC41"
    ))

export default mod

export let init = async (impObj={}) =>
    await WebAssembly.instantiate(mod, impObj)

    