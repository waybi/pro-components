import React, { useContext } from 'react';
import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import { ConfigContext } from 'antd/lib/config-provider';
import { useIntl } from '@ant-design/pro-provider';
import './index.less';

export interface FieldLabelProps {
  label?: React.ReactNode;
  value?: any;
  disabled?: boolean;
  onClear?: () => void;
  size?: SizeType;
  ellipsis?: boolean;
  placeholder?: React.ReactNode;
  expanded?: boolean;
  className?: string;
  formatter?: (value: any) => string;
  style?: React.CSSProperties;
  bordered?: boolean;
}

const FieldLabel: React.FC<FieldLabelProps> = (props) => {
  const {
    label,
    onClear,
    value,
    size = 'middle',
    disabled,
    ellipsis,
    placeholder,
    className,
    style,
    formatter,
    bordered,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('pro-core-field-label');
  const intl = useIntl();

  const getTextByValue = (
    aLabel?: React.ReactNode | React.ReactNode[],
    aValue?: string | string[],
  ): React.ReactNode => {
    if (
      aValue !== undefined &&
      aValue !== null &&
      aValue !== '' &&
      (!Array.isArray(aValue) || aValue.length)
    ) {
      let str: string;
      if (formatter) {
        str = formatter(aValue);
      } else {
        str = Array.isArray(aValue) ? aValue.join(',') : String(aValue);
      }
      const prefix = aLabel ? (
        <>
          {aLabel}
          {': '}
        </>
      ) : (
        ''
      );
      if (!ellipsis) {
        return (
          <span>
            {prefix}
            {str}
          </span>
        );
      }
      const tail =
        str.length > 16
          ? `...${
              Array.isArray(aValue) && aValue.length > 1
                ? `${aValue.length}${intl.getMessage('form.lightFilter.itemUnit', '项')}`
                : ''
            }`
          : '';
      return (
        <span title={str}>
          {prefix}
          {str.substr(0, 16)}
          {tail}
        </span>
      );
    }
    return placeholder || aLabel;
  };

  return (
    <span
      className={classNames(
        prefixCls,
        `${prefixCls}-${size}`,
        {
          [`${prefixCls}-active`]: !!value,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-bordered`]: bordered,
        },
        className,
      )}
      style={style}
    >
      {getTextByValue(label, value)}
      {value && (
        <CloseOutlined
          className={classNames(`${prefixCls}-icon`, `${prefixCls}-close`)}
          onClick={(e) => {
            if (onClear && !disabled) {
              onClear();
            }
            e.stopPropagation();
          }}
        />
      )}
      <DownOutlined className={classNames(`${prefixCls}-icon`, `${prefixCls}-arrow`)} />
    </span>
  );
};

export default FieldLabel;
