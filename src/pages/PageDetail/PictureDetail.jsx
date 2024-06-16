export function PictureDetail({heroDetailSelected}) {
    return (
        <div className='md:w-70 md:m-auto xl:w-5/12 fade-in'>{/* picture-hero */}
            {/*  <img src={heroDetailSelected?.thumb_image} alt="img-detail" /> */}
            <video loop autoPlay className="">
                <source src={heroDetailSelected.thumb_video} type="video/webm" ></source>
            </video>
        </div>
    )
}