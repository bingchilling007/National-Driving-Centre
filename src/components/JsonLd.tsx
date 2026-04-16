export default function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: 'National Driving Centre',
    description: 'DVSA Approved HGV and PCV driver training in South London. All-inclusive prices, 50+ years experience.',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1100',
    },
    sameAs: [
      'https://www.facebook.com/NationalDrivingCentre/',
      'https://www.youtube.com/@NationalDrivingCentre',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
