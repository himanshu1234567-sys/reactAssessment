import React from 'react';
import { Button } from 'react-bootstrap';

const handleUpdateClick = () => {
  alert('Data has been updated!');
};

const ConfigItem = ({
  item,
  toggleConfigItem,
  handleInputChange,
  handleCheckboxChange,
  handleListItemChange,
  addItemToList,
  keywords,
  setKeywords,
  newKeyword,
  setNewKeyword,
  handleAddKeyword,
  handleRemoveKeyword,
}) => {
  const createRows = (items, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < items.length; i += itemsPerRow) {
      rows.push(items.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const keywordRows = createRows(keywords, 5);
  const checkboxRows = createRows(item.newItem || [], 5);

  return (
    <div className="config-item">
      <p>{item.name}</p>
      {item.type === 'toggle' && (
        <div className='d-flex'>
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
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={item.isEnabled}
              onChange={() => toggleConfigItem(item.id)}
            />
            <span className="slider round"></span>
          </label>
          {item.isEnabled && (
            <div className='inputMonth' style={{ float: 'right' }}>
              <input
                type="text"
                value={item.value}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                placeholder="Enter number of months"
              />
            </div>
          )}
        </div>
      )}
      {item.type === 'config' && item.icon && (
        <img
          src={item.icon}
          alt="icon"
          width="20"
          height="20"
        />
      )}
      {item.type === 'check' && (
        <div className="config-container">
          {checkboxRows.map((row, rowIndex) => (
            <div key={rowIndex} className="checkbox-row" >
              {row.map((newItemValue, index) => (
                <div key={index} className="checkbox-item" style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={item.newItem.includes(newItemValue)}
                    onChange={() => handleCheckboxChange(item.id, newItemValue)}
                  />
                  <label>{newItemValue}</label>
                </div>
              ))}
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='btn btn-primary' onClick={handleUpdateClick}>Update</button>

          </div>
        </div>
      )}
      {item.type === 'list' && (
        <div>
          <ul>
            {item.listItems.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center' }}>

            <input
              type="text"
              style={{ textAlign: 'center', marginRight: '10px' }}
              value={item.newItem}
              onChange={(e) => handleListItemChange(item.id, e.target.value)}
              placeholder="Add new item"
            />
            <Button onClick={() => addItemToList(item.id)}>Add Item</Button>
          </div>
        </div>
      )}
      {item.type === 'textBox' && (
        <div className="config-container ">
          <div className="config-item ">
            <div className="keyword-container">
              {keywordRows.map((row, rowIndex) => (
                <div key={rowIndex} className="keyword-row">
                  {row.map((keyword, index) => (
                    <div key={index} className="keyboard_item_header">
                      <span className="keyword keyboard_item">{keyword}</span>
                      <button
                        className="remove-btn btn btn-danger"
                        onClick={() => handleRemoveKeyword(rowIndex * 5 + index)}
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="new-keyword-container">
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginRight: '2px' }}>
            <input
              style={{ borderRadius: '10px ', marginRight: '10px', textAlign: 'center' }}
              type="text"
              value={newKeyword}
              onChange={(e) => setNewKeyword(e.target.value)}
              className="new-keyword-input"
              placeholder="Add Plan"
            />
            <button className="btn btn-primary" onClick={handleAddKeyword}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigItem;
