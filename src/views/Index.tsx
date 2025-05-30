import Slider from "../components/common/Slider";
import ItemList from "../components/common/ItemList";
import { MENUS } from "../constants/category";

const Index = (): JSX.Element => {
  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
         <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{MENUS.FASHION}</h2>
         <ItemList category="fashion" limit={4} scrollable />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{MENUS.ACCESSORY}</h2>
          <ItemList category="accessory" limit={4} scrollable />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{MENUS.DIGITAL}</h2>
          <ItemList category="digital" limit={4} scrollable />
      </section>
    </>
  );
};

export default Index;
