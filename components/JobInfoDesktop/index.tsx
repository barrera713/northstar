import React, { useState } from 'react';
import { Button } from 'antd';
import { JobInfoStyles } from './styles';

interface JobInfoProps {
    show?: Boolean;
    close?: Function;
}

export const JobInfoDesktop: React.FC<JobInfoProps> = (props) => {

    return (<JobInfoStyles {...props}>
        <div className="main-container">  
            <div>
                <div className='info-header'>
                <img src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazJiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4befa4f6603e069d3d64380dfbf7b42b2af3e4d4/Round_Logo1%20(1).png" />
                <h3>Position Name</h3>
                </div>
                <div className='company-and-location'>
                    <p>Company name</p>
                    <p>Location</p>
                </div>
                <div className='overview-container'>
                    <h1>The Opportunity</h1>
                <p>Shorthand is a growing company that provides a digital publishing platform to many of the world's best known publishers, brands, not-for-profits, and universities. With customers on every continent (except Antarctica!), there's never been a more exciting time to join Shorthand. Our company has the rare distinction in this era of money-burning startups of being both investor-backed and comfortably profitable. We're a small team of geeks with art and heart, and a high bar for quality.</p>
                <p>To deliver our magic to customers and their audiences, we build software that is scalable, flexible, reliable and as simple as possible but no simpler.</p>
                <h1>The Role</h1>
                <p>We tend to do things a little differently at Shorthand. For one thing, we're a small, fully remote team distributed around the world and have been for over 3 years, meaning we have established systems and processes in place. For this role we'll happily take applications from anywhere in the United States.</p>
                <p>This role will share responsibility for designing, engineering and scaling our backend systems and services.</p>
                <p>We are looking for someone who:</p>
                <ul>
                <li>
                <p>Is whip smart, as demonstrated by career achievements and / or school / college results</p>
                </li>
                <li>
                <p>Has good knowledge of cloud-based web architectures.</p>
                </li>
                <li>
                <p>Experienced in system design and distributed computing.</p>
                </li>
                <li>
                <p>Has a wide range of experience and expertise across languages, frameworks and approaches such as Javascript, Typescript, and ReactJS, NodeJS, scripting, serverless, and microservices.</p>
                </li>
                <li>
                <p>Is an expert in using git.</p>
                </li>
                <li>
                <p>Has worked with CI/CD processes before (CircleCI/Jenkins preferably).</p>
                </li>
                <li>
                <p>Has an extremely high bar for quality.</p>
                </li>
                <li>
                <p>Is thorough and detail-oriented.</p>
                </li>
                <li>
                <p>Can learn fast.</p>
                </li>
                <li>
                <p>Has great communication skills, particularly with respect to writing.</p>
                </li>
                <li>
                <p>Gains deep satisfaction from helping to make products better.</p>
                </li>
                <li>
                <p>Has experience of working in a small business or startup environment.</p>
                </li>
                <li>
                <p>Preferably has experience collaborating with diverse, geographically-dispersed teams.</p>
                </li>
                </ul>
                <h1>Core Responsibilities:</h1>
                <ul>
                <li>
                <p>Own backend development and contribute to other areas of the product. </p>
                </li>
                <li>
                <p>Learn, evolve and improve an existing application/system architecture.</p>
                </li>
                <li>
                <p>Review code from other engineers and provide feedback.</p>
                </li>
                <li>
                <p>Help secure the environment.</p>
                </li>
                <li>
                <p>Develop Shorthand app server-side and API functionality to help improve the customer experience. </p>
                </li>
                <li>
                <p>Contribute to the technical direction of the Shorthand tool.</p>
                </li>
                <li>
                <p>Report bugs.</p>
                </li>
                <li>
                <p>Communicate with the customer support team and customers to suggest solutions to issues.</p>
                </li>
                <li>
                <p>Assist in the creation of product documentation when required.</p>
                </li>
                </ul>
                <h1>Qualifications:</h1>
                <ul>
                <li>
                <p>A minimum 10 years of experience in Software Engineering roles.</p>
                </li>
                <li>
                <p>A minimum 3 years of experience in web application development.</p>
                </li>
                <li>
                <p>Thorough knowledge of NodeJS and the web.</p>
                </li>
                <li>
                <p>Experience with AWS.</p>
                </li>
                <li>
                <p>A university qualification in computer science or a closely related field, or equivalent career experience required.</p>
                </li>
                </ul>
                <h1>Personality Attributes: </h1>
                <ul>
                <li>
                <p>You are a proactive self-starter, who does not need to be told what to do and will be resourceful in order to find solutions to any challenge.</p>
                </li>
                <li>
                <p>You thrive in a fast-paced and demanding environment, and possess a high level of intellectual curiosity.</p>
                </li>
                <li>
                <p>You are collaborative.</p>
                </li>
                <li>
                <p>You find fulfilment in the job itself, and happiness in a job well done.</p>
                </li>
                </ul>
                <h1>Salary Range: </h1>
                <p>$115k - $150k USD</p>
                </div>
            </div>
            {/* <Button type='primary'
            onClick={() => props.close()}
        >Close</Button> */}
        </div>
    </JobInfoStyles>)
}