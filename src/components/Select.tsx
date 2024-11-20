import React from 'react';
import { Select } from 'antd';



const CustomSelect: React.FC = () => (
  <Select
    className="w-[300px]"
    placeholder="Сортировка по:"
    optionFilterProp="label"
    options={[
      {
        value: 'по алфавиту',
        label: 'по алфавиту',
      },
      {
        value: 'по цене',
        label: 'по цене',
      },
    ]}
  />
);

export default CustomSelect;