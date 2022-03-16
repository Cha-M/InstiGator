import { useState } from "react";
import { useEffect } from "react";
import { PhotoContainer, PhotoHeadlineItem } from "../photoContainer";

export const Photos = ({size}) => {
    const [photos, setPhotos] = useState([]);
    
    const fetchPhotos = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setPhotos(data);
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchPhotos();
      },[]);
    
    if (size === "large")
    {

        return (
            <div>
            {/* <button onClick={fetchPhotos}>Grab photos</button> */}
            {photos.map((item, index) => <PhotoContainer photo={item} />)}
            </div>
        )
    }
    else
    {

        const top7 = photos.slice(0, 7);
        console.log("top7", top7);
        return (
            <>
            {/* <button onClick={fetchPhotos}>Grab photos</button> */}
            {top7.map((item, index) => <PhotoHeadlineItem photo={item} />)}
            </>
        )
    }
}