import Head from 'next/head'
import { Grid, Header, Icon, Button } from "semantic-ui-react";
import Depixen from '../components/depixen';
import React from 'react';

export default class Home extends React.Component {
  state = {
    title1: "New Title",
    desc1: "New Description",
    img1: null,
    title2: "",
    desc2: "",
    img2: null
  }

  onButtonClick = () => {
    this.setState({
      title1: "New Title",
      desc1: "New Description",
      title2: this.state.title1,
      desc2: this.state.desc1,
      img2: this.state.img1,
      img1: null
    })
  }

  changeTitle = (e, { value }) => {
    this.setState({ title1: value })
  };

  changeDesc = (e, { value }) => {
    this.setState({ desc1: value })
  };

  changeFile = (e) => {
    this.setState({ img1: URL.createObjectURL(e.target.files[0]) })
  };

  render() {
    return (
      <>
        <Head>
          <title>{"Depixen Study Case"}</title>
        </Head>
        <Grid >
          <Grid.Row>
            <Depixen
              title={this.state.title1}
              desc={this.state.desc1}
              file={this.state.img1}
              changeTitle={this.changeTitle}
              changeDesc={this.changeDesc}
              changeFile={this.changeFile}
              onButtonClick={this.onButtonClick}
              index={1}
            />
          </Grid.Row>
          <Grid.Row>
            <Depixen
              title={this.state.title2}
              desc={this.state.desc2}
              file={this.state.img2}
              index={2}
            />
          </Grid.Row>
        </Grid>
      </>
    )
  }
}