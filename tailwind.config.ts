import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, colors: { aera: { blue: '#2563EB', light: '#60A5FA', ink: '#0F172A', muted: '#64748B', line: '#E5E7EB', soft: '#F8FAFC', success: '#22C55E' } }, boxShadow: { glow: '0 24px 80px rgba(37,99,235,.18)', card: '0 20px 60px rgba(15,23,42,.08)' } } }, plugins: [] };
export default config;
