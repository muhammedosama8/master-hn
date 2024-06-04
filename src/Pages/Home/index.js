import BestSellingProducts from "./ BestSellingProducts"
import Banner from "./Banner"
import FeatureProducts from "./FeatureProducts"
import ShopByCategory from "./ShopByCategory"

const Home = () => {
    return <>
        <Banner />
        <ShopByCategory />
        <FeatureProducts />
        <BestSellingProducts />
    </>
}
export default Home