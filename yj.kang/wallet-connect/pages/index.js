import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/ThirdwebConnect'),
  { ssr: false },
);

export default function Home() {
  return (
    <div className='bg-slate-300 w-screen h-screen flex flex-col justify-center items-center'>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
