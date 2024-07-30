import FooterNav from "@modules/layout/components/footer-nav";
import FeaturedArea from '@modules/layout/components/featuredArea';
import ResponsiveImages from '@modules/home/components/responsiveImages/index';
const Footer = () => {

  const imageUrls = [
    '/img/images/1.webp',
    '/img/images/2.jpg',
    '/img/images/3.jpg',
    '/img/images/4.jpg',
    '/img/images/1.webp',
  ];  

  return (
    <footer>
      <ResponsiveImages images={imageUrls} />
      <FooterNav />
    </footer>
  )
}

export default Footer
