import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

// Lazy loading components
const Home = lazy(() => import("./Component/Home/Home"));
const Contact = lazy(() => import("./Component/Contact/Contact"));
const Blog = lazy(() => import("./Component/Video/Video"));
const About = lazy(() => import("./Component/About/About"));
const Gallery = lazy(() => import("./Component/Gallery/Gallery"));
const AllDetailPage = lazy(() =>
  import("./Component/AllDetailPage/AllDetailPage")
);
const BollywoodCelebrity = lazy(() =>
  import("./Pages/ArtistManagement/BollywoodCelebrity")
);
const Choreographer = lazy(() =>
  import("./Pages/ArtistManagement/Choreographer")
);
const EmceAnchor = lazy(() => import("./Pages/ArtistManagement/EmceAnchor"));
const DrumCircle = lazy(() => import("./Pages/ArtistManagement/DrumCircle"));
const LiveBand = lazy(() => import("./Pages/ArtistManagement/LiveBand"));
const DanceTroup = lazy(() => import("./Pages/ArtistManagement/DanceTroup"));
const MusicalInstrument = lazy(() =>
  import("./Pages/ArtistManagement/MusicalInstrument")
);
const DJArtist = lazy(() => import("./Pages/ArtistManagement/DJArtist"));
const Singers = lazy(() => import("./Pages/ArtistManagement/Singers"));
const PhotoVideo = lazy(() => import("./Pages/ArtistManagement/PhotoVideo"));
const StandupComedian = lazy(() =>
  import("./Pages/ArtistManagement/StandupComedian")
);
const MimicryArtist = lazy(() =>
  import("./Pages/ArtistManagement/MimicryArtist")
);
const CollegeEvents = lazy(() => import("./Pages/Events/CollegeEvents"));
const Conferences = lazy(() => import("./Pages/Events/Conferences"));
const CorporateEvent = lazy(() => import("./Pages/Events/CorporateEvent"));
const FashionShow = lazy(() => import("./Pages/Events/FashionShow"));
const Anniversary = lazy(() => import("./Pages/Wedding/Anniversary"));
const DestinationWedding = lazy(() =>
  import("./Pages/Wedding/DestinationWedding")
);
const PreWeddingEvent = lazy(() => import("./Pages/Wedding/PreWeddingEvent"));
const Video = lazy(() => import("./Component/Video/Video"));

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      delay: 0,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/all-detail-page" element={<AllDetailPage />} />
            <Route path="/our-videos" element={<Video />} />

            {/* Artist Management */}
            <Route
              path="/bollywood-celebrity"
              element={<BollywoodCelebrity />}
            />
            <Route path="/choreographer" element={<Choreographer />} />
            <Route path="/emce-anchor" element={<EmceAnchor />} />
            <Route path="/drum-circle" element={<DrumCircle />} />
            <Route path="/live-band" element={<LiveBand />} />
            <Route path="/dance-troup" element={<DanceTroup />} />
            <Route path="/musical-instrument" element={<MusicalInstrument />} />
            <Route path="/dj-artist" element={<DJArtist />} />
            <Route path="/singers" element={<Singers />} />
            <Route path="/photographer-videographer" element={<PhotoVideo />} />
            <Route path="/standup-comedian" element={<StandupComedian />} />
            <Route path="/mimicry-artist" element={<MimicryArtist />} />

            {/* Events */}
            <Route path="/college-events" element={<CollegeEvents />} />
            <Route path="/conferences" element={<Conferences />} />
            <Route path="/corporate-event" element={<CorporateEvent />} />
            <Route path="/fashion-show" element={<FashionShow />} />

            {/* Wedding */}
            <Route path="/anniversary" element={<Anniversary />} />
            <Route
              path="/destination-wedding"
              element={<DestinationWedding />}
            />
            <Route path="/pre-wedding-event" element={<PreWeddingEvent />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
