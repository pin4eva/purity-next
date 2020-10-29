import FrontHeader from "@/components/FrontHeader";
import ProductItem from "@/components/Product";
import React from "react";
import styled from "styled-components";
import { Grid } from "theme-ui";

const Home = () => {
  return (
    <Wrapper>
      <FrontHeader />

      <div className="banner">
        <div className="container">
          <div className="left">
            <h1>Purity is our Heritage</h1>
            <p className="d-none d-md-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              volutpat blandit aliquam, eu, morbi condimentum tortor. Sed enim
            </p>
          </div>
        </div>
      </div>
      <main>
        <div className="product container ">
          <div className="top-desc">
            <div className="line bg-success flex-1"></div>
            <h2 className="mx-4 font-weight-bold">Products</h2>
            <div className="line bg-success flex-1"></div>
          </div>
          <div className="desc">
            <p className="text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              vulputate blandit amet laoreet pretium purus mauris. Risus
              pharetra semper fames maecenas auctor accumsan amet interdum
              maecenas. Elit integer ipsum turpis netus condimentum non egestas
              tortor amet.
            </p>
          </div>
          <div className="product-list">
            <Grid columns={[1, null, 2]}>
              {productList.map((product, i) => (
                <ProductItem key={i} product={product} />
              ))}
            </Grid>
          </div>
          <div className="text-center my-4">
            <button className="btn-outline-success btn rounded-0 btn-lg">
              Contact Us
            </button>
          </div>
        </div>
        <div className="about-us  ">
          <div className="top-desc mt-5 container">
            <div className="line bg-success flex-1"></div>
            <h2 className="mx-4 font-weight-bold">About</h2>
            <div className="line bg-success flex-1"></div>
          </div>
          <div className="about-bg"></div>
          <div className="container text-center">
            <h4 className="mt-3 font-weight-bold">Core Value</h4>
            <p className="mt-3 ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius et
              lectus magna mi risus, scelerisque. Euismod velit ut id dolor. Id
              risus magna risus eget massa et feugiat condimentum. Ullamcorper
              tincidunt nunc ac, vel, faucibus. Purus semper nunc, risus risus
              non. Maecenas fermentum tristique sagittis ipsum duis egestas. Et
              sed tortor proin sit amet mi arcu, blandit tempor. Id amet
              tincidunt enim viverra pulvinar risus. Ultrices velit arcu proin
              amet, netus. Consectetur sit at risus, vel. Gravida sem at nullam
              egestas. Elit magna nulla amet sit. Sed condimentum lacinia nec
              odio eget in tristique. Etiam mauris, suspendisse imperdiet lectus
              pellentesque pellentesque arcu. Vulputate velit nibh placerat
              rhoncus, hendrerit faucibus. Fames mauris, scelerisque phasellus
              tempus et nulla ornare tellus. Ac nec neque, nunc nisi, tempus
              viverra. Et aliquam dolor amet interdum potenti id.
            </p>
          </div>
        </div>
        <div className="partners container mt-4">
          <div className="top-desc mb-4 ">
            <div className="line bg-success flex-1"></div>
            <h2 className="mx-4 font-weight-bold">Our Partners</h2>
            <div className="line bg-success flex-1"></div>
          </div>
          <Grid className="partners-logo" columns={[1, 2, 3]}>
            {partnersList.map((part, i) => (
              <img src={part} alt="" key={i} />
            ))}
          </Grid>
        </div>
        <div className="contact-us container mt-4">
          <div className="top-desc mb-4 ">
            <div className="line bg-success flex-1"></div>
            <h2 className="mx-4 font-weight-bold">Contact Us</h2>
            <div className="line bg-success flex-1"></div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .banner {
    background: url("bg-1.png") no-repeat;
    background-size: cover;
    background-position: right;
    height: 15rem;
    display: flex;
    align-items: center;

    .container {
      .left {
        width: 100%;
        color: white;
        h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          font-weight: 200;
          line-height: 27px;
        }
      }
      @media screen and (min-width: 768px) {
        height: 706px;
        .left {
          width: 100%;
          max-width: 568px;
          h1 {
            font-size: 4.2rem;

            line-height: 80px;
          }
        }
        display: flex;
        align-items: center;
      }
    }
  }
  .product {
    @media screen and (min-width: 768px) {
      .desc {
        width: 100%;
        max-width: 900px;
        margin: 4rem auto;
        p {
          font-size: 1.2rem;
          font-style: italic;
          line-height: 30px;
        }
      }
      margin-top: 50px;
    }
  }
  .about-us {
    font-size: 1.2rem;
    font-weight: 200;
    .about-bg {
      margin-top: 2rem;
      height: 10rem;
      background: url("bg-2.png") no-repeat;
      background-size: cover;
      @media screen and (min-width: 768px) {
        height: 30rem;
      }
    }
  }
  .partners {
    .partners-logo {
      justify-content: center;
    }
    img {
      width: 100%;
      /* max-width: 15rem; */
      /* height: 150px; */
    }
  }
`;

const productList = [
  {
    image: "prod-1.png",
    name: "Purity Knapsack Sprayer",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sit orci quisque sed in tellus vel donec. Sit placerat sed gravida nibh. Et, neque tortor semper eget. At rhoncus proin in aenean convallis turpis. Pretium feugiat non urna.`,
  },
  {
    image: "prod-2.png",
    name: "Purity Knapsack Sprayer",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sit orci quisque sed in tellus vel donec. Sit placerat sed gravida nibh. Et, neque tortor semper eget. At rhoncus proin in aenean convallis turpis. Pretium feugiat non urna.`,
  },
  {
    image: "prod-3.png",
    name: "Purity Knapsack Sprayer",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sit orci quisque sed in tellus vel donec. Sit placerat sed gravida nibh. Et, neque tortor semper eget. At rhoncus proin in aenean convallis turpis. Pretium feugiat non urna.`,
  },
  {
    image: "prod-4.png",
    name: "Purity Knapsack Sprayer",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sit orci quisque sed in tellus vel donec. Sit placerat sed gravida nibh. Et, neque tortor semper eget. At rhoncus proin in aenean convallis turpis. Pretium feugiat non urna.`,
  },
];

const partnersList = [
  "part-1.png",
  "part-2.png",
  "part-3.png",
  "part-4.png",
  "part-5.png",
  "part-6.png",
  "part-7.png",
  "part-8.png",
  "part-9.png",
  "part-10.png",
];
export default Home;
