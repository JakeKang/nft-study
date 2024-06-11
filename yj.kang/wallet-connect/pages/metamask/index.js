import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/MetamaskAPI'),
  { ssr: false },
);

export default function metamask() {
  return (
    <div className='bg-slate-300 w-screen h-screen flex flex-col justify-center items-center'>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
