#!/bin/bash

wasm-pack build --target web --no-typescript

# deno run -A https://cdn.jsdelivr.net/gh/kodema5/wasm2js/mod.js pkg/wasm2js_test_bg.wasm
deno run -A ../mod.js pkg/wasm2js_test_bg.wasm

deno test -A test.js