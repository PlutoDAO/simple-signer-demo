<script lang="ts">
    import { isPrivateKeyVisible, inputValue, connectionError } from './connectStore';
    import { encryptPrivateKey, getStellarKeypair, decryptPrivatePair } from './connectHelpers';
    import { publicKey } from '../../store/store';
    import InvalidPrivateKeyError from './errors/InvalidPrivateKeyError';
    import StorageKeyNotFoundError from './errors/StorageKeyNotFoundError';

    async function connectWithSecretKey(key: string): Promise<void> {
        try {
            const stellarKeyPair = await getStellarKeypair(key);
            encryptPrivateKey(key);
            $publicKey = stellarKeyPair.publicKey();
            window.postMessage(localStorage.setItem('publicKey', $publicKey));
            window.close();
        } catch (e) {
            if (e instanceof InvalidPrivateKeyError) {
                $publicKey = '';
                $connectionError = 'Invalid key, please try again';
            }
        }
    }

    (async function connectWithStorage(): Promise<void> {
        try {
            const privateKey = await decryptPrivatePair();
            connectWithSecretKey(privateKey);
        } catch (e) {
            if (e instanceof StorageKeyNotFoundError) {
                console.log('No key was found in storage');
            }
        }
    })();
</script>

<div
    class="bg-gradient-to-r
from-red-600
to-blue-400"
>
    <div
        class="simple-signer connect-container w-9/12 m-auto py-16 min-h-screen flex flex-wrap items-center justify-center"
    >
        <button
            on:click="{() => ($isPrivateKeyVisible = !$isPrivateKeyVisible)}"
            type="button"
            class="simple-signer modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >Show Key</button
        >
        <div class="relative mt-1">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                    class="h-6 w-6 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z"></path> <circle cx="8" cy="15" r="4"></circle>
                    <line x1="10.85" y1="12.15" x2="19" y2="4"></line> <line x1="18" y1="5" x2="20" y2="7"></line>
                    <line x1="15" y1="8" x2="17" y2="10"></line></svg
                >
            </div>
            {#if $isPrivateKeyVisible}
                <input
                    bind:value="{$inputValue}"
                    type="text"
                    class="simple-signer connect-private-key max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Private Key"
                />
            {:else}
                <input
                    bind:value="{$inputValue}"
                    type="password"
                    class="simple-signer connect-private-key max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Private Key"
                />
            {/if}
            {#if $publicKey}
                <p class="simple-signer connect-private-key-success">Public Key: {$publicKey}</p>
            {:else}
                <p class="simple-signer connect-private-key-error">{$connectionError ? $connectionError : ''}</p>
            {/if}
        </div>
        <button
            class="simple-signer private-key-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            on:click="{() => {
                connectWithSecretKey($inputValue);
            }}">Connect</button
        >
    </div>
</div>

<style>
    .connect-private-key-success {
        color: #def7ec;
    }
    .connect-private-key-error {
        color: red;
    }
</style>
