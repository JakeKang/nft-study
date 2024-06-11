import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/Web3Connect'),
  { ssr: false },
);

export default function web3() {
  return (
    <div className='bg-slate-300 w-screen h-screen flex flex-col justify-center items-center'>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
