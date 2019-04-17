import React, { Component } from 'react';

import styles from './Header.module.scss';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>App</h1>
        </div>
      </header>
    );
  }
}
