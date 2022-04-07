import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import styled from 'styled-components';
import { VscNewFile } from 'react-icons/vsc';

function DragDrop({ fileTypes, maxSize }) {
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  function onClickChange(event) {
    event.target.classList.add('chooseImage');
  }
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      maxSize={maxSize}
      children={
        <DragAndDrop onClick={onClickChange}>
          <VscNewFile />
          Choose a file or drag it here
        </DragAndDrop>
      }
    />
  );
}

const DragAndDrop = styled.div`
  border: 2px dashed var(--primary-color);
  padding: 1rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: underline;
  transition: color 0.3s ease;
  margin: 1rem 0;
  width: 180px;
  @media screen and (min-width='1200px') {
    width: 220px;
    margin: 0;
  }

  &:hover {
    color: var(--gray);
  }

  svg {
    font-size: 1.4rem;
    margin-right: 0.5rem;
    color: var(--primary-color);
  }

  &.chooseImage {
    svg {
      color: var(--success-color);
    }
  }
`;

export default DragDrop;
