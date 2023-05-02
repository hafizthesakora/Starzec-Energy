import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPostsAction } from '../../redux/slices/posts/postSlices';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../utils/LoadingComponent';
import DateFormatter from '../../utils/DateFormatter';
import { fetchCategoriesAction } from '../../redux/slices/category/categorySlice';

const BlogList = () => {
  //dispatch
  const dispatch = useDispatch();

  //fetch posts
  useEffect(() => {
    dispatch(fetchPostsAction(''));
  }, [dispatch]);

  //fetch categories
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  //select posts from store
  const post = useSelector((state) => state?.post);
  const { postLists, loading, appErr, serverErr } = post;

  //select categories
  const category = useSelector((state) => state?.category);
  const {
    categoryList,
    loading: catLoading,
    appErr: cateAppErr,
    serverErr: catServerErr,
  } = category;
  return (
    <div>
      {/* <!-- Our Blogs will be here  Start --> */}
      <div className="container-xxl py-5 row">
        <div className="col-lg-2">
          <h2>CATEGORIES</h2>
          <hr />
          <p
            onClick={() => dispatch(fetchPostsAction(''))}
            style={{ cursor: 'pointer' }}
            className="text-primary"
          >
            View All
          </p>
          {catLoading ? (
            <LoadingComponent />
          ) : cateAppErr || catServerErr ? (
            <h1>
              {catServerErr} {cateAppErr}
            </h1>
          ) : categoryList?.length <= 0 ? (
            <h1>No Category Found</h1>
          ) : (
            categoryList?.map((category) => (
              <>
                <hr />
                <p
                  onClick={() => dispatch(fetchPostsAction(category?.title))}
                  className="text-primary"
                  style={{ cursor: 'pointer' }}
                >
                  {category?.title}
                </p>
              </>
            ))
          )}
        </div>
        <div className="container col-lg-10">
          <h1
            className="display-5 text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Read our Blogs!
          </h1>

          <div className="row g-4 m-5">
            {/* Posts go here */}
            {loading ? (
              <LoadingComponent />
            ) : appErr || serverErr ? (
              <h1>
                {serverErr} {appErr}
              </h1>
            ) : postLists?.length <= 0 ? (
              <h1>No Post Found</h1>
            ) : (
              postLists?.map((post) => (
                <div className="col-lg-4">
                  <div className="testimonial-item text-center border">
                    <img
                      className="img-fluid p-2 mx-auto mb-4"
                      src={post?.image}
                      style={{ width: '100%', height: '80%' }}
                      alt=""
                    />
                    <div className="testimonial-text text-center pb-2">
                      <Link to={`/blogs/${post?.id}`}>
                        <h5 className="mb-1">{post?.title}</h5>
                      </Link>
                      <span className="fst-italic">{post?.category}</span>
                      <br />
                      {post?.numViews} views -{' '}
                      <DateFormatter date={post?.createdAt} />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
