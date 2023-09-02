/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import error from '../../assets/error/error.png'

const ErrorPage = () => {
  return (
    <div>
      <section className="h-screen flex items-center p-16 bg-bse-100 text-neutral">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <div className="mb-8 font-extrabold text-9xl flex justify-center items-center">
              <img className="" src={error} alt="" />
            </div>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8">
              But don't worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 font-semibold rounded-md text-white "
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
