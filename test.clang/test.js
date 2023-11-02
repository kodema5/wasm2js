import { assertEquals, assert, } from "https://deno.land/std@0.136.0/testing/asserts.ts";
import { describe, it, } from "https://deno.land/std@0.136.0/testing/bdd.ts";
import wasmModule, { init } from './test.wasm.js'

describe('wasm2js with clang', () => {
    it ('returns reusable compiled module', () => {
        assert(wasmModule instanceof WebAssembly.Module)
    })

    it ('init module instance', async () => {
        let wasm = await init()
        assertEquals(wasm.exports.add2(100,200), 300)
    })
})
