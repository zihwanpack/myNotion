type SideBarIconProps = {
  data: string;
};

type PopProps = {
  name: string;
  data: {
    Artists: {
      [artistName: string]: {
        Albums: {
          [albumName: string]: string[];
        };
      };
    };
  };
};

type SideBarDataType = {
  [key: string]: {
    Artists: {
      [artistName: string]: {
        Albums: {
          [albumName: string]: string[];
        };
      };
    };
  };
};

type AlbumProps = {
  name: string;
  tracks: string[];
};

type ArtistProps = {
  name: string;
  data: {
    Albums: {
      [albumName: string]: string[];
    };
  };
};

export type {
  SideBarIconProps,
  AlbumProps,
  PopProps,
  ArtistProps,
  SideBarDataType,
};
