import { useState, useEffect } from 'react';

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  const handleMusicPlay = (evt) => {
    if (window.$_currentlyPlaying && window.$_currentlyPlaying !== evt.target) {
      window.$_currentlyPlaying.pause();
    }
    window.$_currentlyPlaying = evt.target;
  };

  useEffect(() => {
    audio.addEventListener('play', handleMusicPlay, true);
    return () => {
      audio.removeEventListener('play', handleMusicPlay);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return [toggle];
};

export default useAudio;
