/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { openConnectWindow, openSignWindow } from '../homeHelper';

it('should test connect window open', () => {
    const closeSpy = jest.fn();
    window.open = jest.fn().mockReturnValue({ close: closeSpy });
    window.close = jest.fn();

    openConnectWindow();
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(
        'https://localhost:3000/connect',
        'Connect_Window',
        'width=250, height=350',
    );
});

it('should test sign window open', () => {
    const closeSpy = jest.fn();
    window.open = jest.fn().mockReturnValue({ close: closeSpy });
    window.close = jest.fn();

    openSignWindow();
    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith('https://localhost:3000/sign', 'Sign_Window', 'width=450, height=350');
});
