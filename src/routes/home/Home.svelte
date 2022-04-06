<script lang="ts">
    import Modal from '../../lib/Modal.svelte';
    import ToastNotification from '../../lib/ToastNotification.svelte';
    import { openConnectWindow, openSignWindow } from './helpers/homeHelper';
    import { xdr, publicKey } from '../home/store/store';
    import { buildTransaction } from '../home/helpers/buildTransaction';

    let showSignModal = false;
    let hideToastNotificaction = true;

    function handleToggleSignModal() {
        showSignModal = !showSignModal;
    }

    function handleToggleToastNotification() {
        hideToastNotificaction = !hideToastNotificaction;
    }

    function handleMessage(e: MessageEvent) {
        if (e.origin !== process.env.VITE_HOST_SIMPLE_SIGNER) {
            return;
        }

        const xdrRegEx = new RegExp(/^AAAAAgAAAAA[a-zA-Z0-9!@#%*+=._-]+/gm);
        const publicKeyRegEx = /^G[A-Za-z0-9]{55}$/;
        const messageEvent = e.data;

        if (messageEvent.type === 'onConnect') {
            const publicKeyEvent = messageEvent.message.publicKey;
            if (publicKeyRegEx.test(publicKeyEvent)) {
                $publicKey = publicKeyEvent;
                console.log(messageEvent.message);
            }
        }

        if (messageEvent.type === 'onSign') {
            const signedXdr = messageEvent.message.signedXDR;
            if (xdrRegEx.test(signedXdr)) {
                $xdr = signedXdr;
                console.log(messageEvent.message);
            }
        }
    }
    window.addEventListener('message', handleMessage);

    async function sendTx() {
        const xdrUnsigned = await buildTransaction($publicKey);
        return openSignWindow(xdrUnsigned, 'This is a payment');
    }
</script>

<Modal title="Sign Transaction" open="{showSignModal}" on:close="{() => handleToggleSignModal()}">
    <svelte:fragment slot="body">
        <div class="simple-signer-demo modal-container-body flex justify-center">
            <button
                on:click="{() => openConnectWindow()}"
                type="button"
                class="simple-signer-demo modal-connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                >Connect</button
            >
            <button
                on:click="{() => sendTx()}"
                type="button"
                class="simple-signer-demo modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                >Sign</button
            >
        </div>
    </svelte:fragment>
</Modal>

<div
    class="simple-signer-demo main-container bg-gradient-to-r
    from-indigo-600
    to-blue-400"
>
    <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <button
            on:click="{() => openConnectWindow(['xbull'])}"
            type="button"
            class="simple-signer-demo connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
            Connect
        </button>
        <button
            on:click="{() => handleToggleSignModal()}"
            type="button"
            class="simple-signer-demo sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
        >
            Sign Transaction
        </button>
    </div>
    {#if $xdr != ''}
        <ToastNotification
            show="{hideToastNotificaction}"
            on:close="{() => handleToggleToastNotification()}"
            xdr="{$xdr}"
        />
    {/if}
</div>
