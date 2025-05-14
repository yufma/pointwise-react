import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MapVisualization: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // 지도 초기화
    const map = L.map(mapContainerRef.current, {
      center: [37.452, 126.655] as L.LatLngExpression,
      zoom: 17,
      zoomControl: true,
      preferCanvas: false,
      crs: L.CRS.EPSG3857
    });

    // OpenStreetMap 타일 레이어 추가
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 0,
      maxZoom: 19,
      maxNativeZoom: 19,
      noWrap: false,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abc',
      detectRetina: false,
      tms: false,
      opacity: 1
    }).addTo(map);

    // 마커 추가
    const locations = [
      {
        position: [37.4518, 126.655] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'orange',
          iconColor: 'white',
          icon: 'coffee',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: '/pointwise-react/popup_images/스타벅스.png'
      },
      {
        position: [37.4519, 126.6547] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'blue',
          iconColor: 'white',
          icon: 'utensils',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: '/pointwise-react/popup_images/육쌈식당.png'
      },
      {
        position: [37.4519, 126.6548] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'blue',
          iconColor: 'white',
          icon: 'utensils',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: '/pointwise-react/popup_images/커리야.png'
      },
      {
        position: [37.4517, 126.6552] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'blue',
          iconColor: 'white',
          icon: 'utensils',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: '/pointwise-react/popup_images/삼청당.png'
      }
    ];

    locations.forEach(({ position, icon, popupImage }) => {
      const marker = L.marker(position, { icon }).addTo(map);
      const popup = L.popup({ maxWidth: 300 });
      const popupContent = document.createElement('div');
      popupContent.style.width = '100%';
      popupContent.style.height = '100%';
      const img = document.createElement('img');
      img.src = popupImage;
      img.width = 300;
      popupContent.appendChild(img);
      popup.setContent(popupContent);
      marker.bindPopup(popup);
    });

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ 
        width: '100%',
        height: '100%',
        position: 'relative'
      }}
    />
  );
};

export default MapVisualization; 