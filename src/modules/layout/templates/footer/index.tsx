import FooterNav from "@modules/layout/components/footer-nav";
import FeaturedArea from '@modules/layout/components/featuredArea';
import ResponsiveImages from '@modules/home/components/responsiveImages/index';
const Footer = () => {

  const imageUrls = [
    'https://scontent.cdninstagram.com/v/t51.29350-15/106595569_1581721228676456_1388634993187902509_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=I1rAvPS_g84Q7kNvgGAw2-U&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&gid=AcTDojHsM1ntbAnj9Lez_Lp&oh=00_AYBRvrN4_DIrfIG1SYDg_XuWe3mp6KdnlZg9XLSWdjB_Bw&oe=66AC5304',
    'https://via.placeholder.com/292',
    'https://via.placeholder.com/292',
    'https://via.placeholder.com/292',
    'https://via.placeholder.com/292',
  ];  

  return (
    <footer>
      <ResponsiveImages images={imageUrls} />
      <FooterNav />
    </footer>
  )
}

export default Footer
