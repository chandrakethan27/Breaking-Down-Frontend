import MyCarousel from './components/Carousel';

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <h1 className=' text-5xl text-center text-white mb-20 pt-10 font'>My Carousel Example</h1>
      <div className='flex justify-center'>
      <div className=" w-[600px]  h-96">
      <MyCarousel />
      </div>
      </div>

    </div>
  );
};

export default App;