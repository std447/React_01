import { useEffect, useRef } from "react";


export default function TakePhoto_func () {

  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream => {
      let video = videoRef.current;
      video.srcObject = stream;
      video.play();
    })
    .catch(err=>console.error(err))
  }

  const takePicture = () => {
    const width = 200;
    const height = width /(16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    let ctx = photo.getContext('2d');

    ctx.drawImage(video, 0, 0, width, height);
  }

  const clearImage = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext('2d');
    ctx.clearRect(0, 0, photo.width, photo.height)
  }

  useEffect(()=>{
    getVideo();
  },[videoRef])



  return(
    <>
    
    </>
  )
}