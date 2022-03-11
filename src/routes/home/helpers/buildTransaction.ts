import StellarSdk from 'stellar-sdk';
import TransactionBuilderError from '../errors/TransactionBuilderError';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

export async function buildTransaction(publicKey: string): Promise<string> {
    try {
        const sourceAccount = publicKey;
        const accountResponse = await server.loadAccount(sourceAccount);
        const transaction = new StellarSdk.TransactionBuilder(accountResponse, {
            fee: StellarSdk.BASE_FEE,
            networkPassphrase: StellarSdk.Networks.TESTNET,
        })
            .addOperation(
                StellarSdk.Operation.payment({
                    destination: process.env['VITE_DESTINATION_PUBLICKEY'],
                    asset: StellarSdk.Asset.native(),
                    amount: '200',
                }),
            )
            .addMemo(StellarSdk.Memo.text('Tx test'))
            .setTimeout(0)
            .build();
        return transaction.toXDR();
    } catch (error) {
        throw new TransactionBuilderError();
    }
}
