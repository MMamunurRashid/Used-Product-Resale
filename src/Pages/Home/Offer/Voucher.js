import React from "react";
import voucher from "../../../assets/voucher.gif";
import helloWave from "../../../assets/wave-hand.gif";
import Swal from "sweetalert2";

const Voucher = () => {
  const voucherClick = () => {
    const voucherAmount = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Congratulations!! You have Got ${voucherAmount} BDT`,
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly my-16">
      <div>
        <p className="text-2xl font-mono">Hot Deals!!! FREE!! FREE!! FREE!!</p>
        <h1 className="text-4xl font-serif font-bold flex">
          Collect your Voucher!!!!!!!{" "}
          <img className="w-20 h-20 -mt-7" src={helloWave} alt="" />
        </h1>
        <div>
          <h1 className="text-xl font-serif mt-16">
            You are able to take a gift Voucher, <br /> that have some amount of
            discount !! <br />
            In between 50 - 100 BDT!!!
          </h1>
          <div className="">
            <button
              onClick={voucherClick}
              className="btn btn-accent hover:btn-secondary mt-10 w-96 text-xl "
            >
              Try Your Luck
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="mt-0 md:-mt-20" src={voucher} alt="" />
      </div>
    </div>
  );
};

export default Voucher;
