import { Image } from "@chakra-ui/react";
import "./imageCollage.scss";

export const ImageCollage = ({ images }: { images: string[] }): JSX.Element => {
  return (
    <div className="imageWrapper">
      <Image
        className="image image1 imageHov"
        src={images[0]}
        fallbackSrc="https://via.placeholder.com/500"
        borderRadius={"10%"}
      />
      <Image
        className="image image2 imageHov"
        src={images[1]}
        fallbackSrc="https://via.placeholder.com/500"
        borderRadius={"10%"}
      />
      <Image
        className="image image3 imageHov"
        src={images[2]}
        fallbackSrc="https://via.placeholder.com/500"
        borderRadius={"10%"}
      />
      <Image
        className="image image4 imageHov"
        src={images[3]}
        fallbackSrc="https://via.placeholder.com/500"
        borderRadius={"10%"}
      />
    </div>
  );
};
