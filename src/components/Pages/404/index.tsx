import { Footer, Header, Heading } from '@/components/Base';

function Page404() {
  return (
    <>
      <Header />
      <main className="mt-8">
        <Heading level={1}>404です。</Heading>
      </main>
      <Footer />
    </>
  );
}

export default Page404;
