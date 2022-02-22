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

    if (signWindow) {
        setTimeout(() => {
            signWindow.postMessage({ xdr, description }, 'https://localhost:3001');
        }, 500);
    }

    return signWindow;
}
