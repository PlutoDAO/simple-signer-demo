const simpleSignerHost = process.env.VITE_HOST_SIMPLE_SIGNER;

export function openConnectWindow() {
    const connectWindow = window.open(`${simpleSignerHost}/connect`, 'Connect_Window', 'width=280, height=350');
    return connectWindow;
}
export async function openSignWindow(xdr: string, description?: string) {
    const signWindow = window.open(`${simpleSignerHost}/sign`, 'Sign_Window', 'width=450, height=350');

    window.addEventListener('message', (e) => {
        if (e.origin !== `${simpleSignerHost}`) {
            return;
        } else if (signWindow && e.data.type === 'ready') {
            signWindow.postMessage({ xdr, description }, `${simpleSignerHost}`);
        }
    });

    return signWindow;
}
