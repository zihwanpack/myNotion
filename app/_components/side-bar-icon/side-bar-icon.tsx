'use client';

import { useState } from 'react';
import {
  FolderIcon,
  AudioFileIcon,
  ArrowRightIcon,
  ArrowDropDownIcon,
} from '@/public/icons';
import { SideBarIconProps } from '@/types';

const SideBarIcon: React.FC<SideBarIconProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className="mt-3 flex gap-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={clickHandler}
    >
      {isClicked ? (
        <ArrowDropDownIcon /> // 클릭시 이거 표시
      ) : isHovered && data.slice(-1) !== '3' ? (
        <ArrowRightIcon /> // hover시 이거 표시
      ) : data.slice(-1) === '3' ? (
        <AudioFileIcon /> // 음악 아이콘
      ) : (
        <FolderIcon color="primary" /> // 앨범 아이콘
      )}
      <p>{data}</p>
    </div>
  );
};

export default SideBarIcon;
