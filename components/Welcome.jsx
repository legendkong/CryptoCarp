import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from '.';
import { shortenAddress } from '../utils/shortenAddress';

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// Creating input component for form
// placeholder variable passed through props
const Input = ({ placeholder, name, type, value, handleChange }) => (
<input
  placeholder={placeholder}
  type={type}
  step="0.0001"
  value={value}
  onChange={(e) => handleChange(e, name)}
  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
};

return (
  <div className="flex w-full justify-center items-center">
    <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
    <div className=" flex flex-1 justify-start flex-col mf:mr-10">
      <h1 className="text-3x1 sm:text-5xl text-white text-gradient py-1">
      Send Crypto <br /> across the world
      </h1>
      <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
      Get into the world of crypto before it's too late! Buy and sell cryptocurrencies easily on CryptoCarp!
      </p>
      <br />
      <br />
      <br />
      <h1 className="text-3x1 sm:text-5xl text-white text-gradient py-1">
      About CryptoCarp
      </h1>
      <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
       According to tradition, a carp that could swim upstream and then leap the falls of the Yellow River at Dragon Gate would be transformed into a dragon. Evolve your investments with CryptoCarp today! (Story was inspired by Kaido from One Piece)
      </p>

      {!currentAccount && (
        <button
        type="button"
        onClick={connectWallet}
        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#FFF700]">
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
      )}

    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
        {/* 6 advantages of using CryptoCarp */}
    <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
    <div className={commonStyles}>Security</div>
    <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
    <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
    <div className={commonStyles}>Low fees</div>
    <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
      </div>
  </div>


  <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
      <div className="flex justify-between flex-col w-full h-full">
          <div className="flex justify-between items-start">
          <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
            <SiEthereum fontSize={21} color="#fff" />
          </div>
          <BsInfoCircle fontSize={17} color="#fff" />
          </div>
          <div>
          <p className="text-white font-light text-sm">
            {/* Render address of blockchain wallet that is currently connected to application */}
            {shortenAddress(currentAccount)}
          </p>
          <p className="text-white font-semibold text-lg mt-1">
            Ethereum
          </p>
          </div>
        </div>
      </div>

       {/* form for wallet */}
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
        <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
        <Input placeholder="Enter Message To Receiver" name="message" type="text" handleChange={handleChange} />
        {/* gray line below form */}
        <div className="h-[1px] w-full bg-gray-400 my-2"></div>

        
          {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
        </button>
        )}
      </div>
      </div>
    </div>
  </div>

);
}

export default Welcome;
