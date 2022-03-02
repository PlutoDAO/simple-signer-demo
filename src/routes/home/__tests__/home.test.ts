/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { openConnectWindow, openSignWindow } from '../helpers/homeHelper';

it('should test connect window open', () => {
    const closeSpy = jest.fn();
    window.open = jest.fn().mockReturnValue({ close: closeSpy });
    window.close = jest.fn();
    openConnectWindow();
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(
        `${process.env.VITE_HOST_SIMPLE_SIGNER}/connect`,
        'Connect_Window',
        'width=280, height=350',
    );
});

it('should test sign window open', async () => {
    const xdr =
        'AAAAAgAAAAAq9EOxyKbb2D3XfvJAmaBoom/xhzJhibl81K2pdzVQ/QAAAGQAABu3AAAABgAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAdUeCB0ZXN0AAAAAAEAAAAAAAAAAQAAAAC7sQqAV8OqXl2PGBibh2Fzlj4nmECMF8T1SePebNKgcQAAAAAAAAAAdzWUAAAAAAAAAAABdzVQ/QAAAEA6TOjIRyiOEuOPJXXAE1h6BXQhkHpQdU47hwqe48wiGb3F8guQmkTnmiNSMLNjdQ6jXEO/Iod2MVtpy+8FovUD';
    const closeSpy = jest.fn();
    window.open = jest.fn().mockReturnValue({ close: closeSpy });
    window.close = jest.fn();

    await openSignWindow(xdr);
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(
        `${process.env.VITE_HOST_SIMPLE_SIGNER}/sign`,
        'Sign_Window',
        'width=450, height=350',
    );
});
