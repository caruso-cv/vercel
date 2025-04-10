"use client";

import { useEffect, useState } from "react";
import Notification from "@/components/tools/Notification";

export default function ServiceWorkerRegister() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("✅ SW registered:", registration);

            const notifyAndReload = () => {
              setShowNotification(true);
              // Reload after 4s (gives user time to read the toast)
              setTimeout(() => {
                window.location.reload();
              }, 4000);
            };

            if (registration.waiting) {
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
              notifyAndReload();
            }

            registration.addEventListener("updatefound", () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener("statechange", () => {
                  if (
                    newWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    newWorker.postMessage({ type: "SKIP_WAITING" });
                    notifyAndReload();
                  }
                });
              }
            });
          })
          .catch((err) => {
            console.error("❌ SW registration failed:", err);
          });
      });
    }
  }, []);

  return (
    <>
      {showNotification && (
        <Notification
          show={showNotification}
          onClose={() => setShowNotification(false)}
          type="success"
          title="New version available"
          message="The site will refresh to update."
        />
      )}
    </>
  );
}