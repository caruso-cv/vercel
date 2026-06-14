'use client'
import Script from 'next/script'

// GTM container ID. Configurable via env, with a fallback so the build never
// breaks if the env var is missing. The GA4 Measurement ID (G-ZZQ44F7P76) is
// managed inside the GTM container, not here.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5C24BMW'

export default function GoogleTagManager() {

  return (
    <>
      {/*
        Consent Mode v2 defaults + gtag stub.
        Must run BEFORE GTM loads so the consent state exists when tags evaluate.
        This also defines window.gtag, which the cookie banner relies on to send
        consent updates. GTM does not create window.gtag on its own.
      */}
      <Script id="consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  )
}
