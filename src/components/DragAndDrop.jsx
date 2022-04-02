import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

function DragDrop({ fileTypes, maxSize }) {
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      maxSize={maxSize}
    />
  );
}

export default DragDrop;
