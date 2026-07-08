// MultiSelect.jsx - Versión de selección única
import React, { useEffect, useState } from 'react';
import './MultiSelect.css';

const MultiSelect = ({ 
  options, 
  label, 
  placeholder = 'Selecciona una opción...',
  onSelectionChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Inglés');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // Si ya está seleccionada, la deseleccionamos
    if (selectedOption === option) {
      setSelectedOption('');
      setIsOpen(false);
      if (onSelectionChange) {
        onSelectionChange('');
      }
    } else {
      // Seleccionamos la nueva opción
      setSelectedOption(option);
      setIsOpen(false);
      if (onSelectionChange) {
        onSelectionChange(option);
      }
    }
  };

  const clearSelection = () => {
    setSelectedOption('');
    if (onSelectionChange) {
      onSelectionChange('');
    }
  };
  
  /* useEffect(() => {
    console.log("select, ",selected, "selectOption: ",selectedOption)
    setSelectedOption(selected)
  },[]); */


  return (
    <div className="multiselect-container">
      {label && <label className="multiselect-label">{label}</label>}
      
      <div className="multiselect-wrapper">
        {/* Input visible */}
        <div 
          className={`multiselect-input ${isOpen ? 'multiselect-input-open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className="multiselect-chips">
            {selectedOption === '' ? (
              <span className="multiselect-placeholder">{placeholder}</span>
            ) : (
              <span className="multiselect-chip">
                {selectedOption}
                <button
                  type="button"
                  className="multiselect-chip-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSelection();
                  }}
                >
                  ×
                </button>
              </span>
            )}
          </div>
          
          <div className="multiselect-icons">
            {selectedOption !== '' && (
              <button
                type="button"
                className="multiselect-clear"
                onClick={(e) => {
                  e.stopPropagation();
                  clearSelection();
                }}
              >
                ✕
              </button>
            )}
            <span className={`multiselect-arrow ${isOpen ? 'multiselect-arrow-open' : ''}`}>
              ▼
            </span>
          </div>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="multiselect-dropdown">
            {options.length === 0 ? (
              <div className="multiselect-no-options">No hay opciones disponibles</div>
            ) : (
              options.map((option) => (
                <div
                  key={option}
                  className={`multiselect-option ${
                    selectedOption === option ? 'multiselect-option-selected' : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <span className="multiselect-option-checkmark">
                    {selectedOption === option && '✓'}
                  </span>
                  {option}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Mostrar selección actual */}
      {selectedOption !== '' && (
        <div className="multiselect-selection-info">
          Seleccionado: <strong>{selectedOption}</strong>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;