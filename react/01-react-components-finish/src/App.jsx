import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection"
import DifferencesSection from "./components/DifferencesSection"
import IntroSection from "./components/IntroSection"
import { Fragment } from "react";




export default function App() {
 

  return (
    <Fragment> 
      <Header></Header>
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
        
      </main>
      </Fragment>
  );
}
