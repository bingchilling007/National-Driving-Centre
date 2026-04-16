import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


export const metadata: Metadata = {
  metadataBase: new URL('https://www.nationaldrivingcentre.co.uk'),
  title: {
    default: 'National Driving Centre | HGV & Bus Driver Training London',
    template: '%s | National Driving Centre',
  },
  description:
    'DVSA Approved HGV, LGV & PCV driver training in South London. All-inclusive prices, 50+ years experience, 1,100+ five-star reviews. Train and test at the same place.',
  keywords: [
    'HGV training London',
    'LGV licence course UK',
    'HGV training near me',
    'PCV bus driver training',
    'Cat C training London',
    'DVSA approved test centre',
    'HGV training Croydon',
    'lorry driving lessons',
    'Driver CPC course UK',
  ],
  openGraph: {
    siteName: 'National Driving Centre',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'DrivingSchool',
              name: 'National Driving Centre',
              description: 'DVSA Approved HGV and PCV driver training in South London.',
              url: 'https://www.nationaldrivingcentre.co.uk',
              telephone: '+442086884666',
              email: 'info@nationaldrivingcentre.co.uk',
              foundingDate: '1974',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Territorial Army Barracks, Mitcham Road',
                addressLocality: 'Croydon',
                postalCode: 'CR0 3RU',
                addressCountry: 'GB',
              },
              openingHoursSpecification: [{
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'],
                opens: '07:00',
                closes: '17:00',
              }],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '1100',
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
