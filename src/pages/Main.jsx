import React from 'react';
import Banner from '../components/Main/Banner/Banner';
import Support from '../components/Main/Support/Support';
import Women from '../components/Main/WomenMen/Women';
import Men from '../components/Main/WomenMen/Men';
import LoockBook from '../components/Main/LoockBook/LoockBook';
import Form from '../components/Main/Form/Form';
import Latest from '../components/Main/Latest/Latest';
import FormFooter from '../components/Main/Form/FormFooter';

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