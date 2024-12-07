import Image from 'next/image'

const Loader = () => {
  return (
    <div className='flex size-full bg-slate-950 text-2xl text-white h-screen items-center justify-center gap-3 text-white;'>
      <Image
        src='/loader.svg'
        alt='loader'
        width={32}
        height={32}
        className='animate-spin'
      />
      Loading...
    </div>
  )
}

export default Loader
