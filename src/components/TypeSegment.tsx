import React from 'react';
import { Segmented } from 'antd';
import './Segment.css';

const TypeSegment: React.FC = () => (
  <Segmented
    className="custom-segmented p-[5px]" 
    options={["тонкое","традиционное"]}
  />
);

export default TypeSegment;
