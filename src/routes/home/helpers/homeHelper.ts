export function openConnectWindow() {
    const connectWindow = window.open(
        `${process.env['VITE_HOST_SIMPLE_SIGNER']}/connect`,
        'Connect_Window',
        'width=280, height=350',
    );
    return connectWindow;
}
export async function openSignWindow(xdr: string) {
    const signWindow = window.open(
        `${process.env['VITE_HOST_SIMPLE_SIGNER']}/sign?xdr=${xdr}`,
        'Sign_Window',
        'width=450, height=350',
    );
    return signWindow;
}
