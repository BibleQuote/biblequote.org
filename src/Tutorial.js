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
      { videoId: 'YAgmBetFwM8', 'title': 'Библиотека' },
      { videoId: 'j1xU_Bm_Yvk', 'title': 'Комментарии' },
      { videoId: 'TVi7RacX79o', 'title': 'Словари' },
      { videoId: 'gVenm4bdNTI', 'title': 'Лексикон Стронга' },
      { videoId: 'gOU-jJUK7V0', 'title': 'Вкладки модулей' },
      { videoId: 'HE3ni83OW9Q', 'title': 'Рабочие области' },
      { videoId: 'L3JHUQx9bq4', 'title': 'Параллельные места' },
      { videoId: 'OE-GcRISKX4', 'title': 'Поиск и закладки' },
      { videoId: 'TijHtYpUIuI', 'title': 'Личные заметки и распознавание библейских ссылок' },
      { videoId: 'AD2s5iUJPR4', 'title': 'Загрузка программы и дополнительных модулей' },
      { videoId: 'Q50DjTwl1Ec', 'title': 'Из чего состоит модуль - Часть 1' },
      { videoId: 'GvOl2dup98k', 'title': 'Из чего состоит модуль - Часть 2' },
      { videoId: 'GWpx-EaDvNk', 'title': 'Из чего состоит модуль - Словари' },
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
