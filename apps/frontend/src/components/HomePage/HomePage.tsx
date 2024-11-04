import { About } from '../About/About';
import { Blogs } from '../Blogs/Blogs';
import { CardCredit } from '../CardCredit/CardCredit';
import { Contact } from '../Contact/Contact';
import { Download } from '../Download/Download';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
import { Newsletter } from '../Newsletter/Newsletter';
import { Partners } from '../Partners/Partners';
import { Reviews } from '../Reviews/Reviews';
import { Steps } from '../Steps/Steps';

export function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Partners />
      <About />
      <CardCredit />
      <Steps />
      <Reviews />
      <Download />
      <Contact />
      <Blogs />
      <Newsletter />
      <Footer />
    </>
  );
}
