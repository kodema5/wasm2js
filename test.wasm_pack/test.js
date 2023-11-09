import { assertEquals, assert, } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { describe, it, } from "https://deno.land/std@0.136.0/testing/bdd.ts";

import wasmModule from './pkg/wasm2js_test_bg.wasm.js'
import wasm2js_init, * as wasm2js_test from "./pkg/wasm2js_test.js"

describe('wasm2js with wasm-pack', () => {
    it ('returns reusable compiled module', () => {
        assert(wasmModule instanceof WebAssembly.Module)
    })

    it ('init module instance', async () => {
        await wasm2js_init(wasmModule)
        assertEquals(wasm2js_test.add2(100,200), 300)
    })

    let init = async () => {
        await wasm2js_init(wasmModule)
        return wasm2js_test
    }
    it ('use init', async () => {
        let lib = await init()
        assertEquals(lib.add2(100,200), 300)
    })
})
