import React from 'react';

import Header from './components/Header';
import Categories from './components/categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Ветчина и грибы" price={520} />
            <PizzaBlock title="Все и сразу" price={540} />
            <PizzaBlock title="Мясное плато" price={560} />
            <PizzaBlock title="Таежная" price={610} />
            <PizzaBlock title="4 сыра" price={580} />
            <PizzaBlock title="Деревенская" price={590} />
            <PizzaBlock title="Жюльен" price={610} />
            <PizzaBlock title="Итальянцы в России" price={580} />
            <PizzaBlock title="По-домашнему" price={590} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
