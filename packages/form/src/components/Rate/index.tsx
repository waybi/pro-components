import React from 'react';
import { Rate } from 'antd';
import { RateProps } from 'antd/lib/rate';
import { ProFormItemProps } from '../../interface';
import { createField } from '../../BaseForm';

/**
 * 文本选择组件
 * @param
 */
const ProFormRate: React.ForwardRefRenderFunction<any, ProFormItemProps<RateProps>> = (
  { fieldProps },
  ref,
) => {
  return <Rate {...fieldProps} ref={ref} />;
};

export default createField<ProFormItemProps<RateProps>>(React.forwardRef(ProFormRate));
