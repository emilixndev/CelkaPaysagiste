import {
  AiOutlineUser,
  BsHouseDoor,
  BsMailbox,
  BsTelephoneInbound,
  GiModernCity,
  HiOutlineMailOpen,
  RiQuestionAnswerLine,
  TbShovel,
} from 'react-icons/all';

import Footer from '../Component/Footer';
import Menu from '../Component/Menu';

const devisAsking = () => {
  return (
    <>
      <Menu></Menu>
      <br />
      <br />
      <br />
      <div className="border-solid border-primary border-2 w-[75%] h-full flex mx-auto p-5 rounded shadow-xl">
        <div className="flex-row w-full">
          <div className="flex-wrap">
            <div className="text-3xl">Demandez votre devis gratuitement</div>
            <div className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cum dignissimos eum exercitationem facere
              facilis, fuga, harum illum incidunt inventore itaque laborum minima natus nemo non ratione tempore
              tenetur?{' '}
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex-wrap  mt-5">
            <div className="font-bold text-xl mb-2"> Information :</div>

            <div className="flex">
              <div className="relative mb-6 w-1/2 mr-6">
                Nom
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineUser size={20} className="mt-5" />
                </div>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
                  placeholder="Votre nom"
                />
              </div>

              <div className="relative mb-6 w-1/2">
                Prénom
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineUser size={20} className="mt-5" />
                </div>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                  placeholder="Votre prénom"
                />
              </div>
            </div>
            <div className="relative mb-6">
              Adresse
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsHouseDoor size={20} className="mt-5" />
              </div>
              <input
                type="text"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Votre adresse"
              />
            </div>
            <div className="flex">
              <div className="relative mb-6 w-1/2 mr-6">
                Code postal
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BsMailbox size={20} className="mt-5" />
                </div>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
                  placeholder="Votre code postal"
                />
              </div>

              <div className="relative mb-6 w-1/2">
                Ville
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <GiModernCity size={20} className="mt-5" />
                </div>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                  placeholder="Votre ville"
                />
              </div>
            </div>
            <div className="flex">
              <div className="relative mb-6 w-1/2 mr-6">
                Téléphone
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <BsTelephoneInbound size={20} className="mt-5" />
                </div>
                <input
                  type="text"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  "
                  placeholder="06 xx xx xx xx"
                />
              </div>

              <div className="relative mb-6 w-1/2">
                Email
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiOutlineMailOpen size={20} className="mt-5" />
                </div>
                <input
                  type="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                  placeholder="nom@exemple.fr"
                />
              </div>
            </div>
            <div className="divider"></div>
            <div className="font-bold text-xl mb-2"> Votre projet :</div>
            <div className="form-control w-full ">
              <div className="relative mb-6">
                Vous êtes intéressé(e) par
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <TbShovel size={20} className="mt-5" />
                </div>
                <select className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  ">
                  <option disabled selected>
                    Choisir le type de projet
                  </option>
                  <option>blabla</option>
                  <option>blabla</option>
                  <option>blabla</option>
                  <option>blabla</option>
                  <option>blabla</option>
                </select>
              </div>
            </div>
            <div className="relative mb-6">
              Détaillez votre projet
              <div className="absolute mt-3  pl-3 pointer-events-none">
                <RiQuestionAnswerLine size={20} className="" />
              </div>
              <textarea
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Renseigner votre question içi "
                rows={10}
              />
            </div>
            <button className="btn btn-primary w-full">Envoyer</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default devisAsking;
