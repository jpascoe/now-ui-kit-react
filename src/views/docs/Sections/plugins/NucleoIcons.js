/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import {
// } from "reactstrap";

class NucleoIcons extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Nucleo Icons
        </h1>
        <p className="bd-lead" />
        <p>
          Through most of the examples in this kit, we have used 100 Nucleo
          Icons for the Now UI Kit React. View all the{" "}
          <a
            href="https://demos.creative-tim.com/now-ui-kit-react/#/nucleo-icons?ref=creativetim"
            target="_blank"
          >
            example icons
          </a>
          . If you want more than 2100 icons please check the official{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            Nucleo Icons Pack
          </a>
          .
        </p>
        <div className="bd-example" data-example-id="">
          <i className="now-ui-icons users_single-02"></i>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`<i className="now-ui-icons users_single-02"></i>`}
        </SyntaxHighlighter>
      </>
    );
  }
}

export default NucleoIcons;