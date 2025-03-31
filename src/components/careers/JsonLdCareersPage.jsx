'use client'

import React from 'react'

export default function JsonLdCareersPage() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Careers at Neutron Controls™",
          "url": "https://www.neutroncontrols.com/careers",
          "description": "Join Neutron Controls and help shape extraordinary solutions. Collaborate in a supportive environment using cutting-edge technologies.",
          "publisher": {
            "@type": "Organization",
            "name": "Neutron Controls™",
            "url": "https://www.neutroncontrols.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.neutroncontrols.com/meta/general.jpg"
            }
          }
        })
      }}
    />
  )
}