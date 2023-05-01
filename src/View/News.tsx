import Footer from '../Component/Footer';
import Menu from '../Component/Menu';

const News = () => {
  return (
    <>
      <Menu />
      <div className="text-3xl text-center font-bold mt-5 mb-5">Actualités</div>

      <div className="w-full flex justify-center">
        <div className="w-2/3 bg-gray-100 rounded">
          <img className="object-cover   w-full rounded " src="../src/img/cropped-1920-1080-872716.jpg" />

          <div className="mx-2">
            <div className="text-xl mt-2 mb-2 flex justify-between">
              Recrutement<div className="text-primary">02-10-2023</div>
            </div>
            <div className="divide-amber-900"></div>
            <div className="border-gray-200 border-2 mb-2"></div>
            <div className="text-gray-400 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod, soluta. Alias, blanditiis cumque
              doloribus earum esse ex facere fugiat maiores non obcaecati optio quidem quisquam rem, repellat, rerum
              suscipit?
            </div>
            <button className="btn-primary p-1 mt-2 mb-2 rounded">Voir plus</button>
          </div>
        </div>
      </div>
      <div className="divider w-2/3 mx-auto"></div>

      <Footer />
    </>
  );
};
export default News;
