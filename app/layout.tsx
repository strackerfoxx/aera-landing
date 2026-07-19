import type { Metadata } from 'next';
import './globals.css';
import { siteUrl } from '@/lib/content';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Aera | Software de reservas de citas', template: '%s | Aera' },
  description: 'Aera es un software de reservas de citas para barberías, salones, clínicas, dentistas y negocios de servicios que necesitan gestionar citas online, disponibilidad y clientes de forma simple.',
  keywords: [
    'software de reservas de citas',
    'gestión de citas',
    'reserva online',
    'software para salones',
    'software para clínicas',
    'software para dentistas',
    'software para barberías',
    'software de agendamiento',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Aera | Software de reservas de citas',
    description: 'Gestione reservas online, disponibilidad y clientes con una plataforma simple y escalable para negocios de servicios.',
    url: siteUrl,
    siteName: 'Aera',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aera | Software de reservas de citas',
    description: 'Reserva online, gestión de citas y disponibilidad en una sola plataforma para negocios de servicios.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
