// converts wasm to js module to save I/O trip

let [src, dest] = Deno.args

const wasm = await Deno.readFile(src)

let to_base64 = (arr) => {
    let str = ""
    for (let i = 0, n = arr.length; i < n; i++) {
        str += String.fromCharCode(arr[i])
    }
    return btoa(str)
        .replace(/\n/g, "")
}

await Deno.writeFile(
    dest || (src + '.js'),
    new TextEncoder().encode(`
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
    "${to_base64(wasm)}"
    ))

export default mod

export let init = async (impObj={}) =>
    await WebAssembly.instantiate(mod, impObj)

    `)
)

