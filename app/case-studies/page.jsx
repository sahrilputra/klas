import React from "react";
import PageHeaders from "../components/PageHeaders";

const CaseStudiesPage = () => {
  return (
    <main>
      <PageHeaders
        textColor="black"
        paragraph="See how top communities, online schools, and brands globally are using Klas to power live learning for their students."
        text="Customer Case Studies"
      />

      <section>
        <div className="flex items-center justify-between max-[620px]:gap-[20px] max-[620px]:justify-center max-[620px]:flex-wrap gap-[25px] mt-[80px] mx-auto max-w-[700px]">
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/designpal-dark.svg"
              alt="design pal - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/dev-career-dark.svg"
              alt="design pal - useCases"
            />
          </div>
          <div className="w-[181px] max-[620px]:w-[150px] h-[150px] box-shadow-two grid place-items-center p-[10px] rounded-[12px]">
            <img
              src="images/casestudiespage/ai-school-dark.svg"
              alt="design pal - useCases"
            />
          </div>
        </div>
      </section>

      <section className="py-[120px] max-md:py-[80px]">

      </section>
    </main>
  );
};

export default CaseStudiesPage;
