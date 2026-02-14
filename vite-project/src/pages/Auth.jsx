import React from 'react';

const Auth = () => {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-center text-3xl font-bold text-[#550b14]">Вход / Регистрация</h1>

      <form className="bg-[#f8fbf7] p-8 rounded-3xl shadow-2xl border-2 border-[#cbc0b2] mt-8">
        <div className="mb-6">
          <label className="block mb-2 text-[#550b14] font-semibold ml-2">Email</label>
          <input
            type="email"
            placeholder="andrsahal@gmail.com"
            className="w-full px-4 py-3 border-2 border-[#cbc0b2] rounded-full focus:border-[#550b14] focus:ring-2 focus:ring-[#550b14] focus:ring-opacity-30 outline-none transition"
          />
        </div>

        <div className="mb-8">
          <label className="block mb-2 text-[#550b14] font-semibold ml-2">Пароль</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 border-2 border-[#cbc0b2] rounded-full focus:border-[#550b14] focus:ring-2 focus:ring-[#550b14] focus:ring-opacity-30 outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full text-lg py-3 px-6 bg-[#550b14] text-[#f8fbf7] rounded-full font-semibold border-2 border-[#550b14] hover:bg-[#7c6961] hover:border-[#7c6961] hover:scale-105 transition-all"
        >
          Войти
        </button>

        <p className="text-center mt-6 text-[#7c6961]">
          Нет аккаунта?{' '}
          <a href="#" className="text-[#550b14] font-semibold">
            Зарегистрироваться
          </a>
        </p>
      </form>
    </div>
  );
};

export default Auth;