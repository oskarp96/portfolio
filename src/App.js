import React from "react";
import About from "./About";
import Contact from "./components/Connect";
import { Layout } from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <About/>
        <Skills />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
