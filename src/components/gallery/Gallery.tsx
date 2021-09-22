import { GalleryProps, photoContext } from "./types";
import { PhotoContext } from "./PhotoContext";

export const Gallery: React.FC<GalleryProps> = ({ photos, setPhotos }) => {
  function handleLikePost(index: number) {
    if (!photos) {
      return;
    }

    const arr = [...photos];
    const post = arr[index];
    const status = post.isLiked;
    post.isLiked = !status;
    setPhotos(arr);

    handleLocalStorage(post);
  }

  function handleLocalStorage(post: photoContext) {
    const ls = localStorage.getItem("likes");
    let store = ls ? JSON.parse(ls) : [];

    if (post.isLiked) {
      store.push(post);
    } else {
      store = store.filter((p: photoContext) => p.date !== post.date);
    }

    localStorage.setItem("likes", JSON.stringify(store));
  }

  return (
    <div className="p-3" id="gallery">
      {photos?.length === 0 && <h1> No liked photos...</h1>}

      {photos &&
        photos.map((post, k) => (
          <div key={post.title} className="post border mb-3">
            {post.media_type !== "video" && (
              <>
                <div className="img-container">
                  <img
                    className="post-image"
                    key={post.title}
                    src={post.hdurl}
                    alt=""
                  />

                  <svg
                    className={`${post.isLiked ? "liked" : "like-svg"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="path"
                      onClick={() => handleLikePost(k)}
                      d="M9.29289 2.87868L10 3.58579L10.7071 2.87868L11.4142 2.17157C12.9763 0.609476 15.509 0.609476 17.0711 2.17157C18.6332 3.73367 18.6332 6.26633 17.0711 7.82843L10 14.8995L2.92893 7.82843C1.36683 6.26633 1.36683 3.73367 2.92893 2.17157C4.49102 0.609476 7.02368 0.609476 8.58578 2.17157L9.29289 2.87868Z"
                    />
                  </svg>
                </div>

                <PhotoContext post={post} />
              </>
            )}
          </div>
        ))}
    </div>
  );
};
