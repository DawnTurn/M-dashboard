import { useState, useCallback, useRef } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import Image from "next/image";

interface CropImageProps {
    src: string;
    onComplete: (croppedImage: Blob) => void;
}

const CropImage: React.FC<CropImageProps> = ({ src, onComplete }) => {
    const [crop, setCrop] = useState<Crop>({
        unit: "%",
        width: 50,
        height: 50,
        x: 25,
        y: 25, 
    });

    const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    const onImageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const img = event.currentTarget;
        imageRef.current = img;
    };

    const getCroppedImg = async (): Promise<Blob | null> => {
        if (!imageRef.current || !completedCrop) {
        return null;
        }
        const image = imageRef.current;
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = completedCrop.width!;
        canvas.height = completedCrop.height!;
        const ctx = canvas.getContext("2d");

        if (!ctx) return null;

        ctx.drawImage(
        image,
        completedCrop.x! * scaleX,
        completedCrop.y! * scaleY,
        completedCrop.width! * scaleX,
        completedCrop.height! * scaleY,
        0,
        0,
        completedCrop.width!,
        completedCrop.height!
        );

        return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (blob) {
            resolve(blob);
            }
        }, "image/jpeg");
        });
    };

    const handleCropComplete = async () => {
        const croppedBlob = await getCroppedImg();
        if (croppedBlob) {
            onComplete(croppedBlob);
        }
    };

    return (
        <div>
            <ReactCrop
                aspect={1} 
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                onComplete={(c) => setCompletedCrop(c)}
            >
                <img src={src} alt="Crop preview" onLoad={onImageLoaded} />
            </ReactCrop>
            <div className="text-center">
                <button onClick={handleCropComplete} className="mt-3 bg-primaryNew text-white px-8 py-2 rounded-3xl hover:bg-primaryNew/90 transition-all">
                    Crop & Save
                </button>
            </div>
        </div>
    );
};

export default CropImage;
