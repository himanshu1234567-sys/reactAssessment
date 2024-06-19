import React from 'react';
import Header from './Header';
import ConfigItem from './ConfigItem';

const ConfigComponent = ({
  configStates,
  toggleConfigItem,
  handleInputChange,
  handleListItemChange,
  addItemToList,
  toggleHeader,
  keywords,
  setKeywords,
  newKeyword,
  setNewKeyword,
  handleAddKeyword,
  handleRemoveKeyword,
}) => {
  return  (
    <div className='container'>
      {configStates.map(item => {
        if (item.type === 'header') {
          return (
            <Header key={item.id} item={item} toggleHeader={toggleHeader} />
          );
        } else {
          const parentHeader = configStates.find(header => header.id === item.headerId);
          if (parentHeader && parentHeader.showText) {
            return (
              <ConfigItem
                key={item.id}
                item={item}
                toggleConfigItem={toggleConfigItem}
                handleInputChange={handleInputChange}
                handleListItemChange={handleListItemChange}
                addItemToList={addItemToList}
                keywords={keywords}
                setKeywords={setKeywords}
                newKeyword={newKeyword}
                setNewKeyword={setNewKeyword}
                handleAddKeyword={handleAddKeyword}
                handleRemoveKeyword={handleRemoveKeyword}
              />
            );
          }
        }
        return null;
      })}
    </div>
  );
};

export default ConfigComponent;
