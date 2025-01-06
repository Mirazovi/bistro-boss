import CheckItOut from "@/Components/Home/CheckItOut";
import Description from "@/Components/Home/Description";
import FaqSection from "@/Components/Home/FaqSection";
import FoodCategory from "@/Components/Home/FoodCategory";
import HeroSlider from "@/Components/Home/HeroSlider";
import PopularItem from "@/Components/Home/PopularItem";
import Recommends from "@/Components/Home/Recommends";
import Navbar from "@/Components/Shared/Navbar"
import TimeManagement from "@/Components/Shared/SectionTitle";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSlider/>
    <TimeManagement heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}/>
    <FoodCategory/>
    <Description/>
    <TimeManagement heading={'CHEF RECOMMENDS'} subHeading={'---Should Try---'}/>
    <CheckItOut/>
    <PopularItem/>
    <Recommends/>
    <FaqSection/>
   </div>
  );
}
