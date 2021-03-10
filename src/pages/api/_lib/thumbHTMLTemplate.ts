export default function getThumbnailHTMLTemplate(
  styleTags: string,
  thumbnailRenderedString: string,
): string {
  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="shortcut icon" href="favicon_2.png" type="image/png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />

        ${styleTags}
      </head>
      <body>
        ${thumbnailRenderedString}
      </body>
    </html>
  `;
}
