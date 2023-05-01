import { AiOutlinePhone, MdOutlineEmail, TfiLocationPin } from 'react-icons/all';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav className="bg-primary border-gray-200  text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          Lorem ipsum dolor sit amet,
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <li className="flex">
                <AiOutlinePhone size={25}></AiOutlinePhone>
                <a href="#" aria-current="page" className="hover:underline">
                  &nbsp;07-86-37-26-10
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          {/*<img src="../src/img/images.png" className="h-8 mr-3" alt="Flowbite Logo" />*/}
          <h1 className="font-['Billabong'] text-[44px]">Celka paysagiste</h1>{' '}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-0 md:flex-row space-x-8 mt-0 border-0">
              <li className="flex items-center">
                <a className="border-gray-900 border border-dashed p-4 rounded mt-4 mr-4 h-12">
                  <TfiLocationPin></TfiLocationPin>
                </a>
                <a className="flex-wrap">
                  <a className="font-bold text-xl ">Adresse : </a>
                  <br />
                  <a className=" ">4 Rue Principale Neubourg </a>
                  <br />
                  <a className="">67350 Dauendorf </a>
                </a>
              </li>

              <li className="flex items-center">
                <a className="border-gray-900 border border-dashed p-4 rounded mt-4 mr-4 h-12">
                  <MdOutlineEmail></MdOutlineEmail>
                </a>
                <div className="flex   flex-col ml-2">
                  <a className="font-bold text-xl ">Email : </a>
                  <a className=" ">info@celka.fr </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="bg-neutral text-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <Link to="/home">
              <li className=" hover:text-primary">Accueil</li>
            </Link>

            <Link to="/photoGallery">
              <li className=" hover:text-primary">Galerie photo</li>
            </Link>
            <Link to="/news">
              <li className="hover:text-primary">Actualités</li>
            </Link>
            <li className=" hover:text-primary">Qui somme nous</li>
          </ul>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <Link to="/contact">
                <li className=" hover:text-primary">Contact</li>
              </Link>
              <Link to="/devis">
                <li className=" hover:text-primary">Demande de devis</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
