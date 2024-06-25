import React from "react";

const Search = () => {
  return (
    <div>
      <div className=" h-80 w-auto bg-[#d0beff] flex items-center justify-center">
        <div>
          <h1 className=" text-center text-7xl mb-6">How can we help?</h1>
          <form className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search for articles"
              className="border-[1px] border-slate-950 bg-[#f5f5f5] rounded-md py-3 px-5 w-full mr-2"
            />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAoZJREFUSEvllknIjlEUx39fxiwsbAyfKZEhURbfAgspJGxkKoVMoS8lEdlYsUCGIsocKbJgIWxYUTYoylQkUyKFMg/nr/PoerzPc+/71OtbOLv3fc49v3vPPed/bhNtZE1txCUV3BFoAQYBPYDnwAPgGvC5yuZj4H7AVmAq0LkG4ANwBlgDPKlnA2XgFcB2QKeN2SdgGXA45ph9LwLrlKvd6auldy9wCbgLPAQGAEOA8cBSoJ37brCNbkqB1wIvB/b4Yt3jFOBeSbARdv/ngGb3mQ2cjMHz4KHATaCDn24s8CoWBOgNXAH6AO+BwZaJZ2Xr8uALFmCiV6oWP0qAZi4jgevwq1OO2pXMTwV3A1678w5gVR3QzPUEMAd4Cyjet6IY4YlnAKfccTRwtQJ4ZnC/pTFC8Epgp8O6WlW/qwDu71WvpQuAIyknXh+0QvuyNJVsqBPw0b+vBbakgNWP+9yxpwnCiwon7gU89XWzgqv7K1SY6gnARfeYDJyvAJ4GnPV1w4HbKSfuArxxidxvO19SAXwMmAv8cG0vHCD5Pj4NTAe+W3UOcxFJ5auPb7jzARsai1P7WH7SYKVHk0hyOQZ4mUDu68ol2ZQWaHwqe4VWS6sXmQQq1bLH1s+TTBTulMQY5Vrd3X12m8y2xjZbNJ02W1us88WaThoal4PpJDnVVYzzlObjaPMH6z1x5q8ptQtQT8fsiz8IpH6ZlcJjLxDd+TZA7SVxyJu0+JD9udH7d6FNKBVWFB4DZwEE1ZtroL+5NLXuA7cCpcp883D91ub+sFRwLNX574KpQBVfrTnPKv146NQosBghXFWuav9tjQQLIvVTT2tg/JNUR6+m0Scu3MD/B/4JVp9tH2VWMqoAAAAASUVORK5CYII=" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
