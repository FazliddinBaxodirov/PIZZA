import React from 'react';
import { Segmented } from 'antd';
import './Segment.css';

const PriceSegment: React.FC = () => (
  <Segmented
    className="custom-segmented2 p-[5px]" 
    options={["26 см.","30 см.","40 см."]}
  />
);

export default PriceSegment;
