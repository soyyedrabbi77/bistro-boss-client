import SectionTitle from "../../components/SectionTitle/SectionTitle";

import './Featured.css';

import FeaturedImg from '../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-20 px-36 bg-slate-500 bg-opacity-60">
                <div>
                <img src={FeaturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim totam, doloribus ut necessitatibus soluta aperiam, laborum doloremque voluptatem cum vero atque iusto provident quia eaque excepturi incidunt perferendis eos ab!</p>
                    <button className="btn btn-outline border-0 border-b-4 border-t-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;