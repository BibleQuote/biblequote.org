import ReactGA from 'react-ga';
import YouTube from 'react-youtube';
import React, { Component } from 'react';

class Tutorial extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview('/tutorial');
  }

  render() {
    const videos = [
    //   { videoId: 'AD2s5iUJPR4', title: 'Загрузка программы и дополнительных модулей' },
    //   { videoId: 'QK5WwMsr6Gw', title: 'Настройка программы и рабочие области' },
    //   { videoId: 'I4bXkeROFcU', title: 'Инструменты работы' },
    //   { videoId: 'TijHtYpUIuI', title: 'Личные заметки и распознавание библейских ссылок' },
      { videoId: 'FaB5mLSYuwI', title: 'Библиотека' },
      { videoId: 'HE3ni83OW9Q', title: 'Рабочие области' },
      { videoId: 'TWo4ZaeIIfo', title: 'Словари' },
      { videoId: 'L3JHUQx9bq4', title: 'Параллельные места' },
      { videoId: '2IU6niVa0Oo', title: 'Лексиконы Стронга' },
      { videoId: 'OE-GcRISKX4', title: 'Поиск и закладки' },
      { videoId: 'TijHtYpUIuI', title: 'Личные заметки и распознавание библейских ссылок' },
    ];

    return (
      <div className="Tutorial">
        <div className="parallax-small filter-gradient blue" data-color="blue">
        </div>
        <div className="section section-clients">
          <div className="container text-center">
            {
              videos.map((video, index) => (
                <div key={index}>
                  <h4>Урок {index + 1}: {video.title}</h4>
                  <YouTube videoId={video.videoId} opts={{}} onReady={this._onReady} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;
