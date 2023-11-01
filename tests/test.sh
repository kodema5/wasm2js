#!/bin/bash

# brew install llvm
# brew link --force llvm
# chmod +x test.sh
# ./test.sh


clang --target=wasm32 -nostdlib -Wl,--export-all -Wl,--no-entry -Wl,--allow-undefined -O3 -flto -Wl,--lto-O3 -o test.wasm test.c

deno run -A ../mod.js test.wasm test.wasm.js

deno test -A test.js