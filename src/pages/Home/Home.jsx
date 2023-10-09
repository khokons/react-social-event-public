import Accorading from "../../Components/Section/Accorading/Accorading";
import Footer from "../../Components/Section/Footer/Footer";
import ServiceCards from "../../Components/Section/ServiceCards/ServiceCards";
import WhyChoos from "../../Components/Section/WhyChoos/WhyChoos";
import Banner from "../../Section/Banner/Banner";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <WhyChoos></WhyChoos>
            <Accorading></Accorading>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;