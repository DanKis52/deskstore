import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('no-scroll'); // Disable scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('no-scroll'); // Enable scrolling
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="App-logo-text">MAX_STOL</Link>
            <button className="App-call-button">Заказать звонок</button>
          </nav>
        </header>
        <Banner />
        <Home openModal={openModal} />
        {selectedProduct && (
          <ProductModal product={selectedProduct} closeModal={closeModal} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

function Banner() {
  const scrollToCatalog = () => {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Мебель для дома и офиса <span style={{ color: '#ffc845' }}>в наличии</span></h1>
        <p>Отправим вам <strong>в течение 3-х дней</strong> после подтверждения и комплектации заказа</p>
        <button onClick={scrollToCatalog} className="banner-button">Перейти к товарам →</button>
      </div>
      <div className="banner-image">
        <img src="https://zamm.ru/upload/webp/iblock/785/psz6561mmub1aj1qls5ev58jgiukj4lz/2328_1000.webp" alt="Мебель для дома и офиса" />
      </div>
    </div>
  );
}

function Home({ openModal }) {
  return (
    <div>
      <div id="catalog">
        <h2>Столы для дома</h2>
        <div className="product-grid">
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол ACTIVE v2 (Тип 1) без аксессуаров"
            price="59 115 ₽"
            oldPrice="73 090 ₽"
            badge="Новинка"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол ACTIVE v2 (Тип 1) без аксессуаров",
                description: "Описание характеристик стола ACTIVE v2.",
              })
            }
          />
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол Linda (Тип 1) без аксессуаров"
            price="31 900 ₽"
            oldPrice="39 870 ₽"
            badge="Распродажа"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол Linda (Тип 1) без аксессуаров",
                description: "Описание характеристик стола Linda.",
              })
            }
          />
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол ACTIVE v2 (Тип 1) без аксессуаров"
            price="59 115 ₽"
            oldPrice="73 090 ₽"
            badge="Новинка"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол ACTIVE v2 (Тип 1) без аксессуаров",
                description: "Описание характеристик стола ACTIVE v2.",
              })
            }
          />
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол Linda (Тип 1) без аксессуаров"
            price="31 900 ₽"
            oldPrice="39 870 ₽"
            badge="Распродажа"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол Linda (Тип 1) без аксессуаров",
                description: "Описание характеристик стола Linda.",
              })
            }
          />
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол ACTIVE v2 (Тип 1) без аксессуаров"
            price="59 115 ₽"
            oldPrice="73 090 ₽"
            badge="Новинка"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол ACTIVE v2 (Тип 1) без аксессуаров",
                description: "Описание характеристик стола ACTIVE v2.",
              })
            }
          />
          <ProductCard
            image="https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp"
            title="Стол Linda (Тип 1) без аксессуаров"
            price="31 900 ₽"
            oldPrice="39 870 ₽"
            badge="Распродажа"
            onClick={() =>
              openModal({
                image: "https://zamm.ru/upload/webp/resize_cache/a07/cju1e3v3m0iieoi62coauycs28keotvx/588_588_2/26dacc9f_b8d3_11ef_9cb4_bf807ca6dd83_cd63dd26_b8d7_11ef_9cb4_bf807ca6dd83.resize1.webp",
                title: "Стол Linda (Тип 1) без аксессуаров",
                description: "Описание характеристик стола Linda.",
              })
            }
          />
          {/* Add more ProductCard components as needed */}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ image, title, price, oldPrice, badge, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <span className="product-badge">{badge}</span>
        <h3 className="product-title">{title}</h3>
        <div className="product-prices">
          <span className="product-price">{price}</span>
          {oldPrice && <span className="product-old-price">{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}

function ProductModal({ product, closeModal }) {
  return (
    <div className="modal-overlay show" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-icon" onClick={closeModal} aria-label="Close">
          &times;
        </button>
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-text">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="App-footer">
      <p>© 2023 MAX_STOL. Все права защищены.</p>
    </footer>
  );
}

export default App;
