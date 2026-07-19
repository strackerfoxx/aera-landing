import { Hero, HomeSections, PageShell } from '@/components/site';
import { siteUrl } from '@/lib/content';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aera',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: siteUrl,
  description: 'Software de reservas de citas para barberías, salones, clínicas, dentistas y negocios de servicios que necesitan gestionar citas online, disponibilidad y clientes de forma simple.',
  offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '128' },
};

export default function Home() {
  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <HomeSections />
    </PageShell>
  );
}
