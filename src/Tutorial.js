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
      { videoId: 'gQGI8yUN-a0', 'title': 'Что нового в версии 7.2.0 - Часть 1' },
      { videoId: '1f9Khi8rFfU', 'title': 'Что нового в версии 7.2.0 - Часть 2' },
      { videoId: 'JbY6mj4rGzA', 'title': 'Настройка интерфейса' },
      { videoId: 'TF_CrRPWcgo', 'title': 'Избранные модули' },
      { videoId: 'NDP7ndhrREU', 'title': 'Библиотека' },
      { videoId: 'YjLqFFEzgBM', 'title': 'Комментарии' },
      { videoId: '8AG9BTV0S1w', 'title': 'Словари' },
      { videoId: 'nZ7hp9Pcp5o', 'title': 'Лексикон Стронга' },
      { videoId: 'ldH1xl-yyVE', 'title': 'Поиск' },
      { videoId: '7snytd2jaow', 'title': 'Закладки' },
      { videoId: 'seJFXqL5Zgc', 'title': 'Тематические закладки' },
      { videoId: 'ytvG_Zsg7pU', 'title': 'Личные заметки' },
      { videoId: 'ITSmI1TWIMM', 'title': 'Загрузка сторонних модулей' },
      { videoId: 'CIS30PdygEo', 'title': 'Кнопки рабочей области' },
      { videoId: '27H1xBYNSOw', 'title': 'Рабочие области' },
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
