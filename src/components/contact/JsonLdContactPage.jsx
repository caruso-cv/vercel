'use client'

import React from 'react'

export default function JsonLdContactPage() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Neutron Controls™",
            "url": "https://www.neutroncontrols.com",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+1-833-704-1251",
                "email": "info@neutroncontrols.com",
                "contactType": "Customer Support",
                "areaServed": "CA",
                "availableLanguage": ["English"],
                "contactOption": "CustomerService"
              }
            ],
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "1145 Innovation Drive, Suite 101",
                "addressLocality": "Kanata",
                "addressRegion": "ON",
                "postalCode": "K2K 3G8",
                "addressCountry": "CA"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "5270 Solar Drive, Unit 21",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "postalCode": "L4W 0G7",
                "addressCountry": "CA"
              }
            ]
          }
        }),
      }}
    />
  )
}