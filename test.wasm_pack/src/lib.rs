// cargo watch -w src -s "wasm-pack build --target web --no-typescript --features console_log"

mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;


use cfg_if::cfg_if;
cfg_if! {
    if #[cfg(feature = "console_log")] {
        fn init_log() {
            use log::Level;
            console_log::init_with_level(Level::Trace).expect("error initializing log");
        }
    } else {
        fn init_log() {}
    }
}

use log::info;
#[wasm_bindgen(start)]
pub fn main() -> Result<(), JsValue>{
    init_log();
    info!("math.wasm");
    Ok(())
}

#[wasm_bindgen]
pub fn add2(x:f64, y:f64) -> f64 {
    x + y
}
