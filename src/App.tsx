import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {
  const [file, setFile] = React.useState({name: "test"});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
        <button
          onClick={() =>
            uploadData({
              path: `picture-submissions/${file.name}`,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              data: file as any,
          })
        }
      >
        Upload
      </button>
    </div>
  );
}

export default App
