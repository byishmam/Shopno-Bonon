import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { MainLayout } from "./layouts/MainLayout";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollToTop } from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Publications from "./pages/Publications";
import PublicationDetail from "./pages/PublicationDetail";
import AuthorProfile from "./pages/AuthorProfile";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Media from "./pages/Media";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {loading && <Loader onDone={() => setLoading(false)} />}
        <HashRouter>
          <ScrollToTop />
          <CustomCursor />
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/publications/:slug" element={<PublicationDetail />} />
              <Route path="/authors/:slug" element={<AuthorProfile />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<EventDetail />} />
              <Route path="/media" element={<Media />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/team" element={<Team />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
