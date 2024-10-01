import image_fazenda from '../../assets/imagefarm.jpg'

export default function ImageBackground(){

    return (
        <div
            className="image-background"
            style={{
                backgroundImage: `url(${image_fazenda})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
}