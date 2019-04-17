import React, { Component } from 'react';

import styles from './Home.module.scss';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <h2>Home</h2>
      </div>
    );
  }
}
