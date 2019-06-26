import * as React from 'react';
import { Header, About } from './components';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  )
}