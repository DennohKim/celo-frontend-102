import {
  AboutUs,
  Button,
  Collections,
  Container,
  FAQ,
  FeaturedArtworks,
  Footer,
  Hero,
  Navbar,
  Sponsor,
  TopCreator,
 

} from '@/components';
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import AddProductModal from "@/components/AddProductModal";
import ProductList from "@/components/ProductList";

// Export the Home component
export default function Home() {
  return ( 
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Navbar />
      <div>
        {/* <AddProductModal /> */}
        {/* <ProductList /> */}
    </div>
      <Hero />
      <Sponsor />
      <AboutUs />
      <Collections />
      <FeaturedArtworks />
      <TopCreator />
      <FAQ />
      <Container>
        <div
          className={
            'bg-gradient-to-b from-[#B75CFF] to-[#671AE4] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44'
          }
        >
          <h2 className='font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center'>
              Explore our sneaker NFTs available.
          </h2>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter}>
            <Button>Get Started</Button>
          </Reveal>
        </div>
     
      </Container>
 
    </div>
  );
};
  


