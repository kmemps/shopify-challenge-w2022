export interface photoContext {
  date: string;
  explanation: string;
  title: string;
  media_type: string;
  url?: string;
  hdurl?: string;
  isLiked: boolean;
}

export const post: photoContext = {
  date: "",
  explanation: "",
  title: "",
  media_type: "",
  isLiked: false,
};

export interface GalleryProps {
  photos?: typeof post[];
  setPhotos: any;
}

export interface ContextProps {
  post: photoContext;
}
