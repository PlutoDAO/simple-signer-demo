const simpleSignerHost = process.env.VITE_HOST_SIMPLE_SIGNER;

export function openConnectWindow(wallets?: string[]) {
    const connectWindow = window.open(`${simpleSignerHost}/connect`, 'Connect_Window', 'width=280, height=350');

    let array: string[] = [];
    if (wallets) {
        array = wallets;
    }

    window.addEventListener('message', (e) => {
        if (e.origin !== `${simpleSignerHost}`) {
            return;
        } else if (connectWindow && e.data.type === 'onReady') {
            connectWindow.postMessage({ wallets: array }, `${simpleSignerHost}`);
        }
    });

    return connectWindow;
}
export async function openSignWindow(
    xdr: string,
    description?: string,
    operationGroups?: { from: number; to: number; description: string }[],
) {
    const signWindow = window.open(`${simpleSignerHost}/sign`, 'Sign_Window', 'width=450, height=350');

    window.addEventListener('message', (e) => {
        if (e.origin !== `${simpleSignerHost}`) {
            return;
        } else if (signWindow && e.data.type === 'onReady') {
            signWindow.postMessage({ xdr, description, operationGroups }, `${simpleSignerHost}`);
        }
    });

    return signWindow;
}
