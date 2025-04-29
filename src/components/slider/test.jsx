// components/TestHlsPlayback.jsx
"use client";

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function TestHlsPlayback() {
  const videoRefs = {
    1: useRef(null),
    2: useRef(null),
  };

  useEffect(() => {
    const setupHls = (videoEl, url) => {
      if (!videoEl) return;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoEl.play().catch(() => {
            /* swallow any autoplay errors */
          });
        });
      } else if (videoEl.canPlayType("application/vnd.apple.mpegurl")) {
        videoEl.src = url;
        videoEl.play().catch(() => {});
      }
    };

    setupHls(
      videoRefs[1].current,
      "https://d3jn5509arnhlw.cloudfront.net/slider/1/master.m3u8"
    );
    setupHls(
      videoRefs[2].current,
      "https://d3jn5509arnhlw.cloudfront.net/slider/2/master.m3u8"
    );
  }, []);

  return (
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {[1, 2].map((i) => (
        <div key={i} style={{ flex: "1 1 300px" }}>
          <h3 style={{ color: "#fff", textAlign: "center" }}>
            Slider {i}
          </h3>
          <video
            ref={videoRefs[i]}
            muted
            autoPlay
            playsInline
            preload="auto"
            poster={`/slider/${i === 1 ? "12" : "7"}.webp`}
            width="100%"
            height="auto"
            style={{ background: "#000" }}
            controls
          />
        </div>
      ))}
    </div>
  );
}