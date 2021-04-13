import { Form, Input, Radio, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { FormStyles } from './styles';


interface FormProps {
  handleForm: Function;
}

export const SearchJobForm: React.FC<FormProps> = ({handleForm}) => {

  const [fullTime, setFullTime] = useState(false)
  const [isDesktop, setDesktop] = useState(Boolean);
  const [form] = Form.useForm();


  const updateMedia = () => {
    setDesktop(window.innerWidth <= 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  

  const onFinish = (values: any) => {
    event.preventDefault();
    console.log('Success:', values);
    const payload = {...values, fullTime};
    console.log(payload)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
    <FormStyles>
      <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hidden={isDesktop}
      className='form-container'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size='small'>
      <Form.Item 
      name="description"
      className='form-item'>
        <Input 
        type="text"
        className='form-input'
        placeholder="Keyword i.e: 'React'"
        size='middle' 
      />
      </Form.Item>
      <Form.Item 
      name="location"
      className='form-item'>
        <Input 
        type="text"
        className='form-input' 
        size='middle'
        placeholder="City"
        />
      </Form.Item>
      <div className='radio-submit-container'>      
          <Form.Item 
          className='form-item'
          >
          <Radio
          className='radio'
          checked={fullTime}
          onClick={() => setFullTime(!fullTime)}
          >Full time
          </Radio>
          </Form.Item>
          <Form.Item 
          className='form-item'>
          <Button
          htmlType="submit"
          type="primary"
          shape="round"
          >Search</Button>
          </Form.Item>
        </div>
      </Form>
    </FormStyles>
    </>
  )
};
