import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedSec from "../FeaturedSec/FeaturedSec";

const Home = () => {
    return (
        <div className="text-center manrope">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedSec></FeaturedSec>
        </div>
    );
};

export default Home;