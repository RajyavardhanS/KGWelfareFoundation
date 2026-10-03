import { site } from '../../content/site'

/** React 19 hoists <title> and <meta> into <head>. */
export function PageMeta({ title, description }: { title?: string; description?: string }) {
  const full = title ? `${title} — ${site.name} (KGWF)` : `${site.name} (KGWF) — ${site.tagline}`
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description ?? site.description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description ?? site.description} />
    </>
  )
}
