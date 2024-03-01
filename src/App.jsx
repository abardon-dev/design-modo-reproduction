import { ArrowRight, Menu } from 'lucide-react';
import styles from './App.module.scss';
import { Star } from 'lucide-react';
import { PackageSearch } from 'lucide-react';
import { Handshake } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [alternativeHeader, setAlternativeHeader] = useState(false);

  const changeToAlternativeHeader = () => {
    setAlternativeHeader(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeToAlternativeHeader);

    return () => {
      window.removeEventListener('scroll', changeToAlternativeHeader);
    };
  }, []);

  return (
    <>
      {/** Header */}
      <header className={alternativeHeader && styles.alt}>
        <div className={`${styles.headerContent} content`}>
          <img
            className={styles.logo}
            src={`/public/images/${alternativeHeader ? 'designmodo-dark-green-logo' : 'designmodo-white-logo'}.svg`}
            alt="designmodo white text logo"
          />
          <nav className={styles.navMenu}>
            <ul className={styles.navMenuList}>
              <li>
                <button className={`${styles.dropdownMenu} icon-btn`}>
                  Apps <ChevronDown />
                </button>
              </li>
              <li>
                <button className={`${styles.dropdownMenu} icon-btn`}>
                  Services <ChevronDown />
                </button>
              </li>
              <li>
                <button className={`${styles.dropdownMenu} icon-btn`}>
                  Articles <ChevronDown />
                </button>
              </li>
            </ul>
          </nav>
          <div className={styles.actions}>
            <button id="cart-btn">Cart</button>
            <button id="login-btn">Log In</button>
            <button id="try-btn" className="orange-btn btn-rounded btn-small">
              Try Free
            </button>
            <button id="mobile-menu-btn" className="icon-btn">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/** Hero section */}
      <section className={`${styles.heroSection} dark-green-bg`}>
        <div className={`${styles.products} content`}>
          <div className={styles.wrapper}>
            <h1 className="white-text">
              <span className="extra-light-primary-text">Level up</span> your designs faster
            </h1>
            <div className={styles.selectWrapper}>
              <ul className={styles.select}>
                <li>Postcards</li>
                <li>Slides</li>
                <li>Startup</li>
              </ul>
              <div className={`${styles.description} dark-white-green-bg`}>
                <h6 className="white-text">Postcards</h6>
                <p className="white-grey-text">
                  Create beautiful, responsive email templates in minutes. No coding necessary — just drag and drop.
                </p>
                <div className={styles.btnWrapper}>
                  <button className="icon-btn green-btn btn-rounded">
                    Open App <ArrowRight />
                  </button>
                  <button className="icon-btn white-grey-text">
                    See more <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.demoWrapper}>
            <video autoPlay loop muted>
              <source src="/public/videos/postcards_demo.mp4" type="video/mp4" />
            </video>
            <div className={styles.reviews}>
              <div className={styles.review}>
                <Handshake />
                <span className={styles.rate}>4.7/5</span>
                <span> (103 reviews)</span>
              </div>
              <div className={styles.review}>
                <PackageSearch />
                <span className={styles.rate}>4.9/5</span>
                <span> (323 reviews)</span>
              </div>
              <div className={styles.review}>
                <Star />
                <span className={styles.rate}>4.6/5</span>
                <span> (99 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Product numbers */}
      <section className={`${styles.numbers} content`}>
        <div className={`${styles.numberItem} light-green-bg`}>
          <h1>
            97<span>%</span>
          </h1>

          <p>
            of Designmodo customers say their <b>experience is better</b> then other design tools.
          </p>
        </div>
        <div className={`${styles.numberItem} light-green-bg`}>
          <h1>
            7.2 <span>hours</span>
          </h1>
          <p>
            average <b>time saved</b> creating an email template with Postcards.
          </p>
        </div>
        <div className={`${styles.numberItem} light-green-bg`}>
          <h1>
            500 <span>hours</span>
          </h1>
          <p>
            total average <b>time saved</b> per year by Designmodo clients.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
