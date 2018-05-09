import React, { Component } from 'react';
import './App.css'
import index01 from './img/index-violet.png';
import recherche from './img/recherche.svg';
import chat from './img/chat.svg';
import connect from './img/connect.svg';
import NavbarMod from './NavbarMod';

class App extends Component {
  render() {
    return (
        <div>
        <header>
            <NavbarMod />
            <div className="container-fluid">
                <div className="row top-container">
                    <img src={index01} alt="" className="img-index"/>
                    <button className="btn btn-join">Inscrivez-vous</button>
                </div>
            </div>
        </header>
        <div className="container-fluid" id="page-container">
                <div className="row row-etapes">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 p-4 text-center">
                                <img className="forme-hexa" src={recherche} alt=""/>
                                <h4 className="text-white mt-3 step-h4">Etape01</h4>
                                <div className="border-conteneur">
                                    <div className="border-bottom"></div>
                                </div>
                                <p className="text-white">
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                </p>
                            </div>
                            <div className="col-12 col-md-4 p-4 text-center">
                                <img className="forme-hexa" src={chat} alt=""/>
                                <h4 className="text-white mt-3 step-h4">Etape02</h4>
                                <div className="border-conteneur">
                                    <div className="border-bottom"></div>
                                </div>
                                <p className="text-white">
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                </p>
                            </div>
                            <div className="col-12 col-md-4 p-4 text-center">
                                <img className="forme-hexa" src={connect} alt=""/>
                                <h4 className="text-white mt-3 step-h4">Etape01</h4>
                                <div className="border-conteneur">
                                    <div className="border-bottom"></div>
                                </div>
                                <p className="text-white">
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
  }
}

export default App;
