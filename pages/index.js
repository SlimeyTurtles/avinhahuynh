import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <div className={styles.container}>

      {/* <Navbar /> */}

      <Head>
        <title>Avinh Huynh</title>
        <link rel="icon" href="/frogs/frog2.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Avinh Huynh
        </h1>

        <p className={styles.description}>
          Computer Science Sophmore
        </p>

        <p className={styles.description}>
          <a href="https://docs.google.com/document/d/1VHEcHkoLdGqQNJh45Lq4B2C3oM5WSDVJVXhSIZYIBc4/edit?usp=sharing">Resume</a>
        </p>
        
        <p className={styles.description}>
          <a href="https://github.com/SlimeyTurtles">Github</a>
        </p>

        <p className={styles.description}>
          <a href="https://www.linkedin.com/in/avinh-huynh-59b075196/">Linkedin</a>
        </p>

        <p>I need to add a navbar and projects but ill do this after the career fair :(</p>


        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
