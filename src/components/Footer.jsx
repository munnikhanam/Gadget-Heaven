import Heading from "./Heading";

const Footer = () => {
  return (
    <div>
      <Heading
        tittle={"Gadget Heaven"}
        subtittle={"Leading the way in cutting-edge technology and innovation."}
      />
      <div className="border-t-1 border-[#09080F1A]">
        <footer className="footer sm:footer-horizontal  p-10 mt-5">
          <nav>
            <h6 className="footer-title font-bold text-black">Services</h6>
            <a className="link link-hover text-[#09080F99]">Product Support</a>
            <a className="link link-hover text-[#09080F99]">Order Tracking</a>
            <a className="link link-hover text-[#09080F99]">
              Shipping & Delivery
            </a>
            <a className="link link-hover text-[#09080F99]">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title font-bold text-black">Company</h6>
            <a className="link link-hover text-[#09080F99]">About us</a>
            <a className="link link-hover text-[#09080F99]">Contact</a>
            <a className="link link-hover text-[#09080F99]">Careers</a>
          </nav>
          <nav>
            <h6 className="footer-title font-bold text-black">Legal</h6>
            <a className="link link-hover text-[#09080F99]">Terms of Service</a>
            <a className="link link-hover text-[#09080F99]">Privacy policy</a>
            <a className="link link-hover text-[#09080F99]">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
