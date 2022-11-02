import React from 'react';
import { createRoot } from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp';
    
const root = createRoot(document.getElementById('app'));
root.render(<IndecisionApp />);