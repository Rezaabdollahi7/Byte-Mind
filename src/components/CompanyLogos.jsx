import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="grid grid-cols-1 overflow-hidden md:grid-cols-2 md:gap-20 md:gap-y-0  lg:grid-cols-3 xl:grid-cols-5 mt-16 mx-auto w-max xl:gap-36">
        {companyLogos.map((logo, index) => (
          <li className="col-span-1 h-[8.5rem]" key={index}>
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
