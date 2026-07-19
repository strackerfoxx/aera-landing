import { MetadataRoute } from 'next';import { siteUrl } from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{return['','features','industries','pricing','about','contact','legal'].map(p=>({url:`${siteUrl}/${p}`,lastModified:new Date(),changeFrequency:p?'weekly':'daily',priority:p?0.8:1}))}
