import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.awesome-markers';
import 'leaflet.awesome-markers/dist/leaflet.awesome-markers.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// 이미지 import
import starbucksImage from '../assets/popup_images/스타벅스.png';
import yukssamImage from '../assets/popup_images/육쌈식당.png';
import curryImage from '../assets/popup_images/커리야.png';
import samcheongImage from '../assets/popup_images/삼청당.png';
import gs25Image from '../assets/popup_images/GS25인하대후문점.png';
import jjigoImage from '../assets/popup_images/지지고.png';

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
        popupImage: starbucksImage
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
        popupImage: yukssamImage
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
        popupImage: curryImage
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
        popupImage: samcheongImage
      },
      {
        position: [37.4516, 126.6551] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'green',
          iconColor: 'white',
          icon: 'shopping-bag',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: gs25Image
      },
      {
        position: [37.4518, 126.6549] as L.LatLngExpression,
        icon: L.AwesomeMarkers.icon({
          markerColor: 'blue',
          iconColor: 'white',
          icon: 'utensils',
          prefix: 'fa',
          extraClasses: 'fa-rotate-0'
        }),
        popupImage: jjigoImage
      }
    ];

    locations.forEach(({ position, icon, popupImage }) => {
      const marker = L.marker(position, { icon }).addTo(map);
      const popup = L.popup({ 
        maxWidth: 200,
        maxHeight: 200,
        autoPan: true,
        closeButton: true,
        className: 'custom-popup',
        autoClose: true
      });
      
      const popupContent = document.createElement('div');
      popupContent.style.cssText = `
        width: 200px;
        height: 200px;
        padding: 8px;
        background-color: white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        box-sizing: border-box;
      `;
      
      const img = document.createElement('img');
      img.src = popupImage;
      img.style.cssText = `
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 4px;
        display: block;
        box-sizing: border-box;
        overflow: hidden;
      `;
      
      // 이미지 로딩 에러 처리
      img.onerror = () => {
        const errorDiv = document.createElement('div');
        errorDiv.style.padding = '20px';
        errorDiv.style.textAlign = 'center';
        errorDiv.style.color = '#666';
        errorDiv.innerHTML = '이미지를 불러올 수 없습니다';
        popupContent.innerHTML = '';
        popupContent.appendChild(errorDiv);
        console.error(`이미지를 불러올 수 없습니다: ${popupImage}`);
      };
      
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