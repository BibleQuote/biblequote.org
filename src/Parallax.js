import ReactGA from 'react-ga';
import React, { Component } from 'react';

class Parallax extends Component {
  constructor(props) {
    super();

    this.downloadClick = this.downloadClick.bind();
  }

  downloadClick() {
    ReactGA.event({
      category: 'Application',
      action: 'Download'
    });
  }

  render() {
    return (
      <div className="parallax filter-gradient blue" data-color="blue">
        <div className= "container">
          <div className="row">
            <div className="col-md-7  hidden-xs">
              <div className="parallax-image">
                <img src="assets/img/showcases/showcase-2/mac1.png"/>
              </div>
            </div>
            <div className="col-md-5">
              <div className="description text-center">
                <h2>BibleQuote 7</h2>
                <h5>Цитируй Библию уверенно.</h5>
                <br/>
                <h5>
                  Программа BibleQuote пользуется популярностью среди христиан, особенно для быстрого поиска и цитирования библейских стихов, а также она имеет уникальную возможность для сравнения текстов разных переводов Библии.
                </h5>
                {/* <div className="buttons">
                  <a href="#" className="btn btn-fill btn-neutral" onClick={this.downloadClick}>
                    <i className="fa fa-download"></i> Загрузить
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
