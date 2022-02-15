import React from 'react';
import Banner from './Banner/Banner';
import Support from './Support/Support';
import Women from './WomenMen/Women';
import Men from './WomenMen/Men';
import LoockBook from './LoockBook/LoockBook';
import Form from './Form/Form';
import Latest from './Latest/Latest';
import FormFooter from './Form/FormFooter';

const Main = () => {
  return (
    <div>
      <main class="main">
      <div class="container">
        <Banner></Banner>
        <Support></Support>
        <Women></Women>
        <Men></Men>
        <LoockBook></LoockBook>
      </div>
      <Form></Form>
      <Latest></Latest>
      <FormFooter></FormFooter>
    </main>
    </div>
  );
};

export default Main;