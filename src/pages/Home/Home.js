import Container from "./Container";
import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";
import FooterBottom from "./Footer/FooterBottom";
import Weather from "./Weather/Weather";

function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Slider />
      <FeaturedProducts />
      <Products />
      <Footer />
      <Weather />
      <FooterBottom />
    </Container>
  );
}

export default Home;
