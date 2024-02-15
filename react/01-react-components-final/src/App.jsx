import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import { Fragment, useState } from "react";
import TabsSection from "./components/Tabssection";
import FeedBackSection from "./components/FeedBackSection";
import EffectSection from "./components/EffectSection";

export default function App() {
  const [tab, setTab] = useState("effect");

  return (
    <Fragment>
      <Header></Header>
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedBackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </Fragment>
  );
}
