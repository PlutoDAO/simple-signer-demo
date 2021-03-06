const simpleSignerHost = process.env.VITE_HOST_SIMPLE_SIGNER;

export function openConnectWindow(wallets?: string[]) {
    const connectWindow = window.open(`${simpleSignerHost}/connect`, 'Connect_Window', 'width=360, height=450');

    if (wallets) {
        window.addEventListener('message', (e) => {
            if (e.origin !== `${simpleSignerHost}`) {
                return;
            } else if (connectWindow && e.data.type === 'onReady') {
                connectWindow.postMessage({ wallets }, `${simpleSignerHost}`);
            }
        });
    }

    return connectWindow;
}
export async function openSignWindow(
    xdr: string,
    description?: string,
    operationGroups?: { from: number; to: number; description: string; title: string }[],
) {
    const signWindow = window.open(`${simpleSignerHost}/sign`, 'Sign_Window', 'width=360, height=700');

    window.addEventListener('message', (e) => {
        if (e.origin !== `${simpleSignerHost}`) {
            return;
        } else if (signWindow && e.data.type === 'onReady') {
            signWindow.postMessage({ xdr, description, operationGroups }, `${simpleSignerHost}/`);
        }
    });

    return signWindow;
}
