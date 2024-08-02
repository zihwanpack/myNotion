'use client';
import { useState } from 'react';
import Artist from '../artist/artist';
import SideBarIcon from '../side-bar-icon/side-bar-icon';
import { PopProps } from '@/types';

const Pop: React.FC<PopProps> = ({ name, data }) => {
  console.log(data);
  const [showArtists, setShowArtists] = useState(false);

  const handleArtists = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // ** 이벤트 버블링에 유의할 것 **
    e.stopPropagation();
    setShowArtists(!showArtists);
  };

  return (
    <div onClick={handleArtists}>
      <SideBarIcon data={name} />
      {showArtists && (
        <div>
          {Object.entries(data.Artists).map(([artistName, artistData]) => (
            <Artist key={artistName} name={artistName} data={artistData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pop;
