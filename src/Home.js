import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Parallax from './Parallax';
import ModalImage from 'react-modal-image'

const APP_VERSION = '7.5.0';
const APP_BUILD = '900';
const APP_SIZE = '83';

class Home extends Component {
  constructor(props) {
    super();
    this.downloadClick = this.downloadClick.bind();
  }

  downloadClick() {
    ReactGA.event({
      category: 'Application',
      action: 'Download',
      label: `v${APP_VERSION}.${APP_BUILD}`,
    });
  }

  render() {
    const host = 'https://biblequote.sfo2.digitaloceanspaces.com';
    const downloadUrl = `${host}/BibleQuote_${APP_VERSION}.${APP_BUILD}.zip`;

    return (
      <div className="Home">
        <Parallax />
        {/* <div className="section section-gray section-clients">
          <div className="container text-center">
            <h4 className="header-text">Happy Customers</h4>
            <p>
              Designing in Photoshop became a trend. Change, save, redo. Change, save, redo. After searching thoroughly for an alternative to create something great, it was clear that there weren’t any great solutions or intentions by anyone to create a pixel-perfect template for anyone to use. We don't do pixel-perfect, we focus on client-perfect projects.<br/>
            </p>
            <div className="logos">
              <ul className="list-unstyled">
                  <li ><img src="assets/img/logos/adobe.png"/></li>
                  <li ><img src="assets/img/logos/zendesk.png"/></li>
                  <li ><img src="assets/img/logos/ebay.png"/></li>
                  <li ><img src="assets/img/logos/evernote.png"/></li>
                  <li ><img src="assets/img/logos/airbnb.png"/></li>
                  <li ><img src="assets/img/logos/zappos.png"/></li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="section section-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="description">
                  <a href="https://www.teleios.bible">
                    <img style={{ height: 'auto', maxWidth: '100%' }} src="assets/img/teleios/teleios-banner.png"  alt="Teleios Bible banner" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="section section-demo">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="demo-image">
                  <ModalImage
                    className="img-responsive"
                    small={"assets/img/bq/1-workspaces.png"}
                    medium={"assets/img/bq/1-workspaces.png"}
                    alt="Рабочие области"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1 info-text">
                <h4 className="header-text">Рабочие области</h4>
                <p>
                  При помощи рабочих областей программа позволяет пользователю гибко настраивать графический интерфейс для выполнения различных задач:
                </p>
                <ul>
                  <li>сравнение нескольких текстов Священного Писания</li>
                  <li>чтение библейского текста и комментариев</li>
                  <li>исследование библейских терминов при помощи словарей</li>
                  <li>подготовка проповедей</li>
                  <li>запоминание библейских стихов</li>
                </ul>
                <p>
                  Рабочие области, а также содержащиеся в них вкладки, возможно перемещать при помощи <a target="blank" href="https://ru.wikipedia.org/wiki/Drag-and-drop">drag-and-drop</a>.
                </p>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-6 col-md-push-6">
                <div className="demo-image">
                  <ModalImage
                    className="img-responsive"
                    small={"assets/img/bq/2-library.png"}
                    medium={"assets/img/bq/2-library.png"}
                    alt="Библиотека модулей"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
              <div className="col-md-5 col-md-pull-6 info-text">
                <h4 className="header-text">Библиотека модулей</h4>
                <p>
                  Библиотека модулей содержит источники информации доступные в программе и предназначена для быстрого поиска и открытия необходимых пользователю ресурсов. Библиотека отображает модули четырех типов:
                </p>
                <ul>
                  <li>Переводы Священного Писания</li>
                  <li>Комментарии к книгам Священного Писания</li>
                  <li>Словари</li>
                  <li>Книги</li>
                </ul>
                <p>
                  Библиотеку можно расширять, загрузив необходимые модули из <Link to="/repository">Репозитория модулей</Link>.
                </p>
              </div>
            </div>
            <br/>
            <div className="row">
              <div className="col-md-6">
                <div className="demo-image">
                  <ModalImage
                    className="img-responsive"
                    small={"assets/img/bq/3-dictionaries.png"}
                    medium={"assets/img/bq/3-dictionaries.png"}
                    alt="Словари"
                    hideDownload={true}
                    hideZoom={true}
                  />
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1 info-text">
                <h4 className="header-text">Модули MyBible</h4>
                <p>
                  Начиная с версии 7.1, в BibleQuote появилась возможность открывать словари в фомате <a href="https://mybible.zone/">MyBible</a>.
                </p>
                <p>
                  В версии 7.3 эта возможность была обновлена и расширена и данный момент программа позволяет работать с модулями в формате <a href="https://mybible.zone/">MyBible</a> трех типов:
                </p>
                <ul>
                  <li>Переводы Священного Писания</li>
                  <li>Комментарии</li>
                  <li>Словари</li>
                </ul>
                <p>
                  Также BibleQuote 7.3 позволяет загружать модули из <a href="https://mybible.zone/">Репозитория MyBible</a> напрямую из программы.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section section-features">
          <div className="container">
            <h4 className="header-text text-center">Контакты</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-network"></i>
                  </div>
                  <div className="text">
                    <h4>Facebook</h4>
                    <p>
                      <a href="https://www.facebook.com/groups/biblequote.interbiblia" target="blank">BibleQuote</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-mail"></i>
                  </div>
                  <div className="text">
                    <h4>Email:</h4>
                    <p>
                      <a href="mailto:biblequoteapp@gmail.com">biblequoteapp@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-notebook"></i>
                  </div>
                  <div className="text">
                    <h4>Богословский клуб Esxatos</h4>
                    <p>
                    <a href="http://www.esxatos.com/modbq" target="blank">Страница BibleQuote</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section section-features">
          <div className="container">
            <h4 className="header-text text-center">Features</h4>
            <div className="row">
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-pen"></i>
                  </div>
                  <div className="text">
                    <h4>Client-Perfect Draws</h4>
                    <p>All appointments sync with your Google calendar so your availability is always up to date. See your schedule at a glance from any device.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-look"></i>
                  </div>
                  <h4>Retina Ready</h4>
                  <p>Automatic text and email reminders make sure customers always remember their upcoming appointments.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-like"></i>
                  </div>
                  <h4>You'll love it</h4>
                  <p>You'll Love It, you will find dining room sets, couches, chairs and pre-owned furniture of all kinds as well as lamps, rugs and accessories.</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card card-blue">
                  <div className="icon">
                    <i className="pe-7s-piggy"></i>
                  </div>
                  <h4>Big Discount</h4>
                  <p>Take payments and run your business on the go, in your store and then see how it all adds up with analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="section section-testimonial">
          <div className="container">
            <h4 className="header-text text-center">What people think</h4>
            <div id="carousel-example-generic" className="carousel fade" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="item">
                  <div className="mask">§
                    <img src="assets/img/faces/face-4.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Jay Z, Producer</p>
                    <h3>"I absolutely love your app! It's truly amazing and looks awesome!"</h3>
                  </div>
                </div>
                <div className="item active">
                  <div className="mask">
                    <img src="assets/img/faces/face-3.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Drake, Artist</p>
                    <h3>"This is one of the most awesome apps I've ever seen! Wish you luck Creative Tim!"</h3>
                  </div>
                </div>
                <div className="item">
                  <div className="mask">
                    <img src="assets/img/faces/face-2.jpg" />
                  </div>
                  <div className="carousel-testimonial-caption">
                    <p>Rick Ross, Musician</p>
                    <h3>"Loving this! Just picked it up the other day. Thank you for the work you put into this."</h3>
                  </div>
                </div>
              </div>
              <ol className="carousel-indicators carousel-indicators-blue">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </div> */}
        <div id="download" className="section section-no-padding">
          <div className="parallax filter-gradient blue" data-color="blue">
            <div className="parallax-background">
              <img className="parallax-background-image" src="assets/img/bq/bg2.jpg" alt="bg2" />
            </div>
            <div className="info">
              <h1>Версия {APP_VERSION}</h1>
              <p>Сборка {APP_BUILD}</p>
              <a href={downloadUrl}
                className="btn btn-neutral btn-lg btn-fill"
                onClick={this.downloadClick}>
                <i className="fa fa-download" /> Загрузить ({APP_SIZE} Мб)
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
