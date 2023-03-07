import IconChevronRight from "assets/IconChevronRight";
import IconChevronLeft from "assets/IconChevronLeft";

export default function Ad(props: AdProps) {
  return (
    <div
      className={`relative w-[522px] h-[714px] font-['Inter']`}
      style={props.style}
    >
      <div className="absolute left-0 top-0 w-[522px] h-[714px]">
        <div className="left-0 top-0 absolute bg-white w-[522px] h-[714px] drop-shadow-lg rounded-[20px]" />
      </div>
      <div className="absolute w-[460px] h-[268px] left-[31px] top-[43px]">
        <div className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/374fdbb854e47b699ba1561346606f99ab3935f0:0.webp)_no-repeat_center_/_contain] left-0 top-0 absolute w-[460px] h-[268px]" />
      </div>
      <div className="h-44 absolute text-left text-black w-[456px] left-[33px] top-[351px]">
        <div className="h-44 absolute left-0 top-0 leading-none inline-block w-[456px]">
          <p className="text-4xl font-bold inline m-0 leading-[normal]">
            Title text
            <br />
          </p>
          <p className="font-normal inline m-0 text-[21px] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sollicitudin auctor tortor. Donec id magna a nisl placerat
            ultricies.
          </p>
        </div>
      </div>
      <div className="absolute text-center font-bold w-[458.45px] h-[75.91px] left-[30.83px] top-[564.59px] text-[rgba(148,163,184,1)]">
        <IconChevronRight />
        <IconChevronLeft />
        <p className="absolute inline m-0 h-[68px] w-[67px] left-[196.17px] top-[0.41px] text-[54px] leading-[normal]">
          3
        </p>
      </div>
    </div>
  );
}

Ad.defaultProps = {
  style: {}
};

interface AdProps {
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
