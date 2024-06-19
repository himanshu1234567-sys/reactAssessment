import React, { useState } from 'react';
import './App.css';
import ConfigComponent from './components/ConfigComponent';

function App() {
  const [configStates, setConfigStates] = useState([
    { id: 'header1', type: 'header', text: 'Online Appointment Configuration', showText: false },
    { id: 1, headerId: 'header1', name: "Configure Online Scheduling and Charge", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 2, headerId: 'header1', name: "Configure Appointment Landing Page", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 3, headerId: 'header1', name: "Online Booking Dashboard Note", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 4, headerId: 'header1', name: "Set Calendar Limit (in months)", type: "toggle-input", isEnabled: false, value: '' },
    { id: 5, headerId: 'header1', name: "Read Only - Online Booking", type: "toggle", isEnabled: false },
    { id: 'header2', type: 'header', text: 'Forms Configuration', showText: false },
    { id: 6, headerId: 'header2', name: "Form Template Designer", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 7, headerId: 'header2', name: "Other Template Designer", type: "list", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false, listItems: ['Registration', 'Medical'] },
    { id: 8, headerId: 'header2', name: "Config Form Durations", type: "toggle", isEnabled: false, value: '' },

    { id: 'header3', type: 'header', text: 'Treatment Plant Configuration', showText: false },
    { id: 9, headerId: 'header3', name: "Payment Plan", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 10, headerId: 'header3', name: "Hide ToothChart", type: "toggle", icon: "https://img.icons8.com/ios/50/edit" },
    { id: 11, headerId: 'header3', name: "Pay Now Button Visibility", type: "check", isEnabled: false, value: '', newItem: ['Tooth', 'Surface','fee', 'allow'] },
    { id: 'header4', type: 'header', text: 'Other Configuration', showText: false },
    { id: 12, headerId: 'header4', name: "Payment Plan", type: "config", icon: "https://img.icons8.com/ios/50/edit", isEnabled: false },
    { id: 13, headerId: 'header4', name: "Hide ToothChart", type: "toggle", },
    { id: 14, headerId: 'header4', name: "Treatment Plan", type: "textBox", isEnabled: false, value: '', newItem: ['Registration', 'health', 'booking'] },
    { id: 15, headerId: 'header4', name: "OTP & UserName", type: "toggle", },
  ]);

  const [keywords, setKeywords] = useState(['yes', 'confirmed', 'confirm', 'okay','demo']);
  const [newKeyword, setNewKeyword] = useState('');

  const handleAddKeyword = () => {
    if (newKeyword.trim() !== '' && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const handleRemoveKeyword = (index) => {
    const updatedKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(updatedKeywords);
  };

  const toggleConfigItem = (id) => {
    const updatedConfigStates = configStates.map(item => {
      if (item.id === id && item.type !== 'header') {
        return { ...item, isEnabled: !item.isEnabled };
      }
      return item;
    });
    setConfigStates(updatedConfigStates);
  };

  const handleInputChange = (id, value) => {
    const updatedConfigStates = configStates.map(item => {
      if (item.id === id) {
        return { ...item, value };
      }
      return item;
    });
    setConfigStates(updatedConfigStates);
  };

  const handleListItemChange = (id, value) => {
    const updatedConfigStates = configStates.map(item => {
      if (item.id === id) {
        const newItem = item.newItem.includes(value)
          ? item.newItem.filter(i => i !== value)
          : [...item.newItem, value];
        return { ...item, newItem };
      }
      return item;
    });
    setConfigStates(updatedConfigStates);
  };

  const addItemToList = (id) => {
    const updatedConfigStates = configStates.map(item => {
      if (item.id === id) {
        return { ...item, listItems: [...item.listItems, item.newItem], newItem: '' };
      }
      return item;
    });
    setConfigStates(updatedConfigStates);
    console.log(`Item with ID ${id} updated`);
  };

  const toggleHeader = (id) => {
    const updatedConfigStates = configStates.map(item => {
      if (item.id === id && item.type === 'header') {
        return { ...item, showText: !item.showText };
      }
      return item;
    });
    setConfigStates(updatedConfigStates);
  };

  return (
    <ConfigComponent
      configStates={configStates}
      toggleConfigItem={toggleConfigItem}
      handleInputChange={handleInputChange}
      handleListItemChange={handleListItemChange}
      addItemToList={addItemToList}
      toggleHeader={toggleHeader}
      keywords={keywords}
      setKeywords={setKeywords}
      newKeyword={newKeyword}
      setNewKeyword={setNewKeyword}
      handleAddKeyword={handleAddKeyword}
      handleRemoveKeyword={handleRemoveKeyword}
    />
  );
}

export default App;
