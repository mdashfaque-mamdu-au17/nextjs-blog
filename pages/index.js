import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/Date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Ashfaque. I'm a software engineer and a traveler{' '}
        </p>
        <p>
          (This is a sample website - you’ll be building a site like
          this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </section>

      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
      >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Pre-rendering and data fetching
// ! Pre-rendering
// By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

// !4 Two Forms of Pre-rendering.
// Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering. The difference is in when it generates the HTML for a page.
// ? Static Generation:
// Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
// ? Server-side Rendering:
// Server-side Rendering is the pre-rendering methods that generates the HTML on each request.

// ? Per-page Basis:
// importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

// ? when to Use Static Generation v.s Server-side Rendering
// We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
// You can use Static Generation for many types of pages, including
// . Marketing pages
// . Blog post
// Help and documentation

// You should ask yourself : "Can i pre-render this page ahead of user's request?" if the answer is yes, then you should choose Static Generation.
// On the other hand, Static Generation is not a good idea if you cannot-pre-render a page ahead of a user's request. May be your page shows frequently updates data, and the page content changes on every request.

// In that case, you can use Server-side Rendering. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side Jaavascript to populate frequently updates data.

// ! Static Generation with and without Data.
// ? Static Generation without Data.
// for pages that can be generated without fetching external data at build time.

// ? Static Generation with Data
// for pages that can only be generated after fetching external data at build time.

// ? getStaticProps
// . getStaticProps runs at build time in production, and
// . Inside the function, you can fetch external data and send it as props to the page

// ! Creating a Simple blog architecture

// ! Implement getStaticProps
// when we use getStaticProps whatever we return from that async function as props will be available as prop on that component.

// ! getStaticProps Details
// ? Fetch External API or Query Database
// We can fetch data from other sources, like an external API endpoint, and it'll work just fien.
// you can also query the database directly.
// This is possible because getStaticProps only runs on the server side. It will never run on the client-side. It won't even includes in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

// ? Development vs. Production
// . In development (npm run dev or yarn dev), getStaticProps runs on every request.
// In production, getStaticProps runs at build time. However, this behavior can be enhanced using the fallback key returned by getStaticPaths

// ? Only allowed in a page.
// getStaticProps can only be exported from a page. You can't export it from non-page files

// ? What if i need to fetch Data at Request Time?
// Since Static Generation happens once at built time, it's not suitable for data that updates frequently or changes on every user request.
// In cases like this, where your data likely to change, you can use Server-side Rendering. Let's learn more about server-side rendering in the next section.

// ! Fetch Data at Request Time.
// if you need to fetch data at request time instead of at build time, you can try Server-side Rendering:
// To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
// You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time.

// ? Client-side Rendering
// If you do not need to pre-render the data, you can also use the following strategy (called Client-side Rendering).
// . Statically generate (pre-render) parts of the page that do not require external data.
// When the page loads, fetch external data from the client using JavaScript and populate the remaining parts.

// ? SWR
// React hook for data fetching called SWR, We highly recommend it if you're fetching data on the client side. It handles caching, revalidation, focus tracking, refetching on interval, and more

// ******************************************************* //
// ! *** DYNAMIC ROUTES *** !

// ! Page Path Depends on External Data
// Pages that begins with [ and end with ] are dynamic routes in next.js

// ! Implementing getStaticPaths
//

// ! Implement getStaticProps

// ! Render Markdown

// ! Polishing the Post Page

// ! Polishing the Index Page

// ***************************************************** //
// ! *** API Routes *** !

// ! Creating an API Routes
// API Routes let you create an API endpoint inside a Next.js app.
// You can do so by creating a function inside the pages/api directory that has the following format

// ! Creating a simple API endpoint
// Create a file called hello.js in pages/api and when you visit that route you will get a response from server.

// ! API Routes Details
// *** Do not fetch an API Route from getStaticProps or getStaticPaths
// *** A Good Use Case: Handling Form Input

// ****************************************************************** //
// ! ***  Deploying Your Next.js App *** !

// ! Pushing To Github
