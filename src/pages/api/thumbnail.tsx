import { NextApiRequest, NextApiResponse } from 'next';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { getScreenshot } from './_lib/chromium';
import getMetaTemplate from './_lib/thumbMetaTemplate';
// import getThumbnailTemplate from './_lib/thumbTemplate';
import getThumbnailHTMLTemplate from './_lib/thumbHTMLTemplate';

import ThumbnailComponent from '../../components/ThumbnailComponent';
import GlobalStyle from '../../styles/globals';

const isDev = !process.env.AWS_REGION;

interface GenericStringObject {
  [key: string]: string;
}

/* eslint-disable camelcase */
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const sheet = new ServerStyleSheet();

  try {
    const {
      level,
      challengesCompleted,
      currentXP,
      image,
      layout,
      share_to_twitter_URI,
    } = req.query as GenericStringObject;

    if (share_to_twitter_URI === 'true')
      return res.json(
        encodeURIComponent(
          `${process.env.NGROK_TEST_URL || process.env.NEXTAUTH_URL}/api/${
            process.env.THUMBNAIL_NO_EXT || 'thumbnail.png'
          }?level=${level}&challengesCompleted=${challengesCompleted}&currentXP=${currentXP}`,
        ),
      );

    if (!level) throw new Error('Level is required');
    if (!challengesCompleted)
      throw new Error('Challenges completed is required');
    if (!currentXP) throw new Error('Current XP is required');

    /* const html = getThumbnailTemplate(level, challengesCompleted, currentXP); */
    let html = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <>
          <ThumbnailComponent {...{ level, challengesCompleted, currentXP }} />
          <GlobalStyle />
        </>,
      ),
    );
    const styleTags = sheet.getStyleTags();
    sheet.seal();
    html = getThumbnailHTMLTemplate(styleTags, html);

    /* if (layout === 'true') return res.end(html); */
    if (layout === 'true') return res.end(html);

    if (image === 'true') {
      const file = await getScreenshot(html, isDev);

      res.setHeader('Content-Type', 'image/png');
      res.setHeader(
        'Cache-Control',
        'public, immutable, no-transform, s-maxage=31536000, max-age=31536000',
      );

      return res.end(file);
    }

    const htmlMeta = getMetaTemplate(level, challengesCompleted, currentXP);

    res.setHeader('Content-Type', 'text/html');
    return res.end(htmlMeta);
  } catch (err) {
    console.error(err);
    sheet.seal();

    return res.status(500).send('Internal server error');
  }
};
