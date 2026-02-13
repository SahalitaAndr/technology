import React from 'react'

const Auth = () => {
  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Вход / Регистрация</h1>
      
      <form style={{ 
        backgroundColor: '#f8fbf7',
        padding: '2rem',
        borderRadius: '30px',
        boxShadow: '0 20px 40px rgba(85, 11, 20, 0.1)',
        border: '2px solid #cbc0b2',
        marginTop: '2rem'
      }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            color: '#550b14',
            fontWeight: '600',
            marginLeft: '0.5rem'
          }}>
            Email
          </label>
          <input 
            type="email" 
            placeholder="andrsahal@gmail.com" 
            style={{ width: '100%' }}
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem', 
            color: '#550b14',
            fontWeight: '600',
            marginLeft: '0.5rem'
          }}>
            Пароль
          </label>
          <input 
            type="password" 
            placeholder="••••••••" 
            style={{ width: '100%' }}
          />
        </div>
        
        <button style={{ width: '100%', fontSize: '1.2rem' }}>
          Войти
        </button>
        
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem',
          color: '#7c6961'
        }}>
          Нет аккаунта? <a href="#" style={{ color: '#550b14', fontWeight: '600' }}>Зарегистрироваться</a>
        </p>
      </form>
    </div>
  );
};

export default Auth;