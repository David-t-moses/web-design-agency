import TransitionWrapper from "@/components/TransitionWrapper";
import React from "react";

const ImportanceOfProfessionalWebDesign = () => {
  return (
    <main className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 mx-auto py-20 px-7">
      <TransitionWrapper className="w-full">
        <div className="flex flex-col py-8 px-4 mx-auto items-center justify-center text-center w-4/5">
          <h1 className="text-3xl font-bold">
            Importance of{" "}
            <span className="text-blue-700">Profession Web Design</span>
          </h1>
          <p className="flex flex-col md:text-sm text-[10px] ">
            How professional design elevates your business, improves user
            experience, and boosts SEO.
          </p>
        </div>
      </TransitionWrapper>
      <TransitionWrapper>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            1. First Impressions Matter
          </h2>
          <p className="text-lg leading-relaxed">
            Your website is often the first interaction potential customers have
            with your business. A professionally designed website makes a strong
            first impression, showcasing your brand's credibility and expertise.
            Studies show that users form an opinion about a website in just 50
            milliseconds. Therefore, a sleek, visually appealing website can
            determine whether visitors stay or leave.
          </p>
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdvcmt8ZW58MHx8fHwxNjYyNzUyMzQw&ixlib=rb-1.2.1&q=80&w=1080"
            alt="First Impressions Matter"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </section>
      </TransitionWrapper>

      <TransitionWrapper>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            2. Improved User Experience (UX)
          </h2>
          <p className="text-lg leading-relaxed">
            Professional web design goes beyond aesthetics. It incorporates
            functionality and user experience (UX) best practices to ensure that
            users can easily navigate your site. Simple layouts, intuitive
            navigation, and fast loading times all contribute to a positive user
            experience. Websites with poor UX often have high bounce rates,
            meaning visitors leave without exploring your content.
          </p>
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000"
            alt="Improved UX"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </section>
      </TransitionWrapper>

      <TransitionWrapper>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            3. Boost SEO Rankings
          </h2>
          <p className="text-lg leading-relaxed">
            Search engines favor websites that are optimized for speed, mobile
            responsiveness, and easy navigation—all aspects of professional web
            design. Additionally, well-organized and clean code helps search
            engines better understand the content of your website, leading to
            improved rankings on search engine results pages (SERPs).
          </p>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Boost SEO"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </section>
      </TransitionWrapper>

      <TransitionWrapper>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            4. Builds Trust and Credibility
          </h2>
          <p className="text-lg leading-relaxed">
            A professional-looking website builds trust with your audience. If
            your website looks outdated or is difficult to use, users may
            question the legitimacy of your business. Professional design helps
            build confidence, encouraging users to interact with your site and
            take desired actions, such as making a purchase or contacting you
            for services.
          </p>
          <img
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NjI3NTIzMzg&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Builds Trust"
            className="w-full h-auto mt-4 rounded-lg"
          />
        </section>
      </TransitionWrapper>
    </main>
  );
};

export default ImportanceOfProfessionalWebDesign;
