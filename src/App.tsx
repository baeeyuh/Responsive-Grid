const App = () => {
  return (
    <div id="Main Container" className='bg-black text-white h-screen flex justify-center items-center bg-[url("assets/images/fn.jpg")] bg-cover bg-center'>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl font-bold text-center'>Best Horror Films of All Time</h1>
        <div id="main grid" className='border-1 border-zinc-400 p-4 rounded-md flex flex-col gap-3 w-96 max-w-full border-opacity-50 bg-transparent justify-center'>
            <div id="first-grid" className='relative border border-zinc-400 p-4 rounded-md h-32 space-x-4 bg-[url("assets/images/smiths.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white font-bold'>The Smiths</span>
            </div>
            </div>
            <div id="second-grid" className='flex flex-row w-full space-x-2'>
            <div className='relative border border-zinc-400 rounded-md w-1/2 h-32 bg-[url("assets/images/lw.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-center font-bold'>Little Women</span>
              </div>
            </div>
            <div className='relative border border-zinc-400 rounded-md w-1/2 h-32 bg-[url("assets/images/no.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-center font-bold'>The Notebook</span>
              </div>
            </div>
            </div>
            <div id="third-grid" className='flex flex-row w-full space-x-2'>
            <div className='relative border border-zinc-400 rounded-md w-1/3 h-32 bg-[url("assets/images/gg.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-center font-bold'>Gilmore Girls</span>
              </div>
            </div>
            <div className='relative border border-zinc-400 rounded-md w-1/3 h-32 bg-[url("assets/images/np.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white text-center font-bold'>Normal People</span>
              </div>
            </div>
            <div className='relative border border-zinc-400 rounded-md w-1/3 h-32 bg-[url("assets/images/a.jpg")] bg-cover bg-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 active:-translate-y-1 active:scale-105'>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300'>
              <span className='text-white font-bold'>Atonement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App