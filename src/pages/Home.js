import React from "react";

import Cover from "../components/Cover";
import Bio from "../components/Bio";
import Portfolio from "../components/Portfolio";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Recs from "../components/Recs";

function Home() {
  return (
    <div>
      <Cover />
      <Bio />
      <Portfolio />
      <Recs />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;