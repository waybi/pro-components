import React from 'react';
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { BasicLayout, FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

export default () => {
  return (
    <div
      id="test-pro-layout"
      style={{
        transform: 'rotate(0)',
        overflowX: 'hidden',
      }}
    >
      <BasicLayout
        style={{
          maxHeight: '100vh',
        }}
        navTheme="light"
        breakpoint={false}
        defaultCollapsed
        pageTitleRender={false}
        menuDataRender={() => [
          {
            path: '/one',
            icon: <SmileOutlined />,
            name: '一级名称',
            children: [
              {
                path: 'two',
                name: '二级名称',
              },
            ],
          },
        ]}
        layout="mix"
        location={{
          pathname: '/one/two',
        }}
      >
        <PageContainer title="输入表单">
          <Card>
            <ProForm
              submitter={{
                render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
              }}
              onFinish={(values) => console.log(values)}
            >
              <ProForm.Group>
                <ProFormText
                  name="name"
                  label="签约客户名称"
                  tip="最长为 24 位"
                  placeholder="请输入名称"
                />
                <ProFormText name="company" label="我方公司名称" placeholder="请输入名称" />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormText name="contract" label="合同名称" placeholder="请输入名称" />
                <ProFormDateRangePicker name="contractTime" label="合同生效时间" />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormSelect
                  options={[
                    {
                      value: 'chapter',
                      label: '盖章后生效',
                    },
                  ]}
                  width="xs"
                  name="useMode"
                  label="合同约定生效方式"
                />
                <ProFormSelect
                  width="xs"
                  options={[
                    {
                      value: 'time',
                      label: '履行完终止',
                    },
                  ]}
                  name="unusedMode"
                  label="合同约定失效效方式"
                />
              </ProForm.Group>
              <ProFormText width="s" name="id" label="主合同编号" />
              <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
              <ProFormText
                width="xs"
                name="mangerName"
                disabled
                label="商务经理"
                initialValue="启途"
              />
              <ProForm.Group>
                <ProFormSelect
                  initialValue="money"
                  options={[
                    {
                      value: 'money',
                      label: '确认金额',
                    },
                  ]}
                  width="xs"
                  name="useMode"
                  label="金额类型"
                />
                <ProFormSelect
                  options={[
                    {
                      value: '6',
                      label: '6%',
                    },
                    {
                      value: '12',
                      label: '12%',
                    },
                  ]}
                  initialValue="6"
                  width="xs"
                  name="taxRate"
                  label="税率"
                />
                <ProFormRadio.Group
                  label="发票类型"
                  name="invoiceType"
                  initialValue="发票"
                  options={['发票', '普票', '无票']}
                />
              </ProForm.Group>
              <ProFormUploadButton
                extra="支持扩展名：.jpg .zip .doc .wps"
                label="倒签报备附件"
                name="file"
                title="上传文件"
              />
              <ProFormDigit width="xs" name="num" label="合同份数" initialValue={5} />
              <ProFormTextArea width="xl" label="合同备注说明" name="remark" />
            </ProForm>
          </Card>
        </PageContainer>
      </BasicLayout>
    </div>
  );
};
