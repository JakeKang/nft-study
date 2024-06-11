import {
  useMetamask,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';

const ThirdwebConnect = () => {
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  if (address) {
    console.log(address);
    console.log(network);

    return (
      <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg'>
        <div className='px-8 py-6'>
          <div className='font-bold text-xl mb-2 break-all'>
            Address: {address}
          </div>
          <br />
          <div className='text-gray-700 text-base'>
            Chain ID : {network[0].data.chain && network[0].data.chain.id}
          </div>

          <br />
          <div className='pt-4 pb-2'>
            <button
              className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'
              onClick={disconnectWallet}>
              Disconnect
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => connectWithMetamask()}
        className='px-5 py-3 shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 '>
        Thirdweb Connect MetaMask
      </button>
    </div>
  );
};

export default ThirdwebConnect;
