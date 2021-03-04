import React, { useState } from 'react';
import { StyledLeftView } from './styles';
import { SaveOutlined } from '@ant-design/icons'
import {
    Form,
    Input,
    Radio,
    Button
  } from 'antd';

interface LeftViewProps {}
export const LeftView: React.FC<LeftViewProps> = ({}) => { 
    const [radio, setRadio] = useState(false)

    return (
        <StyledLeftView>
        <h2
        className='title'
        > StriveDash
        </h2>
        <div className='saved-jobs-container'>
        <SaveOutlined className='saved-jobs-icon'/>
        <a>Saved jobs</a>
        </div>
        <Form
        className='form-container'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size='small'
      >
        <Form.Item 
        className='form-item'>
          <p>Description</p>
          <Input 
          className='form-input'
          placeholder='A keyword such as, “python” or “ruby”'
          size='middle' />
        </Form.Item>
        <Form.Item 
        className='form-item'>
          <p>Location</p>
          <Input 
          className='form-input' 
          size='middle'
          placeholder='A city name or zip code'
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
            type='primary'
            shape='round'
            >Search</Button>
            </Form.Item>
        </div>
      </Form>
        </StyledLeftView>
    )
}