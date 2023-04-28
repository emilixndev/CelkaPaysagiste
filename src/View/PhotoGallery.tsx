import Footer from '../Component/Footer';
import Menu from '../Component/Menu';

const PhotoGallery = () => {
  return (
    <>
      <Menu />
      <div className="text-3xl font-bold text-center mt-5"> Galerie Photo</div>
      <div className="grid grid-cols-3  w-[80%] m-auto   mt-10 gap-10">
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
        <div className="relative overflow-hidden bg-no-repeat bg-cover  group">
          <img className="object-cover   w-full h-60 rounded-2xl " src="../src/img/cropped-1920-1080-872716.jpg" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 group-hover:opacity-40 transition duration-700 ease-in-out bg-white  rounded-2xl"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full  overflow-hidden text-white opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out  rounded-2xl"></div>
        </div>
      </div>
      Gallery
      <Footer />
    </>
  );
};

export default PhotoGallery;
