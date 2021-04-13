import { Form, Input, Radio, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { FormStyles } from './styles';
import { alphaCharacters }from 'utils/tools';


interface FormProps {
  handleForm: Function;
}

export const SearchJobForm: React.FC<FormProps> = ({handleForm}) => {

  const [fullTime, setFullTime] = useState(false)
  const [isDesktop, setDesktop] = useState(Boolean);
  const [formError, setFormError] = useState(String);
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
    const { description, location } = values;
    // validate characters a-z only
    
    if(alphaCharacters(description) === true && alphaCharacters(location) === true) {
      const payload = {...values, fullTime};
      // handleForm(payload)
    } else {
      setFormError("Input must be characters a-zA-Z");
    }
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
      <div
      className="form-error"
      >
        {formError ? <p>{formError}</p> : null}
      </div>
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
