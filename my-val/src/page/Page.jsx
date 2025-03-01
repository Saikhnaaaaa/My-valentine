import axios from "axios";
import React, { useState } from "react";

const Page = () => {
  const [text, setText] = useState("Үгүй");
  const [css, setCss] = useState("");
  const [textYes, setTextYes] = useState("Миний валентин болохгүй биз?");

  const sendMail = async () => {
    setTextYes("Тиймээ, валентинаар уулзая");

    const response = await axios.post(
      "http://localhost:4000/sendEmail",
      textYes
    );

    console.log(response.config.data, "responsedata");
  };

  const YesClick = () => {
    setTextYes("Тиймээ, валентинаар уулзая");
    setCss("py-2 px-4");
    setText("Тиймээээ");
  };

  const NoClick = () => {
    setText("Итгэлтэй байна уу?");
    setCss("py-4 px-8");
    setTextYes("Миний валентин болохгүй биз?");
    if (text === "Итгэлтэй байна уу?") {
      setText("Үнэхээр итгэлтэй байна уу?");
      setCss("py-8 px-12");
    }
    if (text === "Үнэхээр итгэлтэй байна уу?") {
      setText("Тийм гээч ");
      setCss("py-10 px-16");
    }
    if (text === "Тийм гээч ") {
      setText("Уйллаа шүү");
      setCss("py-12 px-18");
    }
    if (text === "Уйллаа шүү") {
      setText("Хонгор минь тийм гээрэй");
      setCss("py-14 px-20");
    }
    if (text === "Хонгор минь тийм гээрэй") {
      setText("Битгий ингэлдээ");
      setCss("py-16 px-24");
    }
    if (text === "Битгий ингэлдээ") {
      setText("Гуйж байна");
      setCss("py-18 px-28");
    }
    if (text === "Гуйж байна") {
      setText("Зайрмаг авч өгнө шүү");
      setCss("py-20 px-32");
    }
    if (text === "Зайрмаг авч өгнө шүү") {
      setText("Бас хайрын гал улаан сарнай");
      setCss("py-24 px-36");
    }
    if (text === "Бас хайрын гал улаан сарнай") {
      setText("Мэдээж шоколад");
      setCss("py-28 px-36");
    }
    if (text === "Мэдээж шоколад") {
      setText("Тийм гэж хэлнэ гэдэгт итгэж байна");
      setCss("py-32 px-40");
    }
    if (text === "Тийм гэж хэлнэ гэдэгт итгэж байна") {
      setText("Тийм гэж хэлнэ гэдэгт үнэхээр итгэж байна");
      setCss("py-72 px-72");
    }
  };

  return (
    <div className="w-screen h-screen flex    flex-col  items-center justify-center mx-auto ">
      <div className="flex-col lg:flex p-4 items-center justify-center">
        <div className="relative text-sm text-center lg:text-2xl mb-6 font-medium">
          <h3>Чамайг хайрла гээд зүрх цохилоод байна</h3>
          <h3>Чамайг мартваа гээд зүүд сануулаад байна</h3>{" "}
          <h3>Чамайг харах гээд харц хайгаад байна</h3>{" "}
          <h3>Чамтай л уулзах гээд зүрх тэмүүлээд байна</h3>
        </div>
        <h2 className="text-2xl  text-center">
          ❤️ Удахгүй болох Гэгээн хайрын 💑 валентины баярын мэндийг хүргэе ❤️
        </h2>
        <img
          className="w-72 h-72 p-2 rounded-full mx-auto"
          src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/471304926_10229121009555783_1805814774995884549_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=6xgCzs1wIzsQ7kNvgGz4BGJ&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=A-VpBnCo6MiXWXaDhRZK6z7&oh=00_AYCyGyincpJcxogTj-R9esFHak_M13d1Gbz9NNp1-jYdOQ&oe=67A9651F"
          alt="image"
        />
        <div className="absolute right-20 top-100  lg:right-[800px]">
        <img className="w-20 h-20 rounded-2xl" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDdsZmd6ajFxMTdzNmZjNDNqeXRjeTAxdDg2M2Z2eHFrOHRyamtoeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UkfUod3TFW66J2BWKK/giphy.gif" alt="" />
      </div>
      </div>

      

      <div>
        <h2 className="text-red-500 text-xl">{textYes}</h2>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <div
          onClick={() => {
            YesClick(), sendMail();
          }}
          className={`bg-green-800 text-white border border-green-800 hover:bg-white hover:text-green-800 rounded px-4 py-2 cursor-pointer ${css}`}
        >
          Тэгий
        </div>
        <div
          onClick={() => NoClick()}
          className="bg-red-800 text-white border border-red-800 hover:bg-white hover:text-red-800 rounded px-4 py-2 cursor-pointer"
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default Page;
