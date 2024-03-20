import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import NewsList from "../components/NewsList"

function Home() {
  return (
    <>
      <Header />
        <Form />
      <div className="flex flex-col items-center">
        <NewsList />
        <Accordion />
      </div>
      <Footer />
    </>
  );
}

export default Home;