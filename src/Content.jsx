import React from "react";

const Content = () => {
  return (
    <>
      <div className=" w-auto h-auto flex items-center justify-center m-28">
        <div className="flex gap-16 flex-wrap">
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D4GACXWCRKK6JHQ730XD"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Using Abstract</h1>
              <p className="text-lg">
                Abstract lets you manage, version, and document your designs in
                one place.
              </p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>

          {/* 2nd card */}
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D45NKFCN3388ZCBJB878"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Manage your account</h1>
              <p className="text-lg">
                Configure your account settings, such as your email, profile
                details, and password.
              </p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>

          {/* 3rd */}
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D3M8CRR0C2V5GREVR6HK"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">
                Manage organizations, teams, and projects
              </h1>
              <p className="text-lg">
                Use Abstract organizations, teams, and projects to organize your
                people and your work.
              </p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>

          {/* 4th */}
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D38K1S1M9WKWSQZE62YE"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Manage billing</h1>
              <p className="text-lg">
                Change subscriptions and payment details.
              </p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>
          {/* 5th */}
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D3S3QY5190TZE3H8ZSVK"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Authenticate to Abstract</h1>
              <p className="text-lg">
                Set up and configure SSO, SCIM, and Just-in-Time provisioning.
              </p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>
          {/* 6th */}
          <div className="w-96 h-48 flex gap-6">
            <img
              className="w-20 h-20"
              src="https://help.abstract.com/hc/theming_assets/01HZH4D3G4S2K93BN3WJPT8600"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-bold">Abstract support</h1>
              <p className="text-lg">Get in touch with a human.</p>
              <a className="text-blue-700" href="#">
                Learn More &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
