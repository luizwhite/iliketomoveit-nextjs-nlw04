export default function getMetaTemplate(
  level: string,
  challengesCompleted: string,
  currentXP: string,
): string {
  const metaImageContent = `${
    process.env.NGROK_TEST_URL || process.env.NEXTAUTH_URL
  }/api/${
    process.env.THUMBNAIL_NO_EXT || 'thumbnail.png'
  }?image=true&level=${level}&challengesCompleted=${challengesCompleted}&currentXP=${currentXP}`;

  const iconHref = `${
    process.env.NGROK_TEST_URL || process.env.NEXTAUTH_URL
  }/favicon_2.png" type="image/png`;

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Woooow!">
        <meta name="twitter:image" content="${metaImageContent}">

        <meta name="og:title" content="Woooow!">
        <meta name="og:image" content="${metaImageContent}">

        <link rel="shortcut icon" href="${iconHref}">
        <title>Level Up! - il.to.move.it</title>
      </head>
      <body>
      </body>
    </html>
  `;
}
