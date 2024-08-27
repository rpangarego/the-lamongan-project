import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mt-20 mb-10 text-center">About</h1>

      <div className="flex flex-col-reverse items-center md:flex-row gap-12 mb-16 text-xl">
        <div className="w-5/6">
          <p className="text-justify">
            This project is inspired by Lamongan, an Indonesian street food. The
            purpose of this project is also to introduce Indonesian street food
            to the world.
            <br />
            <br />
            <span className="font-bold">Lamongan</span>, a regency in East Java,
            Indonesia, is renowned for it's diverse and flavorful street food
            scene. While specific historical records may be limited, we can
            piece together the origins of Lamongan street food through cultural
            influences, regional traditions, and local ingredients.
          </p>
        </div>
        <div>
          <img
            src="/images/lamongan.jpeg"
            alt="about_lamongan_image"
            width={800}
          />
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center gap-12 text-xl">
        <div>
          <img
            src="/images/pecel_lele.jpg"
            alt="about_lamongan_image"
            width={500}
          />
        </div>
        <div className="w-5/6">
          <p className="text-xl text-justify">
            <span className="font-bold">Popular Lamongan Street Food:</span>
          </p>
          <br />
          <ul>
            <li>
              <span className="font-bold">Pecel Ayam</span>: This dish consists
              of rice, fried chicken, and a variety of steamed vegetables. Pecel
              ayam offers a delightful blend of savory, spicy, and refreshing
              flavors.
            </li>
            <br />
            <li>
              <span className="font-bold">Lele Goreng</span>: Lele goreng is a
              popular fried fish dish made from catfish. The catfish is
              deep-fried until crispy and served with rice and chili sauce.
            </li>
            <br />
            <li>
              <span className="font-bold">Soto</span>: Soto is a diverse
              Indonesian soup with various regional variations. It is a famous
              type of soto with a yellow broth and slightly sour taste.
            </li>
            <br />
            <li>
              <span className="font-bold">Tempe and Tahu</span>: These are two
              popular Indonesian soy products. Tempe is a fermented soybean
              cake, while tahu is a tofu-like product.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
