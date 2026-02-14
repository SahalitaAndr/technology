import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-[#550b14]">Главная страница</h1>
      <p className="text-[#7c6961] text-xl mb-4">Добро пожаловать в мое портфолио!</p>

      <div className="bg-[#f8fbf7] border-4 border-[#550b14] p-8 my-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Привет, я Андреева Сахалита!</h2>

        <div className="flex items-center gap-4 my-4 text-[#550b14] text-lg">
          <strong className="text-[#7c6961] min-w-[100px] font-semibold">Возраст:</strong>
          <span>20 лет</span>
        </div>

        <div className="flex items-center gap-4 my-4 text-[#550b14] text-lg">
          <strong className="text-[#7c6961] min-w-[100px] font-semibold">Телефон:</strong>
          <a href="tel:+79679282131" className="text-[#550b14] no-underline">
            8-967-928-2131
          </a>
        </div>

        <div className="flex items-center gap-4 my-4 text-[#550b14] text-lg">
          <strong className="text-[#7c6961] min-w-[100px] font-semibold">Email:</strong>
          <a href="mailto:andrsahal@gmail.com" className="text-[#550b14] no-underline">
            andrsahal@gmail.com
          </a>
        </div>

        <div className="text-2xl italic text-[#7c6961] bg-[#cbc0b2] p-6 rounded-3xl text-center mt-8">
          Моя мечта: стать крутым веб-дизайнером!
        </div>
      </div>
    </div>
  );
};

export default Home;