import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


const PDFGenerator = () => {

    const newPlugin = defaultLayoutPlugin();
    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer plugins={[newPlugin]} fileUrl="/public/blog.pdf" />;
            </Worker>
        </div>
    );
};

export default PDFGenerator;