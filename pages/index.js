import Head from "next/head";
import Script from 'next/script'

function refreshPage(){
  window.location.reload(false);
}

function Home() {
  return (
    <>
      <Head>
        <title>Html-Pinterest-Clone</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
  
        <noscript><link rel="stylesheet" href="css/noscript.css" /></noscript>
      </Head>
          <div className='is-preload'>
          <div id="wrapper">
          <header id="header">
          <h1>
            <a href="index.html">
              <strong>Unsplashverse</strong> by CoolDaddyDesign
            </a>
          </h1>
          <nav>
            <ul>
              <li><button onClick={refreshPage}>Click To Reload</button>
              </li>
              <li>
                <a href="#footer" className="icon solid fa-info-circle">
                  About
                </a>
              </li>
            </ul>
          </nav>
          </header>
        
          <div id="main">
            <article className="thumb">
            <a
              href="https://source.unsplash.com/random/topics"
              className="image">
              <img src="https://source.unsplash.com/random/topics" alt="unsplash photo" />
            </a>
            <h2>Random Unsplash photo</h2>
            <p>
              This is a random generated photo from <a href='https://unsplash.com'>Unsplash</a>
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/nature"
              className="image"
            >
              <img src="https://source.unsplash.com/random/nature" alt="" />
            </a>
            <h2>Unplash: Random Photos</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/animals"
              className="image"
            >
              <img src="https://source.unsplash.com/random/animals" alt="" />
            </a>
            <h2>Unplash: Random Photos</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/industrial"
              className="image"
            >
              <img src="https://source.unsplash.com/random/industrial" alt="" />
            </a>
            <h2>Aliquam ipsum sed dolore</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/user/wolfgang_hasselmann"
              className="image"
            >
              <img
                src="https://source.unsplash.com/user/wolfgang_hasselmann"
                alt=""
              />
            </a>
            <h2>Creater: Wolfgang Hasselmann</h2>
            <p>
              I am a hobby photographer.
              <a href="https://unsplash.com/@wolfgang_hasselmann#:~:text=youtube.com/channel/uczqg9syjqdolkzqcmpficqq/videos" />
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/homes"
              className="image"
            >
              <img src="https://source.unsplash.com/random/homes" alt="" />
            </a>
            <h2>Creater: Wolfgang Hasselmann</h2>
            <p>
              I am a hobby photographer.
              <a href="https://unsplash.com/@wolfgang_hasselmann#:~:text=youtube.com/channel/uczqg9syjqdolkzqcmpficqq/videos" />
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/machines"
              className="image"
            >
              <img src="https://source.unsplash.com/random/machines" alt="" />
            </a>
            <h2>Mauris id tellus arcu</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a href="https://source.unsplash.com/random/life" className="image">
              <img src="https://source.unsplash.com/random/life" alt="" />
            </a>
            <h2>Nunc vehicula id nulla</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a href="https://source.unsplash.com/random/3d" className="image">
              <img src="https://source.unsplash.com/random/3d" alt="" />
            </a>
            <h2>Neque et faucibus viverra</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/classic"
              className="image"
            >
              <img src="https://source.unsplash.com/random/classic" alt="" />
            </a>
            <h2>Mattis ante fermentum</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/women"
              className="image"
            >
              <img src="https://source.unsplash.com/random/women" alt="" />
            </a>
            <h2>Sed ac elementum arcu</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          <article className="thumb">
            <a
              href="https://source.unsplash.com/random/babies"
              className="image"
            >
              <img src="https://source.unsplash.com/random/babies" alt="" />
            </a>
            <h2>Vehicula id nulla dignissim</h2>
            <p>
              Nunc blandit nisi ligula magna sodales lectus elementum non.
              Integer id venenatis velit.
            </p>
          </article>
          </div>
        
          <footer id="footer" className="panel">
          <div className="inner split">
            <div>
              <section>
                <h2>Magna feugiat sed adipiscing</h2>
                <p>
                  Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt
                  erat, et scelerisque turpis ipsum eget quis orci mattis
                  aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor
                  nulla eu bibendum sapien. Donec non pharetra dui. Nulla
                  consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et
                  scelerisque turpis ipsum.
                </p>
              </section>
              <section>
                <h2>Follow me on ...</h2>
                <ul className="icons">
                  <li>
                    <a href="#" className="icon brands fa-twitter">
                      <span className="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-facebook-f">
                      <span className="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-instagram">
                      <span className="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-github">
                      <span className="label">GitHub</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-dribbble">
                      <span className="label">Dribbble</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icon brands fa-linkedin-in">
                      <span className="label">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </section>
              <p className="copyright">
                © Unttled.Design: <a href="http://html5up.net">HTML5 UP</a>.
              </p>
            </div>
            <div>
              <section>
                <h2>Get in touch</h2>
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="field half">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="field">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        defaultValue="Send"
                        className="primary"
                      />
                    </li>
                    <li>
                      <input type="reset" defaultValue="Reset" />
                    </li>
                  </ul>
                </form>
              </section>
            </div>
          </div>
          </footer>
        </div>
        <Script src="js/jquery.min.js"></Script>
	      <Script src="js/jquery.poptrox.min.js"></Script>
	      <Script src="js/browser.min.js"></Script>
	      <Script src="js/breakpoints.min.js"></Script>
	      <Script src="js/util.js"></Script>
	      <Script src="js/main.js"></Script>

      </div>
    </>
  );
}

export default Home;
