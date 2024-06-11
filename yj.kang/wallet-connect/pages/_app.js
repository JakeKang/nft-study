import '../styles/globals.css';
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      {/* 앱 전체에서 사용하는 표준 web3 공급자 설정 */}
      {/* desiredChainId는 블록체인 고유 아이디 ex) rinkeby(4) polygon(137) 등 */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
