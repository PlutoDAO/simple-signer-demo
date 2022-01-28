<script lang="ts">
    import { Link } from 'svelte-navigator';
    import Modal from '../lib/Modal.svelte';

    let showModal = false;

    const handleToggleModal = () => {
        showModal = !showModal;
    };
</script>

<Modal title="Sign Transaction" open="{showModal}" on:close="{() => handleToggleModal()}">
    <svelte:fragment slot="body">
        <div class=" modal-container-body flex justify-center">
            <button
                type="button"
                class="simple-signer modal-connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                ><Link to="/connect">Connect</Link></button
            >
            <button
                type="button"
                class="simple-signer modal-sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                ><Link to="/sign">Sign</Link></button
            >
        </div>
    </svelte:fragment>
</Modal>

<div
    class=" bg-gradient-to-r
    from-indigo-600
    to-blue-400"
>
    <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <button
            type="button"
            class="simple-signer connect-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            ><Link to="/connect">Connect</Link></button
        >
        <button
            on:click="{() => handleToggleModal()}"
            type="button"
            class="simple-signer sign-btn text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
            >Sign Transaction</button
        >
    </div>
</div>
