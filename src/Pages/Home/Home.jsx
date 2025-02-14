import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div className="mb-8">
        <Banner></Banner>
      </div>
      <div className="mb-8">
        <Category></Category>
      </div>

      <div className="mb-8">
        <PopularMenu></PopularMenu>
      </div>

      <div className="mb-8">
        <Featured></Featured>
      </div>

      <div className="mb-8">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
