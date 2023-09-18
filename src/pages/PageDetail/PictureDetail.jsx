export function PictureDetail({heroDetailSelected}) {
    return (
        <div className='picture-hero'>
            {/*  <img src={heroDetailSelected?.thumb_image} alt="img-detail" /> */}
            <video loop autoPlay>
                <source src={heroDetailSelected.thumb_video} type="video/webm" ></source>
            </video>
        </div>
    )
}