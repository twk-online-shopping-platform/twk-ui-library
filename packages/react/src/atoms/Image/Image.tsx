import React, { useState } from "react";
import { BlurhashCanvas } from "react-blurhash";
import { imageTestId } from "./ImageConstants";
import { ImageType } from "./Type";

const Image = ({ imageUrl, hashImagUrl, style, description }: ImageType) => {
  const [loaded, setLoaded] = useState(false);
  const hashClassName =
    "dvc-full " + (loaded ? "dvcoff " : "dvc-on ") + (style ? style : "");
  const imageClassName =
    "dvc-full " + (loaded ? "dvc-on " : "dvc-off ") + (style ? style : "");
  return (
    <div data-testid={imageTestId} className="flx-h flx-spc-ctr">
      <img
        className={imageClassName}
        src={imageUrl}
        alt={description ? description : "Card Image"}
        onLoad={() => setLoaded(true)}
      />
      {!loaded ? (
        <BlurhashCanvas hash={hashImagUrl} className={hashClassName} />
      ) : null}
    </div>
  );
};

export default Image;
