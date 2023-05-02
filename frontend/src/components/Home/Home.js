import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchPostsAction } from '../../redux/slices/posts/postSlices';
import Footer from '../Footer/Footer';
import { AboutHome } from './AboutHome';
import { FactHome } from './FactHome';
import { Header } from './Header';
import Membership from './Membership';
import ProjectHome from './ProjectHome';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import ServiceHome from './ServiceHome';
import LoadingComponent from '../../utils/LoadingComponent';
import { Link } from 'react-router-dom';
import DateFormatter from '../../utils/DateFormatter';

const Home = () => {
  //dispatch
  const dispatch = useDispatch();

  //fetch posts
  useEffect(() => {
    dispatch(fetchPostsAction(''));
  }, [dispatch]);

  //select posts from store
  const post = useSelector((state) => state?.post);
  const { postLists, loading, appErr, serverErr } = post;
  return (
    <div>
      <Header />

      <AboutHome />

      <FactHome />

      <ServiceHome />

      <ProjectHome />

      <Membership />

      <>
        <h1
          className="display-5 text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          Read our Blogs!
        </h1>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="col-lg-4">
            <div className="testimonial-item text-center border">
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
                  <>
                    <SwiperSlide>
                      <img
                        className="img-fluid p-2 mx-auto mb-4"
                        src={post.image}
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
                    </SwiperSlide>
                  </>
                ))
              )}
            </div>
          </div>
        </Swiper>
      </>

      <Footer />
    </div>
  );
};

export default Home;
