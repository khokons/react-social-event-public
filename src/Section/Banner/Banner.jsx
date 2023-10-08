import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div>
           <img className='mt-10 bg-cover bg-no-repeat bg-center w-screen' src={banner} alt="" />
        </div>
    );
};

export default Banner;