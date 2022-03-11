/// <reference types="svelte" />
/// <reference types="vite/client" />

export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VITE_HOST_SIMPLE_SIGNER: string;
            VITE_HORIZON_URL: string;
        }
    }
}
