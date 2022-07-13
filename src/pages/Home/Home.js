import {
  Banner,
  Container,
  FeaturedProducts,
  Footer,
  FooterBottom,
  Header,
  Products,
  Slider,
  Weather,
} from "../../components";

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
