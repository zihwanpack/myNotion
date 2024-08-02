'use client';
import { useState } from 'react';
import Album from '../album/album';
import SideBarIcon from '../side-bar-icon/side-bar-icon';
import { ArtistProps } from '@/types';

const Artist: React.FC<ArtistProps> = ({ name, data }) => {
  const [showAlbum, setShowAlbum] = useState(false);

  const handleAlbum = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    setShowAlbum(!showAlbum);
  };

  return (
    <div onClick={handleAlbum}>
      <SideBarIcon data={name} />
      {showAlbum && (
        <div>
          {Object.entries(data.Albums).map(([albumName, tracks]) => (
            <Album key={albumName} name={albumName} tracks={tracks} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Artist;
