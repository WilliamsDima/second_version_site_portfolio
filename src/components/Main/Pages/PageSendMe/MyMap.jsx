import React from 'react';
import './pageSendMe.scss';
import { YMaps, Map } from 'react-yandex-maps';

const MapYAn = () => (
  <YMaps>
    <div className='map-yandex'>
      <Map width='100%' height='50vh' defaultState={{ center: [57.626559, 39.893813], zoom: 8, behaviors: ['default', 'scrollZoom'], controls: [], }} />
    </div>
  </YMaps>
);


const MyMap = (props) => {

    return (
        <div className="map">
        
            <div className="map__text">
                <p>Дмитрий Леметин</p>
                <p>Брейтовский р-он, Ярославская обл.</p>
                <p><span>@:</span>oxpa97@mail.ru</p>
            </div>
            
            <MapYAn />
        </div>
    )
}

export default MyMap;