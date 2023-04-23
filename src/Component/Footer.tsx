const footer = () => {
  return (
    <>
      <footer className="bg-neutral mt-10 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <span className="self-center text-5xl font-semibold whitespace-nowrap  text-white font-['Billabong']">
                Celka paysagiste
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 md:mr-6 ">
                  ...
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-500 lg:my-8" />
          <span className="block text-sm text-white sm:text-center ">
            © 2023{' '}
            <a href="#" className="hover:underline">
              Celka™
            </a>
            . Tous droits réservés.
          </span>
        </div>
      </footer>
    </>
  );
};
export default footer;
