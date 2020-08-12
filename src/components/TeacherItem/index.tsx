import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGK3lf9TB6o-Q/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=Sygz1uiiPEhAhbo39UHD7hndoqtaICW7vAvnaU6lM2A" alt="Imagem qualquer"/>
            <div>
                <strong>Evelina</strong>
                <span>Engenharia da Computção</span>
            </div>
            </header>
                <p>
                    Evelina linda, legal e esperta!!!!
                    <br/><br/>
                    Evelina linda, legal e esperta!!!!
                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong> 80,00 </strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
        </article>);
}

export default TeacherItem;