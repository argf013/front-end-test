import CardProfile from "./components/CardProfile"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Trending from "./components/Trending"

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="relative mb-[200px] md:mb-[250px]">
        <Hero />
        <div className="absolute top-[414px] left-[120px] md:top-[443px] md:left-[781px] z-10">
          <CardProfile />
        </div>
      </section>
      <section className="w-full">
        <Trending />
      </section>
      <Footer />
    </div>
  )
}

export default App