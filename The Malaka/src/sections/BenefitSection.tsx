import Manfaat2Book from "../components/Manfaat2Book";
import ManfaatBook from "../components/ManfaatBook";
import Prantinjau from "../components/Prantinjau";

export default function BenefitSection() {
  return (
    <section className="bg-lightBlue">
      <div className="container_section space-y-20 overflow-hidden px-6 pb-48 pt-24 font-dm_sans lg:px-0 lg:pb-24">
        {/* book 1 */}
        <ManfaatBook />
        {/* book 2 */}
        <Manfaat2Book />
        {/* book3 */}
        <Prantinjau />
      </div>
    </section>
  );
}
