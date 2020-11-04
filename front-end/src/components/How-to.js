import React from "react";
import "./How-to.css";

export default function Guide() {
  return (
    <div className="how-to-main">
      <h1 className="guide-title">Guides, Tips, and Tricks</h1>
      <h2 className="measure-subtitle">Measuring For Your Blinds</h2>
      <div className="measure-video-container">
        <iframe
          title="measure-video"
          className="measure-video"
          src="https://www.youtube.com/embed/ZyqZZF7OELs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <article>
          <p>
            Watch this video to learn how to accurately meassure your blinds 
            to the selected window.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br /> To learn more, download <a href="#">this PDF</a>
          </p>
        </article>
      </div>
      <h2 className="install-subtitle">How to install your blinds</h2>
      <div className="install-video-container">
        <iframe
          title="install-video"
          className="install-video"
          src="https://www.youtube.com/embed/HtVucVg0QEE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <article>
          <p>
            Watch this video to learn how to accurately install your blinds 
            to the selected window.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br /> To learn more, download <a href="#">this PDF</a>
          </p>
        </article>
      </div>

      <div className="extra-resources">
        <h3>Learn More</h3>
        <ul>
          <li>
            <a href="#">pdf 1</a>
          </li>
          <li>
            <a href="#">pdf 2</a>
          </li>
          <li>
            <a href="#">pdf 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
