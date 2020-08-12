import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string; //para não ser obrigatorio seria: title?: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => { //preciso colocar component em formato de const para poder atribuir props ao component
    return (
    <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
        </div>
        <div className="header-content">
            <strong> {props.title }</strong>
        </div>
        {props.children}
    </header>
    );
}

export default PageHeader;