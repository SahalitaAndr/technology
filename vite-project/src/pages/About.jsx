import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-[#550b14]">Обо мне</h1>

      <div className="bg-[#f8fbf7] border-4 border-[#550b14] p-8 my-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold">Андреева Сахалита</h2>
        <p className="text-[#7c6961] text-xl mt-2">
          <strong>20 лет</strong> | Начинающий веб-дизайнер
        </p>

        <h3 className="text-[#550b14] mt-8 text-xl font-semibold">Мои навыки:</h3>
        <ul className="list-none grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-4">
          <li className="bg-[#cbc0b2] p-3 rounded-3xl text-center text-[#550b14] font-medium">
            HTML/CSS
          </li>
          <li className="bg-[#cbc0b2] p-3 rounded-3xl text-center text-[#550b14] font-medium">
            JavaScript
          </li>
          <li className="bg-[#cbc0b2] p-3 rounded-3xl text-center text-[#550b14] font-medium">
            C++/C#
          </li>
          <li className="bg-[#cbc0b2] p-3 rounded-3xl text-center text-[#550b14] font-medium">
            Веб-дизайн
          </li>
        </ul>

        <div className="text-2xl italic text-[#7c6961] bg-[#cbc0b2] p-6 rounded-3xl text-center mt-8">
          Цель: Создавать красивые и удобные сайты, которые вдохновляют людей!
        </div>
      </div>
    </div>
  );
};

export default About;