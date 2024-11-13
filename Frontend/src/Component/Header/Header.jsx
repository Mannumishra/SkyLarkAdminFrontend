import React, { useState } from "react";
import logo from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import "../Header/header.css";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDropdownClick = (event) => {
    const dropdown = event.currentTarget.parentElement;
    dropdown.classList.toggle("active");
  };

  return (
    <>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sidebar-header">
          <h3 style={{ color: "white" }}>MAIN MENU</h3>
        </div>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              About Us
            </Link>
          </li>
          <li className="dropdown">
            <a href="#" onClick={handleDropdownClick}>
              <span>Artist Management</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <Link to="/emce-anchor" onClick={toggleSidebar}>
                  Emcee/Anchor
                </Link>
              </li>
              <li>
                <Link to="/drum-circle" onClick={toggleSidebar}>
                  Drum Circle
                </Link>
              </li>
              <li>
                <Link to="/live-band" onClick={toggleSidebar}>
                  Live Band
                </Link>
              </li>
              <li>
                <Link to="/bollywood-celebrity" onClick={toggleSidebar}>
                  Bollywood Celebrity
                </Link>
              </li>
              <li>
                <Link to="/dance-troup" onClick={toggleSidebar}>
                  Dance Troup
                </Link>
              </li>
              <li>
                <Link to="/choreographer" onClick={toggleSidebar}>
                  Choreographer
                </Link>
              </li>
              <li>
                <Link to="/musical-instrument" onClick={toggleSidebar}>
                  Musical Instrument Players
                </Link>
              </li>
              <li>
                <Link to="/dj-artist" onClick={toggleSidebar}>
                  DJ Artist
                </Link>
              </li>
              <li>
                <Link to="/singers" onClick={toggleSidebar}>
                  Singers
                </Link>
              </li>
              <li>
                <Link to="/photographer-videographer" onClick={toggleSidebar}>
                  Photographer & Videographer
                </Link>
              </li>
              <li>
                <Link to="/standup-comedian" onClick={toggleSidebar}>
                  Standup Comedian
                </Link>
              </li>
              <li>
                <Link to="/mimicry-artist" onClick={toggleSidebar}>
                  Mimicry Artist
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" onClick={handleDropdownClick}>
              <span>Events</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <Link to="/corporate-event" onClick={toggleSidebar}>
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/fashion-show" onClick={toggleSidebar}>
                  Fashion Show
                </Link>
              </li>
              <li>
                <Link to="/conferences" onClick={toggleSidebar}>
                  Conferences
                </Link>
              </li>
              <li>
                <Link to="/collage-events" onClick={toggleSidebar}>
                  College Events
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" onClick={handleDropdownClick}>
              <span>Wedding</span>
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <Link to="/pre-wedding-event" onClick={toggleSidebar}>
                  Pre-Wedding Event
                </Link>
              </li>
              <li>
                <Link to="/photographer-videographer" onClick={toggleSidebar}>
                  Photography & Videography
                </Link>
              </li>
              <li>
                <Link to="/destination-wedding" onClick={toggleSidebar}>
                  Destination Wedding{" "}
                </Link>
              </li>
              <li>
                <Link to="/anniversary" onClick={toggleSidebar}>
                  Anniversary
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleSidebar}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/our-videos" onClick={toggleSidebar}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleSidebar}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <header
        id="header"
        class="header d-flex align-items-center position-relative"
      >
        <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <img src={logo} width={"80%"} alt="" />
          </Link>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li>
                <Link to="/">
                  Home
                  <br />
                </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li class="dropdown">
                <Link to="#">
                  <span>Artist Management</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/emce-anchor">Emcee/Anchor</Link>
                  </li>
                  <li>
                    <Link to="/drum-circle">Drum Circle</Link>
                  </li>
                  <li>
                    <Link to="/live-band">Live Band</Link>
                  </li>
                  <li>
                    <Link to="/bollywood-celebrity">Bollywood Celebrity</Link>
                  </li>
                  <li>
                    <Link to="/dance-troup">Dance Troup</Link>
                  </li>
                  <li>
                    <Link to="/choreographer">Choreographer</Link>
                  </li>
                  <li>
                    <Link to="/musical-instrument">
                      Musical Instrument Players
                    </Link>
                  </li>
                  <li>
                    <Link to="/dj-artist">DJ Artist</Link>
                  </li>
                  <li>
                    <Link to="/singers">Singers</Link>
                  </li>
                  <li>
                    <Link to="/photographer-videographer">
                      Photographer & Videographer
                    </Link>
                  </li>
                  <li>
                    <Link to="/standup-comedian">Standup Comedian</Link>
                  </li>
                  <li>
                    <Link to="/mimicry-artist">Mimicry Artist</Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to={"#"}>
                  <span>Events</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/corporate-event">Corporate Events</Link>
                  </li>
                  <li>
                    <Link to="/fashion-show">Fashion Show</Link>
                  </li>
                  <li>
                    <Link to="/conferences">Conferences</Link>
                  </li>
                  <li>
                    <Link to="/collage-events">College Events</Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <Link to="#">
                  <span>Wedding</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link to="/pre-wedding-event">Pre-Wedding Event</Link>
                  </li>
                  <li>
                    <Link to="/photographer-videographer">
                      Photography & Videography
                    </Link>
                  </li>
                  <li>
                    <Link to="/destination-wedding">Destination Wedding </Link>
                  </li>
                  <li>
                    <Link to="/anniversary">Anniversary</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/our-videos">Videos</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <i
              class="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleSidebar}
            ></i>
          </nav>
          {/* for mobile responsive */}
        </div>
      </header>
    </>
  );
};

export default Header;
