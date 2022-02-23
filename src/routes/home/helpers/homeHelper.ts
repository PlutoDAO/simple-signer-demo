export function openConnectWindow() {
    const connectWindow = window.open(
        `${process.env['VITE_HOST_SIMPLE_SIGNER']}/connect`,
        'Connect_Window',
        'width=280, height=350',
    );
    return connectWindow;
}
export async function openSignWindow(xdr: string, description?: string) {
    const signWindow = window.open(
        `${process.env['VITE_HOST_SIMPLE_SIGNER']}/sign`,
        'Sign_Window',
        'width=450, height=350',
    );

    window.addEventListener('message', (e) => {
        if (e.origin !== `${process.env['VITE_HOST_SIMPLE_SIGNER']}`) {
            return;
        } else if (signWindow && e.data === 'Simple Signer is ready to use') {
            signWindow.postMessage({ xdr, description }, 'https://localhost:3001');
        }
    });

    return signWindow;
}
