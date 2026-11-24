export default function Footer({ email, github, GithubIcon, MailIcon }){return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#inicio"><span className="brand-mark">&lt;/&gt;</span><span className="brand-wordmark"><span>Lucas</span><span className="brand-frontend">Frontend</span></span></a><p>Desarrollado por LucasFrontend · © {new Date().getFullYear()}</p><div className="footer-links"><a href={github} target="_blank" rel="noreferrer" aria-label="Visitar GitHub"><GithubIcon/></a>

          <a
            href="https://www.linkedin.com/in/lucas-benitez-631a89267/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 .002-4.124 2.062 2.062 0 0 1-.002 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z"/>
            </svg>
          </a><a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=Oportunidad%20Frontend%20o%20Full%20Stack`} target="_blank" rel="noopener noreferrer" aria-label="Escribirme por Gmail"><MailIcon/></a><a href="#inicio" className="to-top" aria-label="Volver arriba">↑</a></div></div></footer>}
