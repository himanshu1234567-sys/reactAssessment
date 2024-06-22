import React from 'react';
import Header from './Header';
import ConfigItem from './ConfigItem';


const ConfigComponent = ({
  configStates,
  toggleConfigItem,
  handleInputChange,
  handleListItemChange,
  addItemToList,
  keywords,
  setKeywords,
  newKeyword,
  setNewKeyword,
  handleAddKeyword,
  handleRemoveKeyword,
  handleCheckboxChange

}) => {
  return (
    <div>
      {configStates.map(item => (
        <div key={item.id}>
          {item.type === 'header' ? (
            <h2>{item.text}</h2>
          ) : (
            <ConfigItem
              item={item}
              toggleConfigItem={toggleConfigItem}
              handleInputChange={handleInputChange}
              handleListItemChange={handleListItemChange}
              addItemToList={addItemToList}
              keywords = {keywords}
              setKeywords= {setKeywords}
              newKeyword ={newKeyword}
              setNewKeyword = {setNewKeyword}
              handleAddKeyword = {handleAddKeyword}
              handleRemoveKeyword={handleRemoveKeyword}
              handleCheckboxChange={handleCheckboxChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConfigComponent;