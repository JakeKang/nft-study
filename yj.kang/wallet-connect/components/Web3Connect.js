import React, { useState } from 'react';

const Web3Connect = () => {
  const [account, setAccount] = useState('');

  return (
    <div className='w-auto bg-white rounded overflow-hidden shadow-lg'>
      <div className='w-full flex flex-col gap-3 px-10 py-8'>
        {account ? (
          <>
            <p className=''>{account}</p>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Disconnect
            </button>
          </>
        ) : (
          <>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              MetaMask
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              CoinbaseWallet
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              WalletConnect
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Phantom
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Fortmatic
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Kaikas
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Bitski
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Glow
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Venly
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Dapper
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Authereum
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Torus
            </button>
            <button className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'>
              Portis
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Web3Connect;
