import React from 'react';

const ConfigItem = ({
  item,
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
}) => {
  return (
    <div className='dropdownText show'>
      <p style={{ marginLeft: 24, marginTop: 7 }}>{item.name}</p>
      {item.type === 'toggle' && (
        <div style={{ marginRight: 24 }}>
          <label className="switch">
            <input
              type="checkbox"
              checked={item.isEnabled}
              onChange={() => toggleConfigItem(item.id)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      )}
      {item.type === 'toggle-input' && (
        <div style={{ marginRight: 24 }}>
          <label className="switch">
            <input
              type="checkbox"
              checked={item.isEnabled}
              onChange={() => toggleConfigItem(item.id)}
            />
            <span className="slider round"></span>
          </label>
          {item.isEnabled && (
            <div style={{ display: 'block', marginTop: 10 }}>
              <input
                type="text"
                value={item.value}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                placeholder="Enter number of months"
                style={{ marginBottom: 10 }}
              />
              <button className='btn btn-primary'>Update</button>
            </div>
          )}
        </div>
      )}
      {item.type === 'config' && item.icon && (
        <img
          style={{ marginRight: 24 }}
          width="15"
          height="15"
          src={item.icon}
          alt="icon"
        />
      )}
      {item.type === 'list' && item.isEnabled && (
        <div style={{ marginLeft: 24, display: 'flow-root' }}>
          <ul>
            {item.listItems.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
          <input
            type="text"
            value={item.newItem}
            onChange={(e) => handleListItemChange(item.id, e.target.value)}
            placeholder="Add new item"
            style={{ marginRight: 10 }}
          />
          <button onClick={() => addItemToList(item.id)}>Add Item</button>
        </div>
      )}
      {item.type === 'textBox' && (
        <div className="config-container">
          <div className="config-item">
            <div className="keyword-container">
              {keywords.map((keyword, index) => (
                <div key={index} className="keyword-item">
                  <span className="keyword">{keyword}</span>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveKeyword(index)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
            <div className="new-keyword-container">
              <input
                type="text"
                value={newKeyword}
                onChange={(e) => setNewKeyword(e.target.value)}
                className="new-keyword-input"
                placeholder="Add Plan"
              />
              <button className="add-btn" onClick={handleAddKeyword}>
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {item.type === 'check' && (
        <div style={{ marginLeft: 24, display: 'flex' }}>
          <div style={{ display: 'block', alignItems: 'center', marginTop: 10 }}>
            {item.newItem.map((newItemValue, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  checked={item.newItem.includes(newItemValue)}
                  value={newItemValue}
                  onChange={(e) => handleListItemChange(item.id, newItemValue)}
                  style={{ marginRight: 10 }}
                />
                <label htmlFor={newItemValue}>{newItemValue}</label><br />
              </div>
            ))}
            <button className='btn btn-primary' onClick={() => addItemToList(item.id)}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigItem;
