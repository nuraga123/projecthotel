import React from "react";
import './TransparentAnimation.css'

function TransparentAnimation() {
  return (
    <div className="Tr__position">
    <div className="wr">
      <h1 className="h1Animation">График работы</h1>
      <div className="img2">
        <img src="https://i.pinimg.com/originals/18/58/da/1858da628374f4a4a38a88dd47aac2de.jpg" alt=""></img>
      </div>
      <div className="some-text">
        <p className="p">Рабочий день</p>
        <p className="some-text-small">С 10:00 до 20:00</p>
      </div>
    </div>
    <p className="Tr__text">
      Дресс-код – это не униформа, 
      а свод определенных деловых правил,
      которым необходимо следовать на работе.
      Унифицированного списка требований не существует, 
      каждая компания разрабатывает свои правила
    </p>
    </div>
    
  );
}

export default TransparentAnimation