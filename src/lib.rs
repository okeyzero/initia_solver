mod utils;
// use sha2::{Digest, Sha256};
use ring::digest::{Context, SHA256};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn solver(challenge: &[u8],salt: &[u8],max_number:u32) -> u32 {
    let mut result = 0;
    for i in 0..max_number {
        let mut data = Vec::new();
        let i_str = i.to_string();
        data.extend_from_slice(salt);
        data.extend_from_slice(i_str.as_bytes());
        // let hash = Sha256::digest(&data).to_vec();
        let mut context = Context::new(&SHA256);
        context.update(&data);
        let hash = context.finish().as_ref().to_vec();
        if hash == challenge {
            result = i;
            break;
        }
    }
    return result;
}