export const PhotoContainer = ({ photo }) => {
    return (
        <>
            <div className="feedElementBox">
                <div className="photo-container">
                <p>{photo.author}</p>
                <img src={photo.download_url} alt={`Photograph by ${photo.author}`} />
                </div>
            </div>
        </>
    )
}
export const PhotoHeadlineItem = ({ photo }) => {
    return (
        <>
            <div className="friendsElementBox">
                <div className="photo-container">
                <p>{photo.author.split(` `)[0]}</p>
                <img src={photo.download_url} alt={`Photograph by ${photo.author}`} />
                </div>
            </div>
        </>
    )
}