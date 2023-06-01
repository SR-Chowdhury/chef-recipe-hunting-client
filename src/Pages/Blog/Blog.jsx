import React, { useRef, useState } from 'react';
import './Blog.css';
import { Table } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaArrowDown, FaArrowUp, FaFilePdf } from "react-icons/fa";
import PDFGenerator from './PDFComponent/PDFGenerator';


const Blog = () => {

    const [read, setRead] = useState(false);

    const toggleVisibility = () => {
        setRead(!read);
    };

    const pdfRef = useRef();


    const handlePDF = () => {

        const input = pdfRef.current;

        html2canvas(input).then(() => {
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            pdf.save('blog.pdf');
        });
    }

    return (
        <div className='blog-section'>
            <div className="blogs-banner">
                <div className='banner-container'>
                    <div className="container banner-inner-container">
                        <h1 className='banner-title'>Blog</h1>
                        <p className='banner-breadcumb'><button onClick={handlePDF} className='primaryBtn'><FaFilePdf /> Download PDF</button></p>
                    </div>
                </div>
            </div>
            <div className="container" ref={pdfRef}>
                <div className="blog-container">
                    <div>
                        <h2>The differences between controlled and uncontrolled components</h2>
                        <p>
                            <br />
                            <strong>Controlled Component: </strong>A controlled component is a form input element whose value is controlled by React state. In other words, React controls and manages the value of the input field. <br /><br />
                            <strong>Uncontrolled Component: </strong>An uncontrolled component is a form input element that manages its own state internally, without relying on React state.
                        </p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>CONTROLLED COMPONENT</th>
                                    <th>UNCONTROLLED COMPONENT</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Does not maintain its internal state.</td>
                                    <td>Maintains its internal state.</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Data is controlled by the parent component.</td>
                                    <td>Data is controlled by the DOM itself.</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Accepts its current value as a prop.</td>
                                    <td>Uses a ref for their current values.</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Allows validation control.</td>
                                    <td>Does not allow validation control.</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Better control over the form elements and data.</td>
                                    <td>Limited control over the form elements and data.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="blog-container">
                    <div>
                        <h2>How to validate React props using PropTypes?</h2>
                        <p>When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. For using PropTypes we need to import it first. <br /><br />
                            The PropTypes utility exports a wide range of validators for configuring type definitions like,
                        </p>
                        <ul>
                            <li><code>PropTypes.any:</code> The prop can be of any data type</li>
                            <li><code>PropTypes.bool:</code> The prop should be a Boolean</li>
                            <li><code>PropTypes.number:</code> The prop should be a number</li>
                            <li><code>PropTypes.string:</code> The prop should be a string</li>
                            <li><code>PropTypes.func:</code> The prop should be a function</li>
                            <li><code>PropTypes.array:</code> The prop should be an array</li>
                            <li><code>PropTypes.object:</code> The prop should be an object</li>
                            <li><code>PropTypes.symbol:</code> The prop should be a symbol</li>
                        </ul>
                        <p>Use the component: Now, whenever you use MyComponent, React will perform the prop type validation and provide warnings in the console if the passed props don't match the specified types.</p>
                    </div>
                </div>
                <div className="blog-container">
                    <div>
                        <h2>The difference between nodejs and express js</h2>
                        <p>
                            <br />
                            <strong>Node JS: </strong>Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. NodeJS is not a framework and it’s not a programming language. It is used for building back-end services like APIs like Web App or Mobile App. <br /><br />
                            <strong>Express JS: </strong>Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.
                        </p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Node JS</th>
                                    <th>Express JS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Usage</td>
                                    <td>It is used to build server-side, input-output, event-driven apps.</td>
                                    <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                                </tr>
                                <tr>
                                    <td>Building Block</td>
                                    <td>It is built on Google’s V8 engine.</td>
                                    <td>It is built on Node.js.</td>
                                </tr>
                                <tr>
                                    <td>Level of features</td>
                                    <td>Fewer features.</td>
                                    <td>More features than Node.js.</td>
                                </tr>
                                <tr>
                                    <td>Written in</td>
                                    <td>C, C++, JavaScript</td>
                                    <td>JavaScript</td>
                                </tr>
                                <tr>
                                    <td>Controllers</td>
                                    <td>Controllers are not provided.</td>
                                    <td>Controllers are provided.</td>
                                </tr>
                                <tr>
                                    <td>Routing</td>
                                    <td>Routing is not provided.</td>
                                    <td>Routing is provided.</td>
                                </tr>
                                <tr>
                                    <td>Middleware</td>
                                    <td>Doesn’t use such a provision.</td>
                                    <td>Uses middleware for the arrangement of functions systematically server-side.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="blog-container">
                    <div>
                        <h2>What is a custom hook, and why will you create a custom hook?</h2>
                        <p>
                            A custom hook is a JavaScript function in React that allows you to reuse stateful logic across multiple components. It's a way to extract common functionality into a reusable hook that can be used in different parts of your application. <br /><br />
                            Custom hooks follow a specific naming convention by starting with the word "use" (e.g., useCustomHook). By using custom hooks, you can encapsulate complex logic, manage state, perform side effects, and share code between different components without the need for duplication. <br /><br />
                            There is also some reasons for using custom hook such as Reusability, Separation of Concerns, Code Organization, Sharing Stateful Logic, Testing etc. <br /><br />Overall, custom hooks offer a powerful way to extract, reuse, and share logic in React applications, promoting code reusability, maintainability, and improved development efficiency.
                        </p>
                    </div>
                </div>
                <hr />
                <br />
                <div className='readPDFNow'>
                    <div>
                        <button onClick={toggleVisibility} className='primaryBtn'>
                            {read ? <span><FaArrowUp/> Read Later</span> : <span>Read Now <FaArrowDown/></span>}
                        </button>
                        {read && <PDFGenerator/>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;