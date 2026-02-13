import React from 'react'

const About = () => {
  return (
    <div>
      <h1>Обо мне</h1>
      
      <div className="personal-info">
        <h2>Андреева Сахалита</h2>
        <p><strong>20 лет</strong> | Начинающий веб-дизайнер</p>
        
        <h3 style={{ color: '#550b14', marginTop: '2rem' }}>Мои навыки:</h3>
        <ul style={{ 
          listStyle: 'none', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          marginTop: '1rem'
        }}>
          <li style={{ 
            backgroundColor: '#cbc0b2', 
            padding: '0.8rem', 
            borderRadius: '20px',
            textAlign: 'center',
            color: '#550b14',
            fontWeight: '500'
          }}>HTML/CSS</li>
          <li style={{ 
            backgroundColor: '#cbc0b2', 
            padding: '0.8rem', 
            borderRadius: '20px',
            textAlign: 'center',
            color: '#550b14',
            fontWeight: '500'
          }}>JavaScript</li>
          <li style={{ 
            backgroundColor: '#cbc0b2', 
            padding: '0.8rem', 
            borderRadius: '20px',
            textAlign: 'center',
            color: '#550b14',
            fontWeight: '500'
          }}>C++/C#</li>
          <li style={{ 
            backgroundColor: '#cbc0b2', 
            padding: '0.8rem', 
            borderRadius: '20px',
            textAlign: 'center',
            color: '#550b14',
            fontWeight: '500'
          }}>Веб-дизайн</li>
        </ul>
        
        <div className="dream" style={{ marginTop: '2rem' }}>
          Цель: Создавать красивые и удобные сайты, которые вдохновляют людей!
        </div>
      </div>
    </div>
  );
};

export default About;