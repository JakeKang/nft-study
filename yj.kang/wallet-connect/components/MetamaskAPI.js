import React, { useState } from 'react';

const MetamaskAPI = () => {
  const [account, setAccount] = useState('');

  // MetaMask
  const metamask = async () => {
    if (window.ethereum) {
      // metamask 연결 부
      const walletAddress = await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });

      if (!account) {
        // Runs only they are brand new, or have hit the disconnect button
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [
            {
              eth_accounts: {},
            },
          ],
        });
      }

      if (walletAddress) {
        return setAccount(walletAddress[0]);
      }
    } else {
      return (
        // metamask 설치 안내 팝업
        console.err('메타마스크를 설치해주세요.')
      );
    }
  };

  const disconnect = () => {
    setAccount('');
  };

  return (
    <div className='w-auto bg-white rounded overflow-hidden shadow-lg'>
      <div className='w-full flex flex-col gap-3 px-10 py-8'>
        {account ? (
          <>
            <p className=''>{account}</p>
            <button
              className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'
              onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <>
            <button
              className='px-4 py-2 text-sm shadow-sm transition ease-in-out duration-300 rounded leading-snug whitespace-nowrap text-base font-semibold text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white'
              onClick={metamask}>
              MetaMask
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default MetamaskAPI;
