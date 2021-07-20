import {Fragment, useState, useEffect } from 'react';
import './App.css';

// const url = ;

function App() {
    const [albumId, setAlbumID] = useState(0)
    const [photos, setPhotos] = useState([]);

  const getUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos/`
    );
    const data = await response.json()
    setPhotos(data)
    console.log(photos.length)
  }


  useEffect(()=> {
    getUser()
  },[])

  return (
    <Fragment>
      <div className='d-flex justify-content-center mb-5'>
        <div className='mt-5 '>
          <input
            type='number'
            value={albumId}
            onChange={(e) => setAlbumID(e.target.value)}
            className='form-control'
          />
        </div>
        <button
          type='submit'
          onClick={(e) => getUser(albumId)}
          className='btn btn-info btn-md mt-5 ml-2'
        >
          Get Album Photos By Id
        </button>
        <div className='App'></div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {photos.length > 0 ? (
            photos.map((photo) => (
              <div className='col-md-3 col-sm-6'>
                <div className='card m-2'>
                  <img
                    src={photo.thumbnailUrl}
                    className='card-img-top'
                    alt='album photo '
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>{photo.title}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-4 offset-2">

            <p className='d-inline-block text-nowrap '>
              Enter album id and click "Get Album Photos By Id button" to see
              your photos 
            </p>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
