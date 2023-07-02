import { AiOutlineUser, BsTelephoneInbound, HiOutlineMailOpen, RiQuestionAnswerLine } from 'react-icons/all';

import Footer from '../Component/Footer';
import Menu from '../Component/Menu';

const Contact = () => {
  return (
    <>
      <Menu />
      <br />
      <br />
      <br />
      <p className="text-center text-8xl text-warning">Maps et adresse</p>
      <div className="border-solid border-primary border-2  w-[75%] h-full flex mx-auto  p-5 rounded shadow-xl">
        <div className="flex-row w-full">
          <div className="flex-wrap">
            <div className="text-3xl">Restons en contact</div>
            <div className="text-gray-400">Je vous répondrai pour tout renseignement par email.</div>
          </div>

          <div className="flex-wrap  mt-5">
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
            <div className="relative mb-6">
              Téléphone
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsTelephoneInbound size={20} className="mt-5" />
              </div>
              <input
                type="text"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="06 xx xx xx xx"
              />
            </div>
            <div className="relative mb-6">
              Votre question
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

export default Contact;
