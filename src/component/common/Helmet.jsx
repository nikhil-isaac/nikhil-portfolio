import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle}</title>
          <meta
            name="description"
            content="software development, software engineer, web development, react development, javascript, html, css, redux, computer engineering, blockhchain, machine learning, deep learning, fincance, supply chain."
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
