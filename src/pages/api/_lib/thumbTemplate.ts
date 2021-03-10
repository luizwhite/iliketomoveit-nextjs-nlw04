export default function getThumbnailTemplate(
  level: string,
  challengesCompleted: string,
  currentXP: string,
): string {
  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <link rel="shortcut icon" href="favicon_2.png" type="image/png" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
        rel="stylesheet"
      />

      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <style type="text/css">
        :root {
          --text-default: #666;
          --white: #fff;
          --blue: #e08a59;
          --title: #2e384d;
          --blue-twitter: #2aa9e0;
          --gray-line: #dcdde0;
        }

        * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
          outline: 0;
        }

        body {
          color: var(--text-default);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body,input,button,textarea {
          font: 400 1rem 'Inter', sans-serif;
        }

        h1,h2,h3,h4,h5,h6,strong {
          font-weight: 500;
        }

        button {
          cursor: pointer;
          border: none;
        }

        li {
          list-style: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      </style>
      <style type="text/css">
        div.modal-level-up {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 2rem 3rem;
          width: 1200px;
          height: 628px;

          background-color: var(--white);

          box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
          text-align: center;
          position: relative;
        }

        div.modal-level-up header {
          width: 400px;
          margin: 0 auto;

          background: url('http://localhost:3000/icons/levelup.svg') no-repeat center/contain;
          font-size: 20rem;
          font-weight: 600;
          color: var(--blue);
        }

        div.modal-level-up strong {
          font-size: 3.25rem;
          color: var(--title);
          font-weight: 600;
        }

        div.modal-level-up p {
          margin-top: 0.25rem;
          font-size: 1.25rem;
          color: var(--text-default);
        }

        div.modal-level-up button {
          border: 0;
          font-size: 0;

          background-color: transparent;
          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
        }

        div.info-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        div.info-wrapper > div {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          align-items: center;
          justify-items: stretch;
          width: 21.375rem;
          height: 100%;
        }

        div.info-wrapper > div > div {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        div.info-wrapper > div > div > span {
          margin-bottom: 0.625rem;

          color: var(--text-default);
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
          opacity: 0.5;
        }

        div.info-wrapper > div > div:not(:last-child) {
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--gray-line);
        }

        div.info-wrapper > div > div > p {
          font-size: 40px;
          font-weight: 500;
        }

        div.info-wrapper > div > div > p > span {
          color: var(--blue);
        }

        div.info-wrapper svg {
          width: 300px;
        }

        div.info-wrapper svg path {
          fill: var(--blue);
        }

        div.info-wrapper svg path:nth-child(3),div.info-wrapper svg path:nth-child(6),div.info-wrapper svg path:nth-child(11) {
          fill: #4CD62B;
        }

        #modal-wrapper {
          width: 100%;
          height: 100%;
        }
      </style>
    </head>
    <body>
      <div id="modal-wrapper">
        <div class="modal-level-up">
          <div>
            <header>${level}</header>
            <strong>Avancei para o próximo level!</strong>
          </div>
          <div class="info-wrapper">
            <div>
              <div>
                <span>Desafios</span>
                <p><span>${challengesCompleted}</span> completados</p>
              </div>
              <div>
                <span>Experiência</span>
                <p><span>${currentXP}</span> xp</p>
              </div>
              <div>
                <svg width="427" height="76" viewBox="0 0 427 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.6714 19.9871L20.3659 31.157L14.6428 58.7934H1.05877L6.78182 31.157H0L2.30967 19.9829L22.6714 19.9871ZM12.5825 12.7412C10.2279 10.0466 10.9474 5.42368 14.1809 2.42174C17.4144 -0.580198 21.9479 -0.824395 24.3148 1.8744C26.6817 4.5732 25.9499 9.1961 22.7164 12.198C19.4829 15.2 14.9412 15.4442 12.5825 12.7412Z" fill="white"></path>
                  <path d="M31.1804 4H48.4231L37.2468 59.0875H20L31.1804 4Z" fill="white"></path>
                  <path d="M57.9887 52.5891C57.2365 56.231 54.4445 59.1824 50.2217 59.1824C45.9989 59.1824 44.4292 56.2352 45.1814 52.5891C45.9335 48.943 48.7255 46 52.9483 46C57.1711 46 58.7286 48.943 57.9887 52.5891Z" fill="#4CD62B"></path>
                  <path d="M85.743 25.3315L81.6796 45.0231C81.2708 47.0103 81.508 47.3766 83.4334 47.3766H91.883L89.5775 58.5549H78.4216C70.442 58.5549 66.3786 53.2415 68.0751 45.0231L72.1385 25.3315H67L69.3056 14.1532H74.4563L76.3449 5H89.9454L88.0568 14.1532H98.7507L96.4329 25.3315H85.743Z" fill="white"></path>
                  <path d="M135.384 33.5277L132.96 45.2828C131.263 53.5013 125.009 58.8105 117.017 58.8105H106.723C98.7439 58.8105 94.6846 53.4971 96.3811 45.2786L98.8052 33.5277C100.498 25.3092 106.752 20 114.748 20H125.058C133.021 20 137.084 25.3092 135.384 33.5277ZM121.783 33.5277C122.192 31.5404 121.955 31.1741 120.03 31.1741H115.124C113.195 31.1741 112.806 31.5446 112.397 33.5277L109.969 45.2786C109.56 47.2659 109.802 47.6322 111.727 47.6322H116.633C118.558 47.6322 118.95 47.2617 119.359 45.2786L121.783 33.5277Z" fill="white"></path>
                  <path d="M148.989 52.5891C148.237 56.231 145.444 59.1824 141.222 59.1824C136.999 59.1824 135.429 56.2352 136.181 52.5891C136.934 48.943 139.726 46 143.948 46C148.171 46 149.729 48.943 148.989 52.5891Z" fill="#4CD62B"></path>
                  <path d="M220.522 33.5139L215.306 58.7967H201.718L206.934 33.5139C207.343 31.5267 207.106 31.1604 205.18 31.1604H200.275C198.362 31.1604 197.961 31.5267 197.556 33.4634C197.556 33.4634 197.556 33.4971 197.556 33.5139L192.34 58.7967H178.74L183.96 33.5139C184.369 31.5267 184.132 31.1604 182.202 31.1604H177.297C175.367 31.1604 174.979 31.5309 174.57 33.5139L169.35 58.7967H155.762L163.77 19.9862H174.807L176.557 23.3208C177.563 22.2294 178.782 21.3684 180.133 20.7939C181.483 20.2193 182.937 19.9442 184.398 19.9862H187.214C192.528 19.9862 196.113 22.3651 197.397 26.3859C199.772 21.9146 203.214 19.9862 207.371 19.9862H210.192C218.176 19.9862 222.235 25.2954 220.522 33.5139Z" fill="white"></path>
                  <path d="M261.961 33.5139L259.537 45.269C257.841 53.4875 251.586 58.7967 243.594 58.7967H233.301C225.321 58.7967 221.262 53.4833 222.959 45.2648L225.383 33.5139C227.075 25.2954 233.33 19.9862 241.326 19.9862H251.635C259.598 19.9862 263.662 25.2954 261.961 33.5139ZM248.361 33.5139C248.77 31.5266 248.532 31.1603 246.607 31.1603H241.702C239.772 31.1603 239.384 31.5308 238.975 33.5139L236.547 45.2648C236.138 47.2521 236.379 47.6184 238.305 47.6184H243.21C245.135 47.6184 245.528 47.2479 245.937 45.2648L248.361 33.5139Z" fill="white"></path>
                  <path d="M312.279 19.9862L287.085 58.7967H273.187L263.997 19.9862H278.881L282.883 45.4711L297.395 20.0073L312.279 19.9862Z" fill="white"></path>
                  <path d="M346.764 30.4235C346.267 32.6298 345.067 34.6011 343.355 36.0232L336.434 41.9176C334.775 43.3548 332.687 44.1631 330.519 44.208H320.937L320.72 45.248C320.312 47.2352 320.549 47.6015 322.478 47.6015H343.212L340.906 58.7799H317.458C309.479 58.7799 305.42 53.4665 307.116 45.248L309.54 33.497C311.237 25.2785 317.491 19.9694 325.483 19.9694H335.801C343.76 19.9862 347.876 25.0175 346.764 30.4235ZM332.53 33.5139C332.939 31.5266 332.702 31.1603 330.773 31.1603H325.867C323.946 31.1561 323.537 31.5308 323.128 33.5139L322.311 37.56H330.405C330.768 37.5445 331.116 37.4074 331.396 37.1696C331.676 36.9317 331.874 36.6061 331.958 36.2422L332.53 33.5139Z" fill="white"></path>
                  <path d="M362.041 52.2076C361.289 55.8495 358.497 58.8009 354.274 58.8009C350.051 58.8009 348.481 55.8537 349.234 52.2076C349.986 48.5615 352.778 45.6185 357.001 45.6185C361.223 45.6185 362.781 48.5615 362.041 52.2076Z" fill="#4CD62B"></path>
                  <path d="M391.196 19.9862L388.89 31.1561L383.167 58.7925H369.583L375.306 31.1561H368.524L370.834 19.982L391.196 19.9862ZM381.107 12.7403C378.752 10.0457 379.472 5.42283 382.705 2.42089C385.939 -0.581053 390.472 -0.82525 392.839 1.87355C395.206 4.57235 394.474 9.19525 391.241 12.1972C388.007 15.1991 383.465 15.4433 381.107 12.7403Z" fill="white"></path>
                  <path d="M413 25.5733L408.937 45.2649C408.528 47.2521 408.765 47.6184 410.691 47.6184H419.14L416.835 58.7968H405.679C397.699 58.7968 393.636 53.4834 395.333 45.2649L399.396 25.5733H394.257L396.563 14.395H401.714L403.602 5.24182H417.203L415.314 14.395H426.008L423.69 25.5733H413Z" fill="white"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}
