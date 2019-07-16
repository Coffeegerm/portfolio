import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/layout';

export default class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>David Yarzebinski</title>
          <meta name="description" content="The Coffeegerm" />
        </Helmet>

        <div id="main">
          <h1>404</h1>
          <p>Somehow you ended here</p>
          <Link to="/" className="button">
            Let&apos;s go back
          </Link>
        </div>
      </Layout>
    );
  }
}
