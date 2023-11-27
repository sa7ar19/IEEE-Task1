import Footer from "../../components/Footer/Footer";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Cta from "../Cta/Cta";
import Hero from "../Hero/Hero";

export default function Home(){
    return(
        <>
            <Hero />
            <CardsWrapper />
            <Cta />
            <Footer />
        </>
    )
}