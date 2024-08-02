'use client';
import { useState } from 'react';
import SideBarIcon from '../side-bar-icon/side-bar-icon';
import { AlbumProps } from '@/types';

const Album: React.FC<AlbumProps> = ({ name, tracks }) => {
  const [showTracks, setShowTracks] = useState(false);

  const handleTrackToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setShowTracks(!showTracks);
  };

  return (
    <div onClick={handleTrackToggle}>
      <SideBarIcon data={name} />
      {showTracks && (
        <div>
          {tracks.map((track, index) => (
            <SideBarIcon key={index} data={track} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Album;
