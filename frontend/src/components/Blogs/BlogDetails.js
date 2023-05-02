import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Navigate, useParams } from 'react-router';
import {
  deletePostAction,
  fetchPostDetailsAction,
} from '../../redux/slices/posts/postSlices';
import { useDispatch, useSelector } from 'react-redux';
import DateFormatter from '../../utils/DateFormatter';
import LoadingComponent from '../../utils/LoadingComponent';

const BlogDetails = (props) => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostDetailsAction(id));
  }, [id, dispatch]);

  //select from store
  const post = useSelector((state) => state?.post);
  const { postDetails, loading, appErr, serverErr, isDeleted } = post;

  //select from store
  const user = useSelector((state) => state?.users);

  const _id = user?.userAuth?._id;

  const isCreatedBy = postDetails?.user?._id === _id;
  console.log(isCreatedBy);

  //redirect
  if (isDeleted) return <Navigate to="/blogs" />;
  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : appErr || serverErr ? (
        <h1>
          {serverErr} {appErr}
        </h1>
      ) : (
        <>
          <div>
            {/* <!-- Picture Start --> */}
            <div
              style={{
                width: '100%',
                height: '500px',
              }}
              class="container-fluid bg-dark p-0 mb-5"
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                class=""
                src={postDetails?.image}
                alt=""
              />
            </div>
          </div>
          {/* <!-- Picture End --> */}

          <div className="container col-lg-12">
            <h1
              className="text-primary display-5 text-center mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {postDetails?.title}
            </h1>
            <div className="row">
              <div className="col-lg-4 text-primary">
                Created By: {postDetails?.user?.firstName}{' '}
                {postDetails?.user?.lastName}
              </div>
              <div className="col-lg-4 text-primary">
                Created On: <DateFormatter date={postDetails?.createdAt} />
              </div>
              <div className="col-lg-4 text-primary">
                Starzec Energy: pages/blogs
              </div>
            </div>
            <hr />
            <p>{postDetails?.description}</p>
            {isCreatedBy ? (
              <>
                {' '}
                <Link
                  to={`/update-blog/${postDetails?._id}`}
                  className="text-primary"
                >
                  Edit
                </Link>{' '}
                <Link
                  onClick={() => dispatch(deletePostAction(postDetails?._id))}
                  className="text-primary"
                >
                  Delete
                </Link>
              </>
            ) : null}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default BlogDetails;
