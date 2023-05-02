import React, { useEffect } from 'react';

import Footer from '../Footer/Footer';
import { fetchCategoriesAction } from '../../redux/slices/category/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import DateFormatter from '../../utils/DateFormatter';
import LoadingComponent from '../../utils/LoadingComponent';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  const category = useSelector((state) => state?.category);
  const { categoryList, loading, appErr, serverErr } = category;
  return (
    <div>
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Category List
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                category-list
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : appErr || serverErr ? (
        <h2>
          {serverErr} {appErr}
        </h2>
      ) : categoryList?.length <= 0 ? (
        <h2>No Category Found</h2>
      ) : (
        <div
          className="container-xxl my-5 py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-12 wow fadeIn" data-wow-delay="0.3s">
                <h1 className="display-6 text-black mb-5">
                  All Categories Available
                </h1>

                <div
                  className="col-md-12 text-light wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <td>AUTHOR</td>
                        <td>TITLE</td>
                        <td>CREATED AT</td>
                        <td>EDIT</td>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryList?.map((category) => (
                        <tr>
                          <td>
                            {category?.user?.firstName}{' '}
                            {category?.user?.lastName}
                          </td>
                          <td>{category?.title}</td>
                          <td>
                            {<DateFormatter date={category?.createdAt} />}
                          </td>
                          <td>
                            <Link to={`/update-category/${category?._id}`}>
                              Update
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <!-- Visiting Hours End --> */}

      <Footer />
    </div>
  );
};

export default CategoryList;
