import { Form, Input, Radio, Button } from 'antd';
import radio from 'antd/lib/radio';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import React, { useState, useEffect } from 'react';
import { FormStyles } from './styles';


interface FormProps {
  handleForm: Function;
}

export const SearchJobForm: React.FC<FormProps> = ({handleForm}) => {

  const [radio, setRadio] = useState(false)
  const [isDesktop, setDesktop] = useState(Boolean);
  const [form] = Form.useForm();

  const updateMedia = () => {
    setDesktop(window.innerWidth <= 1200);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  
  const handleSubmit = async () => {
    handleForm();
  };



  return (
      <>
      <FormStyles>
      <Form
      form={form}
      onFinish={handleSubmit}
      hidden={isDesktop}
      className='form-container'
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      size='small'
    >
      <Form.Item 
      className='form-item'>
        <p>A keyword such as, “python” or “ruby”</p>
        <Input 
        className='form-input'
        placeholder="Description"
        size='middle' />
      </Form.Item>
      <Form.Item 
      className='form-item'>
        <p>Optional: A city name or zip code</p>
        <Input 
        className='form-input' 
        size='middle'
        placeholder="Location"
        />
      </Form.Item>
      <div className='radio-submit-container'>      
          <Form.Item 
          className='form-item'
          >
          <Radio
          className='radio'
          checked={radio}
          onClick={() => setRadio(!radio)}
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
