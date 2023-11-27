import FirstCard from "../../components/FirstCard/FirstCard";
import SecondCard from "../../components/SecondCard/SecondCard";
import ThirdCard from "../../components/ThirdCard/ThirdCard";

export default function CardsWrapper(){
    return(
        <div className="w-10/12 my-10 mx-auto p-2">
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
    )
}