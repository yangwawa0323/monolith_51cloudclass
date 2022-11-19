import React, {
  useCallback, useEffect, useState
} from 'react'

const demoUrl = 'https://asciinema.org/a/335480.cast';

const AsciinemaWrapper = (props) => {

  const [player, setPlayer] = useState(null);
  const { url, id } = props;

  // the `id` is different between each asciinema player cell unit.
  const getContainerId = () => `#asciinema-player-${id}`;

  const getContainer = () => document.querySelector(getContainerId());

  const cleanPlayerContainerContent = () => {
    let container = getContainer();
    if (container) {
      container.innerHTML = '';
    }
  };


  // optimize the load module.
  const loadedModule = useCallback(() => require('asciinema-player')
    , [url, id]);

  
  useEffect(() => {
    AsciinemaPlayer = loadedModule();

    if (url?.endsWith('.cast')) {
      setTimeout(() => {
        // use fetch try to determine the url is valid resource.
        fetch(url)
          .then(() => {
            // each time the url changed, clean the content of player
            // container
            cleanPlayerContainerContent();
            let playerInstance = AsciinemaPlayer?.create(
              url !== undefined ? url : demoUrl,
              getContainer(),
              {
                autoplay: true,
                loop: true,
              }
            );
            setPlayer(playerInstance);
          })
          .catch(e => {
            cleanPlayerContainerContent();
          });
      }, 1500); // end of setTimeout
    }
  }, [props.url]);
  
  return (
    <div>
      {url != demoUrl && (
        <div
          id={`asciinema-player-${id}`}
          className='asciinema-player-container'
        ></div>
      )}
    </div>
  );
};

export default AsciinemaWrapper;