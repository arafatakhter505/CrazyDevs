import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "CrazyDevs",
  siteName: "CrazyDevs",
  description:
    "We specialize in agile software development, ensuring timely delivery and high-quality results. Whether you're a startup or an established enterprise, our solutions drive efficiency, enhance user experiences, and improve business performance.",
  // change base url of your web (without '/' at the end)
  url: "https://crazy-devs.vercel.app/",
  type: "website",
  robots: "follow, index",
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image:
    "https://crazy-devs.vercel.app/_next/image?url=%2Fassets%2FIllustration1.png&w=1920&q=100",
  author: "CrazyDevs",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#F53838" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/Crazydevs-fav.png"
      />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#F53838" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/Crazydevs-fav.png",
  },
 


  {
    rel: "mask-icon",
    href: "/favicon/Crazydevs-fav.svg",
    color: "#F59A9A",
  },
  {
    rel: "icon",
    href: "/favicon/Crazydevs-fav.ico",
  },
  
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/Crazydevs-fav.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/Crazydevs-fav.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default SeoHead;
