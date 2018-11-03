import React from 'react';
import './Spinner.css';

export default ({small = false}) => <div className={`spinner${small ? ' spinner--small' : ''}`} />;
