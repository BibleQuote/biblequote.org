import React from 'react';

const Parallax = () => {
  return (
    <div className="parallax filter-gradient blue" data-color="blue">
      <div className= "container">
        <div className="row">
          <div className="col-md-7 hidden-sm hidden-xs">
            <div className="parallax-image">
              <img src="assets/img/bq/0-main.png" alt="Main screenshot" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="description text-center">
              <h2>BibleQuote 7</h2>
              <h5>Цитируй Библию уверенно.</h5>
              <br/>
              <h5>
                Программа BibleQuote представляет собой инструмент для исследования текстов Священного Писания, чтения литературы, поиска и анализа библейских терминов, составления проповедей, а также запоминания библейских стихов.
              </h5>
              <div className="buttons">
                <a href="/#download" className="btn btn-fill btn-neutral">
                  <i className="fa fa-download"></i> Загрузка
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
