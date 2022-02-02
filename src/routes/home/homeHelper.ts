export function openConnectWindow() {
    const connectWindow = window.open('https://localhost:3000/connect', 'Connect_Window', 'width=250, height=350');
    return connectWindow;
}
export function openSignWindow() {
    const signWindow = window.open('https://localhost:3000/sign', 'Sign_Window', 'width=450, height=350');
    return signWindow;
}
