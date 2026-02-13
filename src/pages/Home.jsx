import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать в мое портфолио!</p>
      
      <div className="personal-info">
        <h2>Привет, я Андреева Сахалита!</h2>
        
        <div className="info-item">
          <strong>Возраст:</strong> 20 лет
        </div>
        
        <div className="info-item">
          <strong>Телефон:</strong> 
          <a href="tel:+79679282131" style={{ color: '#550b14', textDecoration: 'none' }}>
            8-967-928-2131
          </a>
        </div>
        
        <div className="info-item">
          <strong>Email:</strong> 
          <a href="mailto:andrsahal@gmail.com" style={{ color: '#550b14', textDecoration: 'none' }}>
            andrsahal@gmail.com
          </a>
        </div>
        
        <div className="dream">
          Моя мечта: стать крутым веб-дизайнером!
        </div>
      </div>
    </div>
  )
}

export default Home