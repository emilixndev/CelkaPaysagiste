import { MdOutlineEmail, TfiLocationPin } from 'react-icons/all';

import Footer from '../Component/Footer';
import Menu from '../Component/Menu';

const HomeView = () => {
  return (
    <>
      <Menu></Menu>
      <div className=" h-screen">
        <img src="../src/img/A7404679.jpg" className=" w-full h-[75%] object-cover" alt="Background" />
        <div className="flex justify-center">
          <h1 className="text-white absolute  top-1/2 transform -translate-y-1/2 text-8xl font-bold bg-gray-200 p-20 bg-opacity-40">
            Paysagiste et fleuriste
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-3/4 ">
            <div className="text-3xl mt-5 mb-5 ">Notre savoir faire :</div>
            <div className="flex justify-between">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src="../src/img/A7404511.jpg" className="w-52 h-72" alt="Movie" />
                </figure>
                <div className="card-body w-96">
                  <h2 className="card-title">Fleuriste</h2>
                  <p className="flex">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda aut delectus
                    dignissimos ducimus eveniet ex expedita explicabo laudantium non, numquam pariatur quibusdam quod
                    sint tenetur veniam vero voluptate voluptatibus!
                  </p>
                </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img src="../src/img/test.jpg" className="w-52 h-72" alt="Movie" />
                </figure>
                <div className="card-body w-96">
                  <h2 className="card-title">Paysagiste</h2>
                  <p className="flex">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, assumenda aut delectus
                    dignissimos ducimus eveniet ex expedita explicabo laudantium non, numquam pariatur quibusdam quod
                    sint tenetur veniam vero voluptate voluptatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default HomeView;
