import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import MapVisualization from '../components/MapVisualization';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Slider, Typography } from '@mui/material';
import styles from './MapPage.module.css';
import { useNavigate } from 'react-router-dom';

interface MarkerData {
  id: number;
  position: [number, number];
  name: string;
  population: number;
  competitors: number;
  revenue: number;
  score: number;
}

const MapPage: React.FC = () => {
  const [location, setLocation] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [difficulty, setDifficulty] = useState<number>(50);
  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);
  const navigate = useNavigate();

  const businessTypes = [
    '음식점',
    '카페',
    '소매업',
    '서비스업',
    '숙박업',
    '기타'
  ];

  const handleLogout = () => {
    // Implement logout functionality
  };

  return (
    <div className={styles.mapPageRoot}>
      <div className={styles.topBar}>
        <div className={styles.logo}>PointWise</div>
        <div className={styles.topRight}>
        </div>
      </div>
      <NavigationBar currentPage="map" />
      <div className={styles.content}>
        <div className={styles.leftPanel}>
          <div className={styles.section}>
            <Typography variant="h6" className={styles.sectionTitle}>위치 검색</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="주소를 입력하세요"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.section}>
            <Typography variant="h6" className={styles.sectionTitle}>업종 선택</Typography>
            <FormControl fullWidth className={styles.selectInput}>
              <InputLabel>업종</InputLabel>
              <Select
                value={businessType}
                label="업종"
                onChange={(e) => setBusinessType(e.target.value)}
              >
                {businessTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className={styles.section}>
            <Typography variant="h6" className={styles.sectionTitle}>입지 난이도</Typography>
            <Slider
              value={difficulty}
              onChange={(_, value) => setDifficulty(value as number)}
              valueLabelDisplay="auto"
              min={0}
              max={100}
              className={styles.slider}
            />
            <div className={styles.levelLabels}>
              <span>쉬움</span>
              <span>보통</span>
              <span>어려움</span>
            </div>
          </div>

          {selectedMarker && (
            <div className={styles.analysisSection}>
              <Typography variant="h6" className={styles.sectionTitle}>입지 분석</Typography>
              <div className={styles.analysisContent}>
                <Typography variant="subtitle1">{selectedMarker.name}</Typography>
                <Typography variant="body2">주변 인구: {selectedMarker.population}명</Typography>
                <Typography variant="body2">경쟁업체 수: {selectedMarker.competitors}개</Typography>
                <Typography variant="body2">평균 매출: {selectedMarker.revenue}만원</Typography>
                <Typography variant="body2">입지 점수: {selectedMarker.score}점</Typography>
              </div>
            </div>
          )}
        </div>

        <div className={styles.mapArea}>
          <MapVisualization />
        </div>
      </div>
    </div>
  );
};

export default MapPage; 