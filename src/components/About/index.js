import React from "react";
import thumbnail from "@site/static/img/img.jpg";
import "./style.css";

export default function About() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">About</h1>
        <div className="row">
          <div className="col">
            <img
              src={thumbnail}
              class="mt-5 mb-5 img-thumbnail image"
              alt="profile"
            />
            <p className="mb-5">
              hi, I am Eka Jaya Nagara I make this libraries for personal used.
              this project I make it while I am undergraduated from computer
              degree, I making this from my problem, I don't want repeat my
              self, write same code at the same times. so, i make this libraries
              and Try Implementation DRY softare engineering Princile hahah
              don't repeat your self. this project acctually write in Php and
              some used another librares external and I make for simple used on
              next my project, the metode i write from journal and sometimes I
              get from another people and rewriting code and make it clean. of
              course I make it. is not magic just one day, but I make with day
              by day. coding is not magic bro, and about technical is not easy
              for explain to another people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
