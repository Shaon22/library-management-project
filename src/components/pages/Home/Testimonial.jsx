import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
const Testimonial = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Feedbacks</h1>
            <div className='mt-20'>
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="p-5 w-[50%] mx-auto bg-base-100 shadow-2xl
                     ">
                        <img className="mx-auto rounded-full" src="https://i.ibb.co/n3jhmCY/istockphoto-1139722168-1024x1024.jpg" alt="" />

                        <h1 className="text-lg font-bold my-3 text-center">I love using the online library website! Its so convenient to comfort of my home. The user interface is user-friendly, and I can easily search for and borrow books. It has become an essential tool for my research and reading needs.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-5 w-[50%] mx-auto bg-base-100 shadow-2xl
                     ">
                        <img className='mx-auto rounded-full' src={'https://i.ibb.co/v3RrVLD/istockphoto-1096419446-612x612.jpg'} alt="" />
                        <h1 className="text-lg font-bold my-3 text-center">The online library website is a lifesaver for me. I dont have to physically go to the library anymore, and I can find. The websites search functionality is powerful, and the resource organization is excellent.</h1>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="p-5 w-[50%] mx-auto bg-base-100 shadow-2xl
                     ">
                        <img className='mx-auto rounded-full' src={'https://i.ibb.co/m6kYYYY/rsz-stock-photo-portrait-bearded-smiling-man-shirt-isolated-white.jpg'} alt="" />
                        <h1 className="text-lg font-bold my-3 text-center">I appreciate the online librarys vast collection of e-books and digital resources.However, I sometimes encounter issues with slow loading times, especially during peak hours. It would be great if the websites performance could be improved.</h1>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="p-5 w-[50%] mx-auto bg-base-100 shadow-2xl
                     ">
                        <img className='mx-auto rounded-full' src={'https://i.ibb.co/BLSFjg5/rsz-looks-into-camera-young-man-casual-clothes-standing-indoors-studio-146671-59953.jpg'} alt="" />
                        <h1 className="text-lg font-bold my-3 text-center">The online library website is fantastic. It offers a great variety of genres, and I can easily borrow and return books digitally. The integration with e-readers is a huge plus. My only suggestion would be to add more audiobooks to the collection.</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default Testimonial;